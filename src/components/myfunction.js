import React from "react";

function MyFunction(props) {
    return (
        <div className="container ">
            <h1>hii, my name is {props.name} first function in reactjs</h1>
            <button className="btn btn-primary">clck me</button>
        </div>
    )
}

export default MyFunction;