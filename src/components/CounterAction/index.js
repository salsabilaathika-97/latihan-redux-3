import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TYPES from "../../redux/types";

const CounterAction = () => {

    const dispatch = useDispatch();
    const {countReducer} = useSelector((state) => state);

    const handlePlus = () => {
        const result = countReducer.total + 1;
        dispatch({
                type: TYPES.INCREMENT,
                payload: result
            });
    }

    const handleMinus = () => {
        const result = countReducer.total - 1;
        dispatch({
            type: TYPES.DECREMENT,
            payload: result
        })
    }

    const handleReset = () => {
        const result = 0;
        dispatch({
            type: TYPES.RESET,
            payload: result
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