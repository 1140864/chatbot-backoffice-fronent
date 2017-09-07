import React from "react";
import logo from "./img/vf-logo.png";
import "./Header.css";

export default class Header extends React.Component {
    render() {
        return (
            <div className="Header">
                <img src={logo} className="Logo" alt="logo"/>
                <h2> Vodafone Chatbot BackOffice </h2>
            </div>
        );
    }
}