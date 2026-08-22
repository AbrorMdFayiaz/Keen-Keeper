import HomeBanner from "./HomeBanner";
import HomeDashBoard from "./HomeDashBoard";
import HomeStatusBar from "./HomeStatusBar";

const Home = () => {






    return (
        <section className="bg-base-200">
            <div className="container mx-auto">
                <HomeBanner/>
                <HomeStatusBar/>
                <p className="border-b-2 my-10 border-[#E9E9E9]"></p>
                <HomeDashBoard/>
            </div>
        </section>
    );
};

export default Home;