import { 
    FaHome, 
    FaUser 
} from "react-icons/fa";

const Header = () => {
    return (
        <header>
            <div className="main-header">
                <div className="grid-container grid-container--width-viewport">
                    <div className="grid-x vertical-align">
                        <div className="cell small-4">
                            <img className="main-header__logo" src="/assets/images/rms-logo.svg" alt="rms logo" />
                        </div>
                        <div className="cell small-8 text-right">
                            <ul className="nav-icon__lists show-for-medium">
                                <li><a href="/"><FaHome className="icon icon--home" /></a></li>
                                <li><a href="/"><FaUser className="icon icon--user" /></a></li>
                                <li><span>Welcome, John</span></li>
                            </ul>
                            <div className="main-header-mobile__menu-bar-button hide-for-medium">
                            <i className="main-header-mobile__menu-bar-icon fa fa-bars"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-header-mobile__content">
                <img className="main-header-mobile__logo" src="/assets/images/rms-logo-red.svg" alt="rms red logo" />
                <div className="main-header-mobile__menu-close-button">
                    <i className="main-header-mobile__menu-close-icon fa fa-times"></i>
                </div>
                <ul className="main-header-mobile__nav-lists">
                    <li className="btn btn--secondary text-center"><a href="/"><i className="fas fa-home icon"></i>Home</a></li>
                    <li className="btn btn--secondary text-center"><a href=""><i className="fas fa-user icon"></i>Account</a></li>
                    <li className="btn btn--secondary text-center"><a href=""><i className="fas fa-info-circle icon"></i>Info</a></li>
                </ul>
            </div>
        </header>
    )   
}

export default Header;