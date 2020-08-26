import React from "react";
import classes from "./Landing.module.css";
import Crousel from "../../Components/Crousel/Crousel";
import Company from "../../Components/Companies/Company";
const Landing = () => {
    return (
        <>
            <div className={classes.root}>
                <div className={classes.heading}>
                    <p className={classes.text}>
                        Master Your Destiny With{" "}
                        <span style={{ fontWeight: 900 }}>PlacementSaga</span>
                    </p>
                    <div className={classes.btnWrap}>
                        <button className={classes.btn}> View Sample Question </button>
                    </div>
                </div>
                <div className={classes.crousel}>
                    <Crousel />
                </div>
            </div>
            <div className={classes.companyRoot}>
                <Company />
            </div>
        </>
    );
};

export default Landing;
