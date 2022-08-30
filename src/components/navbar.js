import React from "react";

export default class Navbar extends React.Component {
    render() {
        return(
            <div>
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Contact Us</a>
                    </li>
                </ul>
            </div>
        )
    }
}