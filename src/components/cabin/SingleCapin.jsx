import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegPenToSquare } from "react-icons/fa6";

import { useState } from "react";
import CabinForm from "./CabinForm";
import useDeleteCabin from "./useDeleteCabin";

export default function SingleCapin({cabin}) {

  const {deleteFun, isDeleteting} = useDeleteCabin();
  const [edit, setEdit] = useState(false);

  return (
    <>
      <div className='gridCabins border-b border-gray-200 pb-2 p-2 text-xl'>
        <img src={cabin.image} alt={cabin.name} className="rounded-sm "/>
        <p className="justify-self-center" >{cabin.name}</p>
        <p className="justify-self-center" >{cabin.maxCapacity}</p>
        <p className="justify-self-center" >{cabin.regularPrice}</p>
        <p className="justify-self-center" >{cabin.discount? cabin.discount: "--"}</p>
        <div className="flex gap-2.5">

          <button 
            disabled={isDeleteting}
            onClick={() => deleteFun(cabin.id)}
            className={`justify-self-center bg-red-600 p-2 rounded cursor-pointer ${isDeleteting && 'cursor-not-allowed'}`} >
            <RiDeleteBin6Line className=" text-gray-50" />
          </button>

          <button onClick={()=> setEdit(!edit)} className="justify-self-center bg-green-600 p-2 rounded cursor-pointer">
            <FaRegPenToSquare className=" text-gray-50" />
          </button>

        </div>
      </div>
      {edit && <CabinForm type="Edit" cabinToEdit={cabin} setEdit={setEdit} />}
    </>

  )
}