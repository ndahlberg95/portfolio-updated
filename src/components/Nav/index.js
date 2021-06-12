import React from 'react';
import './style.css';

function Nav(props) {
    return (
        <header>
            <h2 className="title">
                <a href="/">
                    <span role="img" aria-label="camera"> 📸</span> Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a onClick={() => {
                            props.setCurrentPage("About")
                        }} href="#about">
                            About me
                        </a>
                    </li>
                    <li className="mx-2">
                        <a onClick={() => {
                            props.setCurrentPage("Portfolio")
                        }} href="#portfolio">
                            Portfolio
                        </a>
                    </li>
                    <li className="mx-2">
                        <a onClick={() => {
                            props.setCurrentPage("Contact")
                        }} href="#contact">
                            Contact
                        </a>
                    </li>
                    <li className="mx-2">
                        <a onClick={() => {
                            props.setCurrentPage("Resume")
                        }} href="#resume">
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;