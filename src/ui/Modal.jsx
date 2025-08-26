import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";

const ModalContext = createContext();

export default function Modal({children}) {
  const [openName, setOpenName] = useState("");

  const close = ()=> setOpenName("");
  const open = setOpenName;
  return <ModalContext.Provider value={{close, open, openName}}>
    <div>{children}</div>
    </ModalContext.Provider>
}

function Open({children, opens: openWindowsName}) {
  const {open} = useContext(ModalContext);
  return cloneElement(children, {onClick: ()=> open(openWindowsName)});
}

function Window({children, name}) {

  const {close, openName} = useContext(ModalContext);

  if (openName !== name) return;

  return createPortal (
    <div className="w-full h-full absolute top-0 left-0 backdrop-blur">
      <div className='fixed top-[50%] left-[50%] -translate-1/2  bg-gray-50 transition-all p-4 shadow-lg rounded w-1/2 h-fit'>
      <button onClick={close} className=" absolute right-3 top-3 p-2 px-2 rounded-full hover:bg-gray-200 cursor-pointer text-xl"><HiXMark /></button>
        <div>{cloneElement(children, {handelCloseModal: close})}</div>
      </div>
    </div>, document.body
  )
}
 
Modal.Open = Open;
Modal.Window = Window;