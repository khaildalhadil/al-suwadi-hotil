import Modal from '../../ui/Modal';
import CabinForm from './CabinForm';


export default function CreateCapin() {
  return (
    <Modal>

      {/* button */}
      <Modal.Open opens="cabin-form">
         <button className={`bg-indigo-600  text-white p-2 rounded w-full cursor-pointer my-2 text-lg `}>Add new cabin</button>
      </Modal.Open>

      {/* form */}
      <Modal.Window name="cabin-form">
        <CabinForm />
      </Modal.Window>

      {/* <Modal.Open opens="table">
        <button className={`bg-indigo-600  text-white p-2 rounded w-full cursor-pointer my-2 text-lg `}>Add new cabin</button>
      </Modal.Open>
      <Modal.Window name="table">
        <CabinForm />
      </Modal.Window> */}

    </Modal> 
  );
}


// export default function CreateCapin() {
//   const [isFormOpen, setisFormOpen] = useState(false);
//   return (
//     <>
//       <button 
//         onClick={ () => setisFormOpen(!isFormOpen)} 
//       </button>
//       {isFormOpen && 
//         <Modal handelCloseModal={() => setisFormOpen(!isFormOpen)}>
//           <CabinForm 
//             handelCloseModal={() => setisFormOpen(!isFormOpen)}
//             setisFormOpen={setisFormOpen} 
//             type="save" />
//         </Modal>}
//     </>
//   )
// }
