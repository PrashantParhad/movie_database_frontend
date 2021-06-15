import React from "react";
import "./modal.css"

function Modal({show,closePopup}) {

    const chooseClass = show ? "showPopup":"hidePopup";
    return (
        <div className={chooseClass}>
            <div className="content">
                <p>Movie Added</p>
                <button onClick={closePopup}>Close</button>
            </div>
        </div>
    );
}

export default Modal;
