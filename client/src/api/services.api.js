import api from "./axios";

export const getServices = () => api.get("/commitments");
export const getServicesById = (id) => api.get(`/commitments/${id}`);
