import React from "react";
import { useDispatch } from "react-redux";

const CounterAction = () => {

    const dispatch = useDispatch();

    const handlePlus = () => {
        dispatch({
                type: "INCREMENT",
            });
    }

    const handleMinus = () => {
        dispatch({
            type: "DECREMENT",
        })
    }

    const handleReset = () => {
        dispatch({
            type: "RESET",
        })
    }

    return (
        <div>
            <button onClick={handlePlus}>+</button>
            <button onClick={handleMinus}>-</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default CounterAction;