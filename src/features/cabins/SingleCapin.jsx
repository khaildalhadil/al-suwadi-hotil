import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegPenToSquare } from "react-icons/fa6";

import { useState } from "react";
import CabinForm from "./CabinForm";
import useDeleteCabin from "./useDeleteCabin";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";

export default function SingleCapin({cabin}) {

  const {deleteFun, isDeleteting} = useDeleteCabin();
  const [edit, setEdit] = useState(false);

  return (
    <>
      <div className='gridCabins border-b border-gray-200 pb-2 p-2 text-xl'>
        <img src={cabin.image} alt={cabin.name} className="rounded-sm "/>
        <p className="justify-self-center font-bold" >{cabin.name}</p>
        <p className="justify-self-center" >{cabin.maxCapacity}</p>
        <p className="justify-self-center font-bold" >{cabin.regularPrice} Rial</p>
        <p className={`justify-self-center ${cabin.discount? 'text-green-800 font-bold': 'text-white'}`} >{cabin.discount? cabin.discount: "--"}</p>
        
        <div className="flex gap-2.5">

          <Modal>
            <Modal.Open opens={"delete"}>
              <button 
                disabled={isDeleteting}
                
                className={`justify-self-center bg-red-600 p-2 rounded cursor-pointer ${isDeleteting && 'cursor-not-allowed'}`} >
                <RiDeleteBin6Line className=" text-gray-50" />
              </button>
            </Modal.Open>
            <Modal.Window name={"delete"}>
              <ConfirmDelete resourcName="cabins" disabled={isDeleteting} onConfirm={() => deleteFun(cabin.id)} />
            </Modal.Window>

          </Modal>

          <Modal>
            <Modal.Open opens="edit">
              <button onClick={()=> setEdit(!edit)} className="justify-self-center bg-green-600 p-2 rounded cursor-pointer">
                <FaRegPenToSquare className=" text-gray-50" />
              </button>
            </Modal.Open>

            <Modal.Window name="edit">
              <CabinForm type="Edit" cabinToEdit={cabin} setEdit={setEdit} />
            </Modal.Window>

          </Modal>

        </div>

      </div>
    </>
  )
}