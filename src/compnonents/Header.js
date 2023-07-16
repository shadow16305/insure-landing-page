import Banner from './Banner';
import Navbar from "./Navbar";
import './Header.css';

function Header() {
    return (
        <div className="header">
            <Navbar />
            <Banner />
        </div>
    )
};

export default Header;