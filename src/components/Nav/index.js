import React from 'react';
import paintbrush from '../../assets/images/paintbrush-stroke.jpeg';

function Nav(props) {
    return (
        <header>
            <h2 className="title">
                <a href="/">
                    <img src={paintbrush} className="paintbrush" alt="paintbrush"/>
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a onClick={() => {
                            props.setCurrentPage("About")
                        }} href="#about">
                            About Me
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