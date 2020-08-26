import React from "react";
import classes from "./Topics.module.css";
import Block from "../../Components/Block/Block";
import { sides } from "./data";
export default function Topic() {
    return (
        <>
            <div className={classes.heading}>
                Every Topic You need for your{" "}
                <p>
                    <strong>Coding Interview</strong>
                </p>
            </div>
            <div className={classes.root}>
                <div className={classes.row}>
                    {sides.map((e) => {
                        return (
                            <Block side={e.side} name={e.array[0]} link={e.link} color={e.color} />
                        );
                    })}
                </div>
                <div className={classes.row}>
                    {sides
                        .slice(0)
                        .reverse()
                        .map((e) => {
                            return (
                                <Block
                                    side={e.side}
                                    link={e.link}
                                    name={e.array[1]}
                                    color={e.color}
                                />
                            );
                        })}
                </div>
                <div className={classes.row}>
                    {sides.map((e) => {
                        return (
                            <Block side={e.side} name={e.array[2]} link={e.link} color={e.color} />
                        );
                    })}
                </div>
            </div>
        </>
    );
}
