import React from "react";
import { useDispatch } from "react-redux";
import TYPES from "../../redux/types";

const CounterAction = () => {

    const dispatch = useDispatch();

    const handlePlus = () => {
        dispatch({
                type: TYPES.INCREMENT,
            });
    }

    const handleMinus = () => {
        dispatch({
            type: TYPES.DECREMENT,
        })
    }

    const handleReset = () => {
        dispatch({
            type: TYPES.RESET,
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