import React, {JSX} from "react";
import "./Preloader.scss";

const Preloader = () : JSX.Element => {
    return (
        <div className="progress">
            <div className="indeterminate"></div>
        </div>
    );
}

export { Preloader };
