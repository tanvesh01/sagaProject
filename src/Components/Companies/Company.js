import React from "react";
import classes from "./Company.module.css";
import { Company } from "../../Components/Crousel/data";
import { motion } from "framer-motion";
const rootVariant = {
    start: {
        transition: {
            staggerChildren: 0.2,
        },
    },
    end: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const companyVariant = {
    start: {
        y: "0%",
    },
    end: {
        y: "30%",
    },
};

const transitionVariant = {
    duration: 1,
    yoyo: Infinity,
    ease: "easeInOut",
};

export default function Companies() {
    return (
        <motion.div
            initial="start"
            animate="end"
            variants={rootVariant}
            className={classes.rootContainer}
        >
            {Company.map((e) => {
                return (
                    <motion.div
                        variants={companyVariant}
                        transition={transitionVariant}
                        className={classes.company}
                    >
                        <img className={classes.companyImage} src={e.link} />
                    </motion.div>
                );
            })}
        </motion.div>
    );
}
