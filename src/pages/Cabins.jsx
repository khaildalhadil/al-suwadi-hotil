import { useState } from "react";
import CabinTable from "../components/cabin/CabinTable";
import CabinForm from "../components/cabin/CabinForm";

export default function Cabins() {

  const [isFormOpen, setisFormOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between">
        <h1 className="font-bold text-2xl text-gray-700">All cabins</h1>
        <p>Filter / Sort</p>
      </div> 

      <div >
        <CabinTable />
      </div>
      <button onClick={() =>setisFormOpen(!isFormOpen)} className={`  bg-indigo-600  text-white p-2 rounded w-full cursor-pointer my-2 text-lg `}>{!isFormOpen ? 'Add new cabin': 'cancel Add new cabin' }</button>
      {isFormOpen && <CabinForm setisFormOpen={setisFormOpen} type="save" />}
    </>
  )
}
