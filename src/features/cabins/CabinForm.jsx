import { useForm } from "react-hook-form";
import { createEditCabin } from "../../services/apiCabins";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { errorAlert, successAlert } from "../../utils/toast";
import FormRow from "./FormRow";
import useCreateCabin from "./useCreateCabin";
import useUpdateCabin from "./useUpdateCabin";


export default function CabinForm({type, cabinToEdit = {}, setEdit, setisFormOpen, handelCloseModal}) {

  const {id: editId, ...editalues} = cabinToEdit;
  const isEditSession = Boolean(editId);

  const {register, handleSubmit, getValues, formState} = useForm({
    defaultValues: isEditSession ? editalues : {}
  });

  const {createCabin, isCreating} = useCreateCabin();
  const {updateCabin, isEditing} = useUpdateCabin(editId);
  
  const {errors} = formState;
  
  function onSubmit(data) {
    
    if (isEditSession) {
      updateCabin(data, editId)
      setEdit(false);
    } else{
      createCabin({...data, image: data.image[0]});
      handelCloseModal?.()
    }
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <form className={`m-2 ${ type == "Edit" && 'border border-gray-300 p-3 rounded'}`} onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Cabin name" error={errors?.name?.message} >
        <input type="text" id="name" name="name"
        {
          ...register('name', {
          required: "This field is required"
          })
        } 
        className="inputForm text-lg " />
      </FormRow>

      <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
        <input type="number" id="maxCapacity" name="maxCapacity"
          {
            ...register('maxCapacity', {
            required: "This field is required",
            min: {
              value: 1,
              message: 'capcity should be at least 1'
            }
          })
        } className="inputForm text-lg" />
      </FormRow>

      <FormRow label="Regular price" error={errors?.regularPrice?.message}>
        <input type="number" id="regularPrice" name="regularPrice"
          {
            ...register('regularPrice', {
            required: "This field is required",
            min: {
              value: 1,
              message: 'capcity should be at least 1'
              }
            })
          } className="inputForm text-lg" />
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        <input type="number" id="discount" name="discount"
          {
            ...register('discount', {
              required: "This field is required",
              validate: (value) => value <= getValues().regularPrice || "Discount should be less than regular price"
            })
          } className="inputForm text-lg" />
      </FormRow>
      
      <FormRow label="Description for website" error={errors?.description?.message}>
        <textarea id="Discount" name="description"
          {
            ...register('description', {
            required: "This field is required",
            min: {
              value: 1,
              }
            })
          } className="inputForm text-lg" />
      </FormRow>

      <FormRow label="Cabin photo" error={errors?.image?.message}>
        <input type="file" accept="image/*" id="image" name="image"
          {
            ...register('image', {
            required: isEditSession ? false: "This field is required",
            min: {
              value: 1,
              }
            })
          } className="inputForm text-lg cursor-pointer" />
      </FormRow>

      <div className="flex gap-5">
        <button disabled={isCreating} className={`bg-indigo-600 p-2 rounded text-gray-50 ${isCreating ? ' cursor-not-allowed': 'cursor-pointer' }`} type="submit">Add</button>
        <button onClick={() => handelCloseModal?.()} type="button" className=" border border-gray-200 p-2 px-4 rounded cursor-pointer">Canel</button>
      </div>

    </form>
  )
}
