import { useQuery } from "@tanstack/react-query";
import { getAllCabins } from "../../services/apiCabins";


export default function useCabin() {
  const {data: cabins, isLoading, isError, error} = useQuery({
    queryKey: ["Cabin"],
    queryFn: getAllCabins,
  })
  return {cabins, isLoading, isError, error};
}
