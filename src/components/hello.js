import React from "react";

function Hi(props) {
    function ClickMe(props) {
        alert("button is clicked")
    }
    return (
        <div className="row">

            < div className="col">
                <h1>Hi guys my name is {props.name} {props.last_name}</h1>
                <button className="btn btn-primary" onClick={ClickMe}>  click me  </button>
            </div></div>
    )


}
export default Hi;
