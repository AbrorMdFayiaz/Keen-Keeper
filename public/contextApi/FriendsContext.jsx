// import { createContext, use, useEffect } from "react";

import { createContext, use } from "react";

const friendsPromise = fetch("/data.json").then(r=>r.json());

export const FriendsContext = createContext();


const FriendsProvider = ({children}) => {


    const friendsData = use(friendsPromise);

    // console.log(friendsData);

    // useEffect(()=>{
    //     const
    // },[])

    return (
        <FriendsContext.Provider value={friendsData}>
            {children}
        </FriendsContext.Provider>
    );
};

export default FriendsProvider;