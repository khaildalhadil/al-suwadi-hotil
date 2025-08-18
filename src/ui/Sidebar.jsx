import Logo from "./Logo";
import MainNav from "./MainNav";

export default function Sidebar() {
  return (
    <div className="bg-[#ffffff] row-start-1 row-span-2 border border-gray-200 p-9">
      <Logo />
      <MainNav />
    </div>
  )
}
