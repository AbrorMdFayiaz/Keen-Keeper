import { NavLink } from "react-router";
import HomeDashBoardFriendsCardGenerator from "./HomeDashBoardFriendsCardGenerator";
import { useContext } from "react";
import { FriendsContext } from "../../../public/contextApi/FriendsContext";


const HomeDashBoard = () => {


    const friendsData = useContext(FriendsContext);
    console.log(friendsData);

    return (
        <div className="px-2.5 sm:px-0 pb-20">
            <h1 className="text-[#1F2937] text-2xl font-semibold mb-4">Your Friends</h1>
            <section className="grid sm:grid-cols-2  md:grid-cols-3 xl:grid-cols-4 gap-6">
                {
                    friendsData.map((item)=><NavLink to={`/details/${item.id}`}><HomeDashBoardFriendsCardGenerator item={item} key={item.id}></HomeDashBoardFriendsCardGenerator></NavLink>)
                }
            </section>
        </div>
    );
};

export default HomeDashBoard;