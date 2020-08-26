import React from "react";
import classes from "./Navbar.module.css";
import id from "./Icon.module.css";
export default function Navbar(props) {
    return (
        <div className={classes.root}>
            <div className={classes.nav}>
                <div>
                    <div
                        onClick={() => props.openHandler()}
                        id={id.nav_icon3}
                        className={props.isOpen ? id.open : null}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className={classes.logo}>
                    <div className={classes.logoText}>
                        <div>Placement</div>
                        <div>Saga</div>
                    </div>
                    <div className={classes.logoBrackets}>
                        {"{"}
                        <div className={classes.bars}>
                            <div className={`${classes.bar} ${classes.bar1}`}></div>
                            <div className={`${classes.bar} ${classes.bar2}`}></div>
                            <div className={`${classes.bar} ${classes.bar3}`}></div>
                            <div className={`${classes.bar} ${classes.bar4}`}></div>
                        </div>
                        {"}"}
                    </div>
                </div>
                <span className={classes.links}>
                    <a href="/" className={classes.link}>
                        Question Library
                    </a>
                    <a href="/" className={classes.link}>
                        {" "}
                        Theory Series{" "}
                    </a>
                    <a href="/" className={classes.link}>
                        {" "}
                        Mock Tests{" "}
                    </a>
                    <a href="/" className={classes.link}>
                        {" "}
                        Subscribe{" "}
                    </a>
                </span>
                <span>
                    <button className={classes.login}> Login </button>{" "}
                </span>
            </div>
        </div>
    );
}
