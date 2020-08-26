import React from "react";
import classes from "./cButtons.module.css";
const Buttons = (props) => {
    const el = [1, 2, 3, 4];
    return (
        <>
            {el.map((x, i) => {
                return (
                    <button
                        className={props.x == i ? classes.active : classes.btn}
                        onClick={() => props.select(i)}
                    ></button>
                );
            })}
        </>
    );
};
export default Buttons;
