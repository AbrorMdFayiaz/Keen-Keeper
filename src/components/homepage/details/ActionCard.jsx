import { PiArchiveBold } from "react-icons/pi";
import { RiDeleteBinLine, RiNotificationSnoozeLine } from "react-icons/ri";


const ActionCard = () => {
    return (
        <div className=" space-y-2.5 text-center">
            <article className=" ">
                <div className="btn card  card-xs shadow-sm  btn-base-100 h-fit">
                  <div className="card-body space-y-2 p-4">
                    <h2 className="card-title text-[#1F2937] text-base font-medium  mx-auto"><RiNotificationSnoozeLine /><h2>Snooze 2 weeks</h2></h2>
                  </div>
                </div>
            </article>
            <article>
                <div className="btn card  card-xs shadow-sm  btn-base-100 h-fit">
                  <div className="card-body space-y-2 p-4">
                    <h2 className="card-title text-[#1F2937] text-base font-medium mx-auto"><PiArchiveBold /><h2>Archive</h2></h2>
                  </div>
                </div>
            </article>
            <article>
                <div className="btn card  card-xs shadow-sm  btn-base-100 h-fit">
                  <div className="card-body space-y-2 p-4">
                    <h2 className="card-title  text-[#EF4444] text-base font-medium  mx-auto"><RiDeleteBinLine /><h2>Delete</h2></h2>
                  </div>
                </div>
            </article>
        </div>
    );
};

export default ActionCard;