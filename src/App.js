import React from "react";

import "./App.css";

import Header from "./Header";
import NavBar from "./NavBar";
import Main from './Main';


export default class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <NavBar />
                <Main/>
            </div>
        );
    }
}
