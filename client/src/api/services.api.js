import api from "./axios";

export const getAllServices = () => api.get("/services/get-all");
export const getAllServicesPkg = (slug)=>api.get(`/services/all-pkg/${slug}`)
// export const getServicesById = (id) => api.get(`/commitments/${id}`);
