import { getAllServices, getAllServicesPkg } from "../api/services.api";
import { useFetch } from "./useFetch";

export const useGetAllServices = ()=> useFetch(getAllServices);
export const useGetAllServicesPkg = (slug)=> useFetch(getAllServicesPkg, slug, [slug]);