import {Link} from "react-router-dom";

const Header = () => {

    return (
        <header className="header-two header-full-width sticky-header">
            <div className="header-navigation">
                <div className="container-fluid d-flex align-items-center justify-content-between">
                    <div className="header-left">
                        <div className="site-logo">
                            <Link to={"/"}><img src={"./assets/img/ipact2.png"} width="150" alt="Ipact"/></Link>
                        </div>
                    </div>
                    <div className="site-nav-menu">
                        <ul className="primary-menu onepage-nav">
                            <li className="current"><a href="">Home</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Services</a></li>
                            <li><a href="">Projects</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                        <a href="#" className="nav-close"><i className="fal fa-times"></i></a>
                    </div>
                    <div className="header-extra d-flex align-items-center">
                        <div className="nav-toggler">
                            <span></span><span></span><span></span>
                        </div>
                        <div className="navbar-btn">
                            <a href="#">Sign in</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;