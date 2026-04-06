import { useState } from "react";
import { ShieldCheck, Search, Loader2, Package, History } from "lucide-react";
import "../../styles/warranty-lookup.css";

const apiBase = () => {
  const base = typeof window !== "undefined" && window.__ENV__?.API_URL != null ? window.__ENV__.API_URL : "/";
  return base.endsWith("/") ? base : `${base}/`;
};

const WARRANTY_LABELS = {
  active: "Đang hiệu lực",
  expired: "Hết hạn",
  pending_repair: "Chờ sửa",
  repairing: "Đang sửa",
  completed: "Hoàn thành",
};

export function WarrantyLookupPage() {
  const [serialNumber, setSerialNumber] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [data, setData] = useState(null);

  async function onSubmit(e) {
    e.preventDefault();
    setErr("");
    setData(null);
    setLoading(true);
    try {
      const res = await fetch(`${apiBase()}api/warranty/lookup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ serialNumber: serialNumber.trim(), phone: phone.trim() }),
      });
      const json = await res.json();
      if (!json.success) {
        setErr(json.mess || "Không tìm thấy thông tin.");
        return;
      }
      setData(json.data);
    } catch {
      setErr("Không kết nối được máy chủ. Vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="warranty-lookup min-h-[70vh] max-w-3xl mx-auto px-4 py-12 text-gray-800">
      <div className="warranty-lookup__hero mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-teal-700 shadow-lg shadow-teal-500/25">
            <ShieldCheck className="w-7 h-7 text-white" strokeWidth={2} />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">Tra cứu bảo hành</h1>
            <p className="warranty-lookup__intro mt-2 m-0">
              Nhập <strong className="text-gray-800">mã máy</strong> và <strong className="text-gray-800">số điện thoại</strong> đã đăng ký khi mua để xem{" "}
              <strong className="text-gray-800">thời hạn bảo hành</strong> và lịch sử ghi nhận (nếu có).
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={onSubmit} className="warranty-lookup__panel p-6 md:p-8 space-y-5">
        <div>
          <label className="warranty-lookup__label">Mã máy (serial)</label>
          <input
            className="warranty-lookup__input"
            value={serialNumber}
            onChange={(e) => setSerialNumber(e.target.value)}
            placeholder="Nhập mã in trên máy / tem"
            autoComplete="off"
            required
          />
        </div>
        <div>
          <label className="warranty-lookup__label">Số điện thoại đăng ký</label>
          <input
            className="warranty-lookup__input"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="VD: 09xx xxx xxx"
            inputMode="tel"
            autoComplete="tel"
            required
          />
        </div>
        {err && <p className="warranty-lookup__err m-0">{err}</p>}
        <button type="submit" disabled={loading} className="warranty-lookup__submit inline-flex items-center justify-center gap-2 w-full md:w-auto min-w-[200px]">
          {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Search className="w-5 h-5" />}
          Tra cứu
        </button>
      </form>

      {data && (
        <div className="mt-10 space-y-8">
          <section className="warranty-lookup__section">
            <h2 className="warranty-lookup__section-title">
              <Package className="w-5 h-5 text-teal-600 shrink-0" strokeWidth={2} />
              Thông tin sản phẩm
            </h2>
            <dl className="warranty-lookup__dl">
              <div>
                <dt className="warranty-lookup__dt">Loại sản phẩm</dt>
                <dd className="warranty-lookup__dd font-semibold">{data.productType?.name || "—"}</dd>
              </div>
              <div>
                <dt className="warranty-lookup__dt">Mã loại</dt>
                <dd className="warranty-lookup__dd font-mono text-teal-800">{data.productType?.code || "—"}</dd>
              </div>
              <div>
                <dt className="warranty-lookup__dt">Mã máy</dt>
                <dd className="warranty-lookup__dd font-mono font-semibold text-gray-900">{data.serialNumber}</dd>
              </div>
              <div>
                <dt className="warranty-lookup__dt">Ngày bán / đăng ký</dt>
                <dd className="warranty-lookup__dd">{data.soldAt ? new Date(data.soldAt).toLocaleString("vi-VN") : "—"}</dd>
              </div>
              {data.warrantyEndAt != null && (
                <div>
                  <dt className="warranty-lookup__dt">Hạn bảo hành</dt>
                  <dd className="warranty-lookup__dd font-semibold text-teal-800">
                    {new Date(data.warrantyEndAt).toLocaleDateString("vi-VN")}
                    {data.warrantyMonths != null ? ` (${data.warrantyMonths} tháng)` : ""}
                  </dd>
                </div>
              )}
              {(data.warrantyStatusLabel || data.warrantyStatus) && (
                <div>
                  <dt className="warranty-lookup__dt">Trạng thái bảo hành</dt>
                  <dd className="warranty-lookup__dd">
                    <span className="inline-flex rounded-full bg-teal-100 px-3 py-1 text-sm font-medium text-teal-900">
                      {data.warrantyStatusLabel || WARRANTY_LABELS[data.warrantyStatus] || data.warrantyStatus}
                    </span>
                  </dd>
                </div>
              )}
              <div className="sm:col-span-2">
                <dt className="warranty-lookup__dt">Khách hàng (đã che một phần)</dt>
                <dd className="warranty-lookup__dd">{data.customerNameMasked}</dd>
              </div>
            </dl>
          </section>

          {data.deviceLog?.length > 0 && (
            <section className="warranty-lookup__section">
              <h2 className="warranty-lookup__section-title">
                <History className="w-5 h-5 text-teal-600 shrink-0" strokeWidth={2} />
                Lịch sử thiết bị
              </h2>
              <p className="text-sm text-gray-500 -mt-2 mb-4 m-0">
                Các sự kiện đã đăng ký (đăng ký bán, cập nhật từ cửa hàng) được phép hiển thị cho khách.
              </p>
              <div className="warranty-lookup__timeline">
                {data.deviceLog.map((log) => (
                  <div className="warranty-lookup__timeline-item" key={log._id || `${log.at}-${log.title}`}>
                    <p className="text-xs text-gray-500 m-0 mb-1">{new Date(log.at).toLocaleString("vi-VN")}</p>
                    <p className="font-semibold text-gray-900 m-0">{log.title}</p>
                    {log.detail && <p className="text-sm text-gray-600 mt-1 m-0 leading-relaxed">{log.detail}</p>}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      )}
    </div>
  );
}
