import {useState} from "react";

const Preloader = () => {

    const [isLoading, setIsLoading] = useState(true);

    setTimeout(() => {
        setIsLoading(false);
    }, 1000);

    return (
        <>
            {isLoading && (
                <div id="preloader">
                    <div className="loader-cubes">
                        <div className="loader-cube1 loader-cube"></div>
                        <div className="loader-cube2 loader-cube"></div>
                        <div className="loader-cube4 loader-cube"></div>
                        <div className="loader-cube3 loader-cube"></div>
                    </div>
                </div>
            )}
        </>

    );
};

export default Preloader;