import { useState } from "react";
import CabinForm from './CabinForm';
import Modal from "../../ui/Modal";

export default function CreateCapin() {
  const [isFormOpen, setisFormOpen] = useState(false);
  return (
    <>
      <button 
        onClick={ () => setisFormOpen(!isFormOpen)} className={`  bg-indigo-600  text-white p-2 rounded w-full cursor-pointer my-2 text-lg `}>{!isFormOpen ? 'Add new cabin': 'cancel Add new cabin' }
      </button>
      {isFormOpen && 
        <Modal handelCloseModal={() => setisFormOpen(!isFormOpen)}>
          <CabinForm 
            handelCloseModal={() => setisFormOpen(!isFormOpen)}
            setisFormOpen={setisFormOpen} 
            type="save" />
        </Modal>}
    </>
  )
}
