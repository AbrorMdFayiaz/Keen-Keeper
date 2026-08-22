// import { useState } from "react";
import { LuMessageSquareMore } from "react-icons/lu";
import { PiPhoneCallBold, PiVideoCameraBold } from "react-icons/pi";
import { Bounce, toast, ToastContainer } from "react-toastify";


const QuickCheckCard = ({name}) => {

    // for local storage
    // const [timelineData,setTimelineData]=useState([]);
    // localStorage.setItem("timeline",JSON.stringify(timelineData));
    console.log("ls",JSON.parse(localStorage.getItem("timeline")))


    return (
      <section className="card  bg-base-100 card-md shadow-sm p-6 space-y-4">
              <h2 className="  text-[#244D3F] text-[20px] font-medium">Quick Check-In</h2>
        <div className="grid grid-cols-3 gap-4 text-center ">
              <article onClick={()=>{localStorage.setItem("timeline",JSON.stringify([...(JSON.parse(localStorage.getItem("timeline")||"[]")),{conversionWay:"Call",name:name,date:new Date()}]))
                                      toast.success(`Successfully called ${name}`, {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
})
                                    }}>
                <div className="card btn h-fit card-xs  shadow-sm  bg-base-200">
                  <div className="card-body p-4 space-y-2">
                    <h2 className="card-title text-[#1F2937] text-3xl font-semibold mx-auto"><PiPhoneCallBold /></h2>
                    <p className="text-[#1F2937] text-[18px] font-normal ">Call</p>
                  </div>
            </div>
            </article>
            <article onClick={()=>{localStorage.setItem("timeline",JSON.stringify([...(JSON.parse(localStorage.getItem("timeline")||"[]")),{conversionWay:"Text",name:name,date:new Date()}]))
                                    toast.success(`Successfully texted ${name}`)
                                    }}>
                <div className=" card btn h-fit card-xs shadow-sm  bg-base-200">
                  <div className="card-body space-y-2 p-4">
                    <h2 className="card-title text-[#1F2937] text-3xl font-semibold mx-auto"><LuMessageSquareMore /></h2>
                    <p className="text-[#1F2937] text-[18px] font-normal ">Text</p>
                  </div>
            </div>
            </article>
            <article onClick={()=>{localStorage.setItem("timeline",JSON.stringify([...(JSON.parse(localStorage.getItem("timeline")||"[]")),{conversionWay:"Video",name:name,date:new Date()}]))
                                     toast.success(`Successfully video called ${name}`)
                                    }}>
                <div className="card btn h-fit  card-xs shadow-sm bg-base-200">
                  <div className="card-body space-y-2 p-4">
                    <h2 className="card-title text-[#1F2937] text-3xl font-semibold mx-auto"><PiVideoCameraBold /></h2>
                    <p className="text-[#1F2937] text-[18px] font-normal ">Video</p>
                  </div>
            </div>
            </article>
        </div>
        <h2 className="text-base"><ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition={Bounce}
/></h2>
            </section>
    );
};

export default QuickCheckCard;