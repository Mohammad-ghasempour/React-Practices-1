import React from "react";

const Spinner = props => {
    return (
        <div>
            <div className="loader"></div>{props.message}
        </div>
    )
}

Spinner.defaultProps = {
    message: "we are trying to find your location"
}

export default Spinner