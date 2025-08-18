import { NavLink } from 'react-router-dom'
import { IoHomeOutline } from "react-icons/io5";
import { RiBookletLine } from "react-icons/ri";
import { HiOutlineUsers } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import { BiBookBookmark } from "react-icons/bi";

export default function MainNav() {
  return (
    <div className='mt-5'>
      <ul className='flex flex-col gap-3'>
        <li className='' >
          <NavLink to={"/dashboard"} className='btnSideBar'>
            <IoHomeOutline className=' text-2xl' />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/bookings"} className='btnSideBar'>
            <BiBookBookmark className=' text-2xl'/>
            <span>Bookings</span>
          </NavLink>
          </li>
        <li>
          <NavLink to={"/cabins"} className='btnSideBar'>
            <RiBookletLine className=' text-2xl'/>
            <span>Cabins</span>
          </NavLink>
          </li>
        <li>
          <NavLink to={"/users"} className='btnSideBar'>
            <HiOutlineUsers className=' text-2xl'/>
            <span>Users</span>
          </NavLink>
          </li>
        <li>
          <NavLink to={"/settings"} className='btnSideBar'>
            <IoSettingsOutline className=' text-2xl'/>
            <span>Settings</span>
          </NavLink>
          </li>
      </ul>
    </div>
  )
}
