import { BiSolidMessageRoundedDots, BiSolidVideoRecording } from "react-icons/bi";
// import { FaHandshakeSimple } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";


const TimeLineCardGenerator = ({item}) => {
    const{name,date,conversionWay}=item;
    return (
        <div>
            <div className="card bg-base-100 shadow-sm flex! flex-row  px-2.5 sm:p-4 sm:gap-4">
                <article className={`text-neutral text-2xl sm:text-5xl my-auto ${conversionWay=="Call" ? "text-2xl sm:text-[40px]" 
                                                                                                :conversionWay=="Video" ? <BiSolidVideoRecording />
                                                                                                :"text-neutral-content"} `
                                    }>{conversionWay=="Call" ? <IoCall /> 
                                                             :conversionWay=="Video" ? <BiSolidVideoRecording />
                                                                                     :<BiSolidMessageRoundedDots />
                                      }</article>
                <div className="card-body space-y-1">
                  <h2 className="card-title "><span className="text-[#244D3F] text-base sm:text-[20px] font-medium">{conversionWay}</span><span className="text-[#64748B] text-[12px] sm:text-[18px] font-normal "> with {name}</span></h2>
                  <p className="text-[#64748B] text-[12px] sm:text-base font-normal ">{(new Date(date)).toLocaleDateString("en-US",{
                                                                                                        year:"numeric",
                                                                                                        month:"long",
                                                                                                        day:"numeric"})}</p>
                </div>
            </div>
        </div>
    );
};

export default TimeLineCardGenerator;

{/* <FaHandshakeSimple /> */}