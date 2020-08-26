import React, { Component } from "react";
import "./App.css";
import Landing from "./Container/Landing/Landing";
import Sidedrawer from "./Components/SideDrawer/Sidedrawer";
import Navbar from "./Components/Navbar/Navbar";
import Topic from "./Container/Topics/Topics";
class App extends Component {
    state = {
        isOpen: false,
    };
    openHandler = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };
    render() {
        return (
            <>
                <Navbar isOpen={this.state.isOpen} openHandler={this.openHandler} />
                {this.state.isOpen ? <Sidedrawer /> : null}
                <Landing />
                <Topic />
            </>
        );
    }
}

export default App;
