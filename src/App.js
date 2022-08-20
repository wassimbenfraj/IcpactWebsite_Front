import './App.css';

import jquery from 'jquery';


import useScript from "./common/hooks/useScript";
import CoachingPage from "./pages/CoachingPage";
import ItDevelopmentPage from "./pages/ItDevelopmentPage";

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
        <ItDevelopmentPage/>
    );
}

export default App;
