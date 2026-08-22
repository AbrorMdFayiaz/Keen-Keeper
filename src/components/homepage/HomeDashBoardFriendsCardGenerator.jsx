  // {
  //   "id": 1,
  //   "name": "David Kim",
  //   "picture": "https://randomuser.me/api/portraits/men/32.jpg",
  //   "email": "david.kim@example.com",
  //   "days_since_contact": 62,
  //   "status": "overdue",
  //   "tags": ["web dev", "mentor"],
  //   "bio": "Senior frontend developer. Helped me debug my first React component.",
  //   "goal": 30,
  //   "next_due_date": "2026-07-20"
  // }

// name,picture,email,days_since_contact,status,tags,bio,goal,next_due_date


const HomeDashBoardFriendsCardGenerator = ({item}) => {
    return (
        <div>
            <div className="card bg-base-100 shadow-sm text-center p-6">
              <figure className="rounded-full">
                <img
                  src={item.picture}
                  alt="Shoes" 
                  className="rounded-full w-20 h-20"

                  />
              </figure>
              <div className="card-body text-center">
                <h2 className="text-[#1F2937] font-semibold text-[20px]">{item.name}</h2>
                <p className="text-[#64748B] text-[12px] font-normal">{item.days_since_contact}d ago</p>
                <div className="card-actions flex-col justify-center items-center">
                  <section className="flex gap-2">
                    {
                      item.tags.map((element)=><div className="badge  text-[#244D3F] bg-[#CBFAE4] rounded-full p-4 font-medium text-[12px]">{element}</div>)
                    }
                  </section>
                  <div className={`badge  ${item.status=="Overdue"? "bg-[#EF4444]"
                                           :item.status=="On-track"?"bg-[#244D3F]":"bg-[#EFAD44]"
                                           } text-[#FFFFFF] rounded-full p-4 font-medium text-[12px]`
                                }>{item.status}</div>
                </div>
              </div>
            </div>
        </div>
    );
};

export default HomeDashBoardFriendsCardGenerator;






