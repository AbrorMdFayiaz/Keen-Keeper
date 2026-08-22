import { useContext } from "react";
import { FriendsContext } from "../../../public/contextApi/FriendsContext";


const StatusCardGenerator = ({status,days,goal,dueDate}) => {


  
  const friendsData = useContext(FriendsContext);

  const totalFriends= friendsData.length||0;
  let onTrack=0;
  let needAttention=0;
  const interactionsThisMonth = JSON.parse(localStorage.getItem("timeline"))? JSON.parse(localStorage.getItem("timeline")).length :0 ;

  friendsData.map((item)=>{
    if (item.status== "Overdue"||item.status== "Almost due") {
      needAttention++;      
    }
    else if (item.status=="On-track") {
      onTrack++;      
    }
  })
  

  localStorage.getItem("")

    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
              <div className="card-body space-y-2  py-8 px-4 text-center">
                <h2 className="card-title text-[#244D3F] text-2xl sm:text-3xl font-semibold mx-auto">{status==1 ? days 
                  : status==2 ? goal
                  : status==3 ? dueDate
                  : status==4 ? totalFriends
                  : status==5 ? onTrack
                  : status==6 ? needAttention
                  : status==7 ? interactionsThisMonth
                  :""
                  }
                </h2>
                <p className="text-[#64748B] text-[18px] font-normal ">{status==1 ? "Days Since Contact" 
                  : status==2 ? "Goal (Days)"
                  : status==3 ?"Next Due"
                  : status==4 ?"Total Friends"
                  : status==5 ?"On Track"
                  : status==6 ?"Need Attention"
                  :"Interactions This Month"

                }</p>
              </div>
            </div>
        </div>
    );
};

export default StatusCardGenerator;