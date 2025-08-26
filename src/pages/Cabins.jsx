import { useState } from "react";
import CabinTable from "../features/cabins/CabinTable";

import CreateCapin from "../features/cabins/CreateCapin";

export default function Cabins() {

  return (
    <>
      <div className="flex justify-between">
        <h1 className="font-bold text-2xl text-gray-700">All cabins</h1>
        <p>Filter / Sort</p>
      </div> 

      <div >
        <CabinTable />
      </div>

      <CreateCapin />
      
    </>
  )
}
