import React from 'react';
import resume from "../../assets/resume/noras-resume-2021.pdf";

function Resume() {
    return (
        <section>
            <a href={resume} download>
                <h1 className= "download-resume">Download my resume!</h1>
            </a>
        </section>
    );
}

export default Resume;