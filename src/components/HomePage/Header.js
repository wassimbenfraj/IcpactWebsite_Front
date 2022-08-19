const Header = () => {

    return (
        <header className="header-four header-full-width sticky-header">
            <div className="header-navigation">
                <div className="container-fluid d-flex align-items-center justify-content-between">
                    <div className="header-left">
                        <div className="site-logo">
                            <a href="index-2.html">
                                <img src="assets/img/ipact.png" width="150" alt="IPACT" className="main-logo"/>
                                <img src="assets/img/ipact2.png" width="150" alt="IPACT"
                                     className="sticky-logo"/>
                            </a>
                        </div>
                    </div>
                    <div className="site-nav-menu">
                        <ul className="primary-menu onepage-nav">
                            <li className="current"><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                        <a href="#" className="nav-close"><i className="fal fa-times"></i></a>
                    </div>
                    <div className="header-extra d-flex align-items-center">
                        <div className="nav-toggler">
                            <span></span><span></span><span></span>
                        </div>
                        <div className="navbar-btn">
                            <a href="#">Sign In</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    );
};

export default Header;
