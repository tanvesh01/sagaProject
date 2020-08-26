import React from "react";
import { motion } from "framer-motion";
import classes from "./Sidedrawer.module.css";

const navVariant = {
    hidden: {
        x: -500,
    },
    visible: {
        x: 0,
        transition: {
            duration: 0.5,
        },
    },
};

export default function Sidedrawer(props) {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={navVariant}
            id="mySidenav"
            className={classes.sidenav}
        >
            <a href="/">Question Library</a>
            <a href="/">Theory Series</a>
            <a href="/">Mock Tests</a>
            <a href="/">Subscribe</a>
        </motion.div>
    );
}
