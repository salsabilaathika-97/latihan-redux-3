import React from "react";
import { useDispatch } from "react-redux";

const CounterAction = () => {

    const dispatch = useDispatch();

    const handlePlus = () => {
        dispatch({
                type: "INCREMENT",
            });
    }

    return (
        <div>
            <button onClick={handlePlus}>+</button>
            <button>-</button>
            <button>Reset</button>
        </div>
    )
}

export default CounterAction;