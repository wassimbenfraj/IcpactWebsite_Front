import './App.css';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom"

import jquery from 'jquery';


import useScript from "./common/hooks/useScript";
import HomePage from "./pages/HomePage";
import ConsultingPage from "./pages/ConsultingPage";
import ScrollToTop from "./common/helpers/ScrollToTop";
import CoachingPage from "./pages/CoachingPage";
import ItDevelopmentPage from "./pages/ItDevelopmentPage";
import ProjectsPage from "./pages/ProjectsPage";


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
        <BrowserRouter>
            <ScrollToTop/>
            <Routes>
                <Route exact path="services/consulting" element={<ConsultingPage/>}/>
                <Route exact path="services/coaching" element={<CoachingPage/>}/>
                <Route exact path="services/ItDevelopment" element={<ItDevelopmentPage/>}/>
                <Route exact path="projects" element={<ProjectsPage/>}/>
                <Route path="/" element={<HomePage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
