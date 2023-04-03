import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { tick } from "./clockSlice";

export function Time() {
    const time = useSelector((state) => state.clock.value)
    const dispatch = useDispatch()

    useEffect(()=>{
        setInterval(()=>{
            dispatch(tick())
        },1000)
    }, [])
    return (
        <>{time}</>
    )
}
