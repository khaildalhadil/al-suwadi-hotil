import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import { errorAlert, successAlert } from "../../utils/toast";

export default function useUpdateCabin(editId) {

  const queryClient = useQueryClient();

  const {mutate: updateCabin, isLoading: isEditing} = useMutation({

    mutationFn: (dataNewCabin) => createEditCabin(dataNewCabin, editId),

    onSuccess: ()=> {
      queryClient.invalidateQueries({
        queryKey: ["Cabin"]
      })

      successAlert("New Cabin Updeting successfully")
    },
    onError: (err) => errorAlert(err.message)
  });
  return {updateCabin, isEditing}
}