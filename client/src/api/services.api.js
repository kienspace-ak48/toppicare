import api from "./axios";

export const getAllServices = () => api.get("/services/get-all");
// export const getServicesById = (id) => api.get(`/commitments/${id}`);
