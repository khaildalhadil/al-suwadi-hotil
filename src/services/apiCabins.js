import supabase, { supabaseUrl } from "./supabase";


export async function createEditCabin(newCabin, editId) {
  // 1. Create cabin
  //https://qanyynsigwbwibhkcpic.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg

  // console.log(newCabin.image.name);

  const imageString = newCabin.image;
  let imagePath;
  let imageName;

  // check if the image is not update it 
  const isImageUpdated = typeof(imageString) == "string";
  // if update and he/she did not change the image the image will be the seem
  if (isImageUpdated) {
    // console.log(imageString.startsWith("https://qanyynsigwbwibhkcpic"));
    imagePath = imageString
  } else {
    //image name 
    imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll("/", "");
    console.log(imageName)
    // image path to sotre it 
    imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`
  }

  let query = "";
  // create
  if (!editId) query = supabase.from("cabins").insert([{...newCabin, image: imagePath}]);
  // update
  if (editId) query = supabase.from("cabins").update({...newCabin, image: imagePath}).eq("id", editId);

  let { data: cabin, error } = await query.select();

  if (error) {
    console.log(error)
    console.error("Cabins could not be loaded" + error.message);
    return;
  }

  
  // 2. Upload image
  if(!isImageUpdated) {
    await supabase.storage
      .from("cabin-images")
      .upload(imageName, newCabin.image)
  }

  // delete the cabin if there was an error uploading image
  if (error){
    await supabase.from("cabins").delete().eq("id", cabin.id);
    console.error(error);
    return;
  }
  return cabin;
}

export async function getAllCabins() {
  let { data: cabins, error } = await supabase
    .from('cabins')
    .select('*')

  if (error) {
    console.error("Cabins could not be loaded" + error.message);
    return;
  }
  
  return cabins;
}

export async function deleteCabins(id) {
  const { data, error } = await supabase
    .from('cabins')
    .delete()
    .eq('id', id)
  
    if (error) {
      console.error("Cabins could not be deleted" + error.message);
      throw new Error("Cabins could not be deleted")
    }

  return data;
}

