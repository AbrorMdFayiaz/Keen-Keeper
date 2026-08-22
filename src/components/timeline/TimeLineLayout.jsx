import { IoIosArrowDown } from "react-icons/io";
import TimeLineCardGenerator from "./TimeLineCardGenerator";
import { useState } from "react";

const TimeLineLayout = () => {


// 
// 

    const [sortState, setSortState]=useState('all');
    let shortedTimelineData=JSON.parse(localStorage.getItem("timeline"))||[];
    if (sortState!="all") {
        shortedTimelineData= (JSON.parse(localStorage.getItem("timeline"))).filter((element)=>element.conversionWay==sortState)
    }

    return (
        <div className="bg-base-200 py-20 px-2.5 sm:px-0 " >
            <section className="bg-base-200 container mx-auto">
                <h1 className="text-[#1F2937] text-3xl sm:text-5xl font-bold pb-6">Timeline</h1>
                {/* drop-down for filtering */}
                <article className="flex ">
                    <div className="dropdown  dropdown-center">
                        <div tabIndex={0} role="button" className="btn m-1 ">Filter timeline <p className="pl-30"><IoIosArrowDown /></p></div>
                        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                          <li onClick={()=>setSortState("Text")}><a>Text</a></li>
                          <li onClick={()=>setSortState("Call")}><a>Call</a></li>
                          <li onClick={()=>setSortState("Video")}><a>Video</a></li>
                        </ul>
                    </div>
                </article>


                {/* card generation */}

                <article className="grid gap-2.5 sm:gap-6 pt-6">
                    {
                        shortedTimelineData.map((item)=> <TimeLineCardGenerator item={item} /> )
                    }
                </article>
            </section>
        </div>
    );
};

export default TimeLineLayout;