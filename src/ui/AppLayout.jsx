import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function AppLayout() {
  return (
    <div className="h-screen grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] font-logo">
      <Header />
      <Sidebar />
      <main className="bg-gray-100 flex-3 p-5 overflow-y-scroll">
        <Outlet />
      </main>
    </div>
  )
}
