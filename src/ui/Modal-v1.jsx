import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";

export default function Modal({children, handelCloseModal}) {
  return createPortal (
    <div className="w-full h-full absolute top-0 left-0 backdrop-blur">
      <div className='fixed top-[50%] left-[50%] -translate-1/2  bg-gray-50 transition-all p-4 shadow-lg rounded w-1/2 h-fit'>
      <button onClick={handelCloseModal} className=" absolute right-3 top-3 p-2 px-2 rounded-full hover:bg-gray-200 cursor-pointer text-xl"><HiXMark /></button>
        {children}
      </div>
    </div>, document.body
  )
}
 