import { ImStatsDots } from "react-icons/im";
import { LuClock3 } from "react-icons/lu";
import { RiHome2Line } from "react-icons/ri";
import { NavLink } from "react-router";

const NavBar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm   flex-col  sm:flex-row">
  <div className="sm:flex-1 ">
    <NavLink to="/" className="btn btn-ghost "><p className="text-2xl font-extrabold text-[#1F2937]">Keen<span className="text-[#244D3F] text-2xl font-semibold">Keeper</span></p></NavLink>
  </div>
  <div className="sm:flex-none ">
    <ul className="menu menu-horizontal px-1 space-x-1.5">
      <li><NavLink to='/' className={({ isActive }) => isActive ? "bg-success-content text-white" : "bg-gray-200 text-[#64748B]"}><RiHome2Line />Home</NavLink></li>
      <li><NavLink to='./timeline' className={({ isActive }) => isActive ? "bg-success-content text-white" : "bg-gray-200 text-[#64748B]"}><LuClock3 />Timeline</NavLink></li>
      <li><NavLink to='/stats' className={({ isActive }) => isActive ? "bg-success-content text-white" : "bg-gray-200 text-[#64748B]"}><ImStatsDots />Stats</NavLink></li>
    </ul>
  </div>
</div>
        </div>
    );
};

export default NavBar;