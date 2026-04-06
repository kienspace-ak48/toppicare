/**
 * Chuẩn hóa SĐT VN để lưu và so khớp (chỉ chữ số, dạng 84xxxxxxxxx).
 */
function normalizePhoneVN(input) {
  if (input == null || input === "") return "";
  let d = String(input).replace(/\D/g, "");
  if (d.length === 0) return "";
  if (d.startsWith("84")) return d;
  if (d.startsWith("0")) return "84" + d.slice(1);
  return d;
}

module.exports = { normalizePhoneVN };
