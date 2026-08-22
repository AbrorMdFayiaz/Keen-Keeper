import { Outlet } from 'react-router';
import NavBar from './NavBar';
import Footer from './Footer';

const RootLayout = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default RootLayout;