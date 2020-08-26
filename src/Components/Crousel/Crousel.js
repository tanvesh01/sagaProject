import React, { Component } from "react";
import classes from "./Crousel.module.css";
import Buttons from "./Crousel_buttons/cButtons";
import { data } from "./data";
// import "./App.css";
class Crousel extends Component {
    state = {
        selected: 0,
    };
    x = this.state.selected;
    select = (index) => {
        this.x = index;
        this.setState({ selected: index });
    };
    tick = () => {
        if (this.x === 0) {
            this.x = 1;
            this.setState({ selected: 1 });
        } else if (this.x === 1) {
            this.x = 2;
            this.setState({ selected: 2 });
        } else if (this.x === 2) {
            this.x = 3;
            this.setState({ selected: 3 });
        } else if (this.x === 3) {
            this.x = 0;
            this.setState({ selected: 0 });
        }
    };
    // For update of component
    componentDidMount() {
        // this.setState({ selected: "0" });
        this.interval = setInterval(() => {
            this.tick();
        }, 2500);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        // console.log(data[this.x].link);
        return (
            <>
                <div className={classes.root}>
                    <div className={classes.cImage}>
                        <div className={classes.image}>
                            <img src={data[this.x].link} className={classes.animate} width="80%" />
                        </div>
                        <div className={classes.head}>{data[this.x].name}</div>
                        <div className={classes.yellow}> </div>
                    </div>
                    <div className={classes.cText}>
                        <span> {data[this.x].message} </span>
                        <div className={classes.yellowBottom}> </div>
                    </div>
                </div>
                <div className={classes.butn}>
                    <Buttons x={this.state.selected} select={this.select} />
                </div>
            </>
        );
    }
}

export default Crousel;

{
    /* <h1>{data[this.x].name}</h1>
                <div>
                    <img src={data[this.x].link} />{" "}
                </div>

                 */
}
