// import { PieChart } from "recharts";

// import { PieChart } from "recharts";
import PieChartWithPaddingAngle from "./UpdatedChart";


const StatsLayout = () => {


//     const data = [
//   { name: 'Group A', value: 400 },
//   { name: 'Group B', value: 300 },
//   { name: 'Group C', value: 300 },
//   { name: 'Group D', value: 200 },
// ];

    return (
        <div className="bg-base-200">
            <article  className="py-20  container mx-auto px-2.5 sm:px-0">
                <section className="pb-6">
                     <h1 className="text-2xl sm:text-5xl font-bold text-[#1F2937]">Friendship Analytics</h1>
                </section>
                <section>
                     <div className="card bg-base-100 card-md shadow-sm py-8">
                           <div className="card-body">
                             <h2 className="card-title text-[#244D3F] text-[20px] font-medium">By Interaction Type</h2>
                             <div className="mx-auto card-actions py-6 w-52">
                                 {/* Chart */}
                                 {/* <PieChart data={data} ></PieChart> */}
                                 {/* <ChartNew/> */}
                                 <PieChartWithPaddingAngle></PieChartWithPaddingAngle>
                                 <section className="flex justify-center gap-6 mx-auto pt-6 ">
                                    <article><div className="badge badge-primary bg-[#7E35E1] border-[#7E35E1] badge-xs"></div><span> Text</span></article>
                                    <article><div className="badge badge-primary bg-[#244D3F] border-[#244D3F] badge-xs"></div><span> Call</span></article>
                                    <article><div className="badge badge-primary bg-[#37A163] border-[#37A163] badge-xs"></div><span> Video</span></article>
                                 </section>
                             </div>
                           </div>
                         </div>
                </section>
            </article>
        </div>
    );
};

export default StatsLayout;