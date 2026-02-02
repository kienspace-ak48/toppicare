import { getAllServices } from "../api/services.api";
import { useFetch } from "./useFetch";

export const useGetAllServices = ()=> useFetch(getAllServices);