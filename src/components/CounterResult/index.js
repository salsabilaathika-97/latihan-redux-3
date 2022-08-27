import React from "react";
import { useSelector } from "react-redux";

const CounterResult = () => {
    const {countReducer} = useSelector((state) => state);

    return (
        <div>
            <h1>{countReducer.total}</h1>
        </div>
    )
}

export default CounterResult;