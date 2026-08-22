

const RelationShipGoalCard = () => {
    return (
        <div className="pt-auto">
            <div className="card  bg-base-100 card-md shadow-sm  ">
              <div className="card-body grid grid-cols-6">
                <section className=" col-span-5 row-span-3 space-y-4">
                    <h2 className="card-title  text-[#244D3F] text-[20px] font-medium">Relationship Goal</h2>
                    <span className=" text-[#1F2937] text-[18px] font-bold"><span className=" text-[#64748B] text-[18px] font-normal">Connect every</span> 30 days</span>
                </section>
                <div className="justify-end card-actions ">
                  <button className="btn btn-xs sm:btn-xs md:btn-sm lg:btn-md xl:btn-md">Edit</button>
                </div>
              </div>
            </div>
        </div>
    );
};

export default RelationShipGoalCard;

//  className="card-title mx-auto"
