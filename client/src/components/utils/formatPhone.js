const formatPhone442 = (phone = "") => {
  const cleaned = phone.replace(/\D/g, ""); // bỏ ký tự lạ
  return cleaned.replace(/(\d{4})(\d{4})(\d{2})/, "$1.$2.$3");
};

export {formatPhone442}