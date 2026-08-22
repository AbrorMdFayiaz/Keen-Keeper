import { useParams } from "react-router";
import StatusCardGenerator from "../StatusCardGenerator";
import ActionCard from "./ActionCard";
import ProfileCard from "./ProfileCard";
import QuickCheckCard from "./QuickCheckCard";
import RelationShipGoalCard from "./RelationShipGoalCard";
import { useContext } from "react";
import { FriendsContext } from "../../../../public/contextApi/FriendsContext";


const Details = () => {

    // for dynamic route data
    const {id}=useParams();
    const friendsData = useContext(FriendsContext);
    console.log(friendsData,id);
    const currentFriend=friendsData[id-1]



    return (
        <article className="bg-base-200">
            <div className="px-2.5 sm:px-0 container mx-auto py-20">
                {/* whole section given part by part */}
                <section className="grid grid-cols-3 sm:grid-cols-5 gap-6">
                    <article className="text-4xl col-span-3 sm:col-span-2 row-span-2 my-auto"><ProfileCard currentFriend={currentFriend}/></article>
                    <article className="text-4xl col-span-1 row-span-1"><StatusCardGenerator days={currentFriend.days_since_contact} status={1}/></article>
                    <article className="text-4xl col-span-1 row-span-1"><StatusCardGenerator goal={currentFriend.goal} status={2}/></article>
                    <article className="text-4xl col-span-1 row-span-1"><StatusCardGenerator dueDate={currentFriend.next_due_date} status={3}/></article>
                    <article className="text-4xl col-span-3 row-span-1 my-auto"><RelationShipGoalCard/></article>
                    <article className="text-4xl col-span-3 sm:col-span-2 row-span-1"><ActionCard/></article>
                    <article className="text-4xl col-span-3 row-span-1"><QuickCheckCard  name={currentFriend.name} /></article>
                </section>
            </div>
        </article>
    );
};

export default Details;





