import React from 'react';
import noraImage from "../../assets/images/nora.jpeg";

function About() {
    return (
        <section className="my-5">
            <img src={noraImage} className="my-2" style={{ width: "25%" }} alt="Nora and Violet" />
            <div className="bio">
                <h1 className="who-am-i">Who am I?</h1>
                <p className="bio">Originally from the DC Metropolitan area, Nora has always had a keen eye for detail and interest in the creative arts.  She attended Bates College in Lewiston, Maine where she studied Sutdio Arts and Theater Design.  Nora has worked in the theater industry as a costume designer and fabricator for the likes of Broadway shows including the premiere of "Frozen" as well as "Phantom of the Opera" and "The Lion King."  She has also worked for the Washington National Opera and other theatrical companies in DC.  In 2019, Nora moved to Salt Lake City, Utah to gain closer access to the mountains where she spend her time hiking, skiing, and climbing.  She attends the Univeristy of Utah's Coding Bootcamp where she studies full-stack web-development and will graduate in July, 2021.  Nora now calls Salt Lake home with her rescue pittie, Violet.</p>
            </div>
        </section>
    );
}

export default About;