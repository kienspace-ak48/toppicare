import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import usePageConfig from "../../hooks/usePageConfig";

/** Facebook Pixel ID: chuỗi số, thường 15–16 chữ số */
const META_PIXEL_ID_RE = /^\d{10,24}$/;

/**
 * Nạp Meta Pixel sau khi có page config (customize.meta_pixel_id).
 * SPA: gửi PageView khi đổi route (trừ lần đầu đã track trong snippet).
 */
export default function MetaPixel() {
  const { data } = usePageConfig();
  const location = useLocation();
  const firstRoute = useRef(true);

  const raw = data?.data?.customize?.meta_pixel_id;
  const pixelId =
    typeof raw === "string" ? raw.replace(/\D/g, "").slice(0, 24) : "";

  useEffect(() => {
    if (!pixelId || !META_PIXEL_ID_RE.test(pixelId)) return;
    if (document.getElementById("meta-pixel-inline")) return;

    const script = document.createElement("script");
    script.id = "meta-pixel-inline";
    script.textContent = `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${pixelId}');
fbq('track', 'PageView');`;
    document.head.appendChild(script);

    if (!document.getElementById("meta-pixel-noscript")) {
      const noscript = document.createElement("noscript");
      noscript.id = "meta-pixel-noscript";
      const img = document.createElement("img");
      img.height = 1;
      img.width = 1;
      img.style.display = "none";
      img.src = `https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`;
      img.alt = "";
      noscript.appendChild(img);
      document.body.insertBefore(noscript, document.body.firstChild);
    }
  }, [pixelId]);

  useEffect(() => {
    if (!pixelId || !META_PIXEL_ID_RE.test(pixelId)) return;
    if (firstRoute.current) {
      firstRoute.current = false;
      return;
    }
    if (typeof window.fbq === "function") {
      window.fbq("track", "PageView");
    }
  }, [location.pathname, location.search, pixelId]);

  return null;
}
