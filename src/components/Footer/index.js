import React from 'react';
import githubIcon from "../../assets/images/github-icon.png";
import linkedinIcon from "../../assets/images/linkedin-icon.png";
import instagramIcon from "../../assets/images/instagram-icon.png";

function Footer() {
    return (
        <footer>
            <img src={githubIcon} className="github-icon" alt="github-icon"/>
            <a href="https://github.com/ndahlberg95">
                <p className="github">GitHub</p>
            </a>
            <img src={linkedinIcon} className="linkedin-icon" alt="linkedin-icon"/>
            <a href="https://www.linkedin.com/in/nora-dahlberg/">
                <p className="linkedIn">LinkedIn</p>
            </a>
            <img src={instagramIcon} className="instagram-icon" alt="instagram-icon"/>
            <a href="https://www.instagram.com/nora.dahlberg/?hl=en">
                <p className="instagram">Instagram</p>
            </a>
        </footer>
    );
}

export default Footer;