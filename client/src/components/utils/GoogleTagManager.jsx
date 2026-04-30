import { useEffect } from "react";
import usePageConfig from "../../hooks/usePageConfig";

const GTM_ID_RE = /^GTM-[A-Z0-9]+$/i;

/**
 * Loads GTM after page config is fetched from API (customize.gtm_id).
 * Matches Google's recommended head script + body noscript pattern.
 */
export default function GoogleTagManager() {
  const { data } = usePageConfig();
  const gtmId = data?.data?.customize?.gtm_id?.trim();

  useEffect(() => {
    if (!gtmId || !GTM_ID_RE.test(gtmId)) return;
    if (document.getElementById("gtm-script-init")) return;

    const id = gtmId.toUpperCase();

    const script = document.createElement("script");
    script.id = "gtm-script-init";
    script.textContent = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${id}');`;
    document.head.insertBefore(script, document.head.firstChild);

    if (!document.getElementById("gtm-noscript")) {
      const noscript = document.createElement("noscript");
      noscript.id = "gtm-noscript";
      const iframe = document.createElement("iframe");
      iframe.src = `https://www.googletagmanager.com/ns.html?id=${id}`;
      iframe.height = "0";
      iframe.width = "0";
      iframe.style.display = "none";
      iframe.style.visibility = "hidden";
      noscript.appendChild(iframe);
      document.body.insertBefore(noscript, document.body.firstChild);
    }
  }, [gtmId]);

  return null;
}
