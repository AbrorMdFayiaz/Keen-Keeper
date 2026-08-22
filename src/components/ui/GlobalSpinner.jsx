import { Outlet, useNavigation } from "react-router";


const GlobalSpinner = () => {
    const navigation = useNavigation();
    return (
        <div>
            {
                navigation.state=="loading"?<span className="loading loading-spinner text-success loading-xl"></span>:""
            }
            <Outlet/>
        </div>
    );
};

export default GlobalSpinner;