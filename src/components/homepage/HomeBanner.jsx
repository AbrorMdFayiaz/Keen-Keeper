import { FaPlus } from "react-icons/fa";
import { NavLink } from "react-router";

const HomeBanner = () => {
    return (
        <div className="px-2.5 sm:px-0 pt-20 pb-10 text-center">
            <h1 className="text-2xl sm:text-5xl font-bold text-[#1F2937]">Friends to keep close in your life</h1>
            <p className="text-[#64748B] text-base font-normal pt-4 pb-8">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
            <NavLink to='/dddd' className=""><button className="btn bg-success-content text-white"><FaPlus />Add a Friend</button></NavLink>
        </div>
    );
};

export default HomeBanner;