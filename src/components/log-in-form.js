import React from "react";

export default class LoginForm extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <form className="form-inline">
                    <div className="form-group form-control row justify-content-center">
                    <label>Username</label>
                    <input type="text"/>
                    <label>Password</label>
                    <input type="text"/>

                    <button className="btn btn-success">submit</button>
                    </div>
                </form>
                </div>
                
            </div>

            
            
        )
    }
}