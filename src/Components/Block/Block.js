import React from "react";
import { motion } from "framer-motion";
import "./Block.css";
export default function Block(props) {
    const x = props.side;
    return (
        <motion.div
            whileHover={{
                scale: 1.2,
                transition: {
                    duration: 0.1,
                },
            }}
            whileTap={{ scale: 0.9 }}
            style={{ backgroundColor: props.color }}
            className={["topic", x].join(" ")}
        >
            <img className="image" src={props.link} />
            <div style={{ position: "relative", zIndex: 9 }}>{props.name} </div>
        </motion.div>
    );
}
