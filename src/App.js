import logo from './logo.svg';
import './App.css';

import jquery from 'jquery';


import ServiceDetailsPage from "./pages/ServiceDetailsPage";
import useScript from "./common/hooks/useScript";
import HomePage from "./pages/HomePage";

window.$ = window.jQuery = jquery;

const App = () => {

    useScript('assets/js/bootstrap.bundle.min.js');
    useScript('assets/js/slick.min.js');
    useScript('assets/js/jquery.magnific-popup.min.js');
    useScript('assets/js/isotope.pkgd.min.js');
    useScript('assets/js/imagesloaded.pkgd.min.js');
    useScript('assets/js/jquery.inview.min.js');
    useScript('assets/js/jquery.easypiechart.min.js');
    useScript('assets/js/jquery.syotimer.min.js');
    useScript('assets/js/wow.min.js');
    useScript('assets/js/main.js');

    return (
        <HomePage/>
    );
}

export default App;
