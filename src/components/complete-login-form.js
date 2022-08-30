import React from "react";
import { Header } from "./header";
import LoginForm from "./log-in-form";

export default class LoginPage extends React.Component {
    render() {
        return(
            <>
            <Header/>
            <LoginForm/>
            </>
        )
    }
}