

const ProfileCard = ({currentFriend}) => {
    const {name,picture,tags,bio,status,email}=currentFriend

    return (
        <div>
            <div className="card bg-base-100 shadow-sm text-center p-6 space-y-3">
              <figure className="rounded-full">
                <img
                  src={picture}
                  alt="Shoes" 
                  className="rounded-full w-20 h-20"

                  />
              </figure>
              <div className="card-body text-center">
                <div className="card-actions flex-col justify-center items-center gap-2">
                  <h2 className="text-[#1F2937] font-semibold text-[20px]">{name}</h2>
                  <section className="flex gap-2">
                    {
                      tags.map((element)=><div className="badge  text-[#244D3F] bg-[#CBFAE4] rounded-full p-2 font-medium text-[12px]">{element}</div>)
                    }
                  </section>
                  <article className="badge  text-[#FFFFFF] bg-[#EF4444] rounded-full p-2 font-medium text-[12px]">{status}</article>
                  {/* <article className="badge  text-[#FFFFFF] bg-[#EFAD44] rounded-full p-4 font-medium text-[12px]">TRAVEL</article>
                  <article className="badge  text-[#FFFFFF] bg-[#244D3F] rounded-full p-4 font-medium text-[12px]">TRAVEL</article> */}
                </div>
                <p className="text-[#64748B] text-[12px] font-normal">{bio}</p>
                <p className="text-[#64748B] text-[12px] font-normal">{email}</p>
              </div>
            </div>
        </div>
    );
};

export default ProfileCard;