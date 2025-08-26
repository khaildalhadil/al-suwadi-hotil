import Spinner from "../../ui/Spinner";
import useSettingsFrom from "./useSettingsFrom"
import useUpdateSettings from "./useUpdateSettings";

export default function UpdateSettingForm() {

  const {setting, error, isLoading, isError} = useSettingsFrom();
  
  
  const {editSetting, isEditing} = useUpdateSettings()
  
  function handelUpdateSetting(e, settingName) {
    const {value} = e.target;
    if (!value) return;
    editSetting({[settingName]: value})
  }  
    
  if (isLoading) return <Spinner />
  if (isError) return <div>{error}</div>

  return (
    <form className=" bg-white p-5 rounded-lg" >

      <div className="mb-5 flex justify-between items-center border-b border-gray-200 pb-4">
        <label 
          className="text-xl font-medium text-gray-900 w-[25%]">Minimum nights/booking</label>
          <input 
            type="text" 
            id="Minimum" 
            name="Minimum" 
            disabled={isEditing}
            className={`inputForm text-lg w-[40%] ${isEditing && ' cursor-not-allowed'}`}
            onBlur={(e) => handelUpdateSetting(e, "minBookingLength")}
            defaultValue={setting?.minBookingLength} 
          />
        <p className="errorStyle">{error}</p>
      </div>

        <div className="mb-5 flex justify-between items-center border-b border-gray-200 pb-4">
        <label 
          className="text-xl font-medium text-gray-900 w-[25%]">Maximum nights/booking</label>
          <input 
            type="text" 
            id="Minimum" 
            name="Minimum" 
            disabled={isEditing}
            className={`inputForm text-lg w-[40%] ${isEditing && ' cursor-not-allowed'}`}
            onBlur={(e) => handelUpdateSetting(e, "maxBookingLength")}
            defaultValue={setting?.maxBookingLength} 
          />
        <p className="errorStyle">{error}</p>
      </div>

            <div className="mb-5 flex justify-between items-center border-b border-gray-200 pb-4">
        <label 
          className="text-xl font-medium text-gray-900 w-[25%]">Maximum guests/booking</label>
          <input 
            type="text" 
            id="maxGuestsPerBooking" 
            name="maxGuestsPerBooking" 
            disabled={isEditing}
            className={`inputForm text-lg w-[40%] ${isEditing && ' cursor-not-allowed'}`}
            onBlur={(e) => handelUpdateSetting(e, "maxGuestsPerBooking")}
            defaultValue={setting?.maxGuestsPerBooking} 
          />
        <p className="errorStyle">{error}</p>
      </div>

        <div className="mb-5 flex justify-between items-center">
        <label 
          className="text-xl font-medium text-gray-900 w-[25%]">Breakfast price</label>
          <input 
            type="text" 
            id="breakfastPrice" 
            disabled={isEditing}
            name="breakfastPrice" 
            className={`inputForm text-lg w-[40%] ${isEditing && ' cursor-not-allowed'}`}
            onBlur={(e) => handelUpdateSetting(e, "breakfastPrice")}
            defaultValue={setting?.breakfastPrice} 
          />
        <p className="errorStyle">{error}</p>
      </div>
    </form>
  )
}

