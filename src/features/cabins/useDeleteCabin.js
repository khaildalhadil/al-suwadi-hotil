import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabins } from "../../services/apiCabins";
import { errorAlert, successAlert } from "../../utils/toast";


export default function useDeleteCabin (){
  const queryClient = useQueryClient();

  const {mutate: deleteFun, isLoadding: isDeleteting} = useMutation({
    mutationFn: (id) => deleteCabins(id),
    // refching the data after delete
    onSuccess: () => {
      // console.log("success");
      queryClient.invalidateQueries({
        queryKey: ["Cabin"]
      })
      successAlert("Cabin deleted successfully")
    },
    onError: (err) => errorAlert(err.message)
  })

  return {deleteFun, isDeleteting};
}