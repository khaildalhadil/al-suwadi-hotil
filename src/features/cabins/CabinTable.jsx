import Spinner from "../../ui/Spinner"
import SingleCapin from './SingleCapin';
import useCabin from "./useCabin";


export default function CabinTable() {


  // console.log(cabins)
  const {cabins, isLoading, isError, error} = useCabin();

  if (isLoading) return <Spinner />
  if (isError) return console.error(error)

  return (
    <>
      <div className="rounded border border-gray-300 w-full my-2 gridCabins font-bold">
        <p className="justify-self-center"></p>
        <p className="justify-self-center">CABIN</p>
        <p className="justify-self-center">CAPACITY</p>
        <p className="justify-self-center">PRICE</p>
        <p className="justify-self-center">DISCOUNT</p>
        <p className="justify-self-center"></p>
      </div>
      <div>
        {cabins.map((cabin, i) => <SingleCapin cabin={cabin} key={i} />)}
        
      </div>
    </>
  )
}
