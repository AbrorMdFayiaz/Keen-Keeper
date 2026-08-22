import StatusCardGenerator from "./StatusCardGenerator";

const HomeStatusBar = () => {
    return (
        <div className="px-2.5 sm:px-0 grid grid-cols-2 sm:grid-cols-4 gap-6">
            <StatusCardGenerator status={4}/>
            <StatusCardGenerator status={5}/>
            <StatusCardGenerator status={6}/>
            <StatusCardGenerator status={7}/>
        </div>
    );
};

export default HomeStatusBar;