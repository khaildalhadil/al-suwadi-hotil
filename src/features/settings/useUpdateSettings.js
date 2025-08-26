import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateSetting } from "../../services/apiSettings"
import { errorAlert, successAlert } from "../../utils/toast";

export default function useUpdateSettings() {

  const queryClient = useQueryClient();

  const {mutate: editSetting , isLoadding: isEditing} = useMutation({
    mutationFn: updateSetting,

    onSuccess: ()=> {
      queryClient.invalidateQueries({
        queryKey: ["setting"]
      })
      successAlert("New Cabin Updeting successfully")
    },
    onError: (err) => errorAlert(err.message)
  })
  return  {editSetting, isEditing}
}
