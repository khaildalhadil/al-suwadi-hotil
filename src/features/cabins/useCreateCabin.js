import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import { errorAlert, successAlert } from "../../utils/toast";

  
export default function useCreateCabin() {

  const queryClient = useQueryClient();

  const {mutate: createCabin, isLoading: isCreating} = useMutation({
    mutationFn: (dataNewCabin) => createEditCabin(dataNewCabin),
    onSuccess: ()=> {
      queryClient.invalidateQueries({
        queryKey: ["Cabin"]
      })
  
      successAlert("New Cabin Added successfully")
      // setisFormOpen(false);
    },
    onError: (err) => errorAlert(err.message)
  });
  return {createCabin, isCreating}
}
  