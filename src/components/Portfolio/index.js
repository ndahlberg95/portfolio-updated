import React from 'react';
import donationTrackerImage from "../../assets/images/donation-tracker-screenshot.png";
import ghostwriterImage from "../../assets/images/ghostwriter-screenshot.png";
import budgetTrackerImage from "../../assets/images/budget-tracker-screenshot.png";
import horiseonImage from "../../assets/images/horiseon-screenshot.png";
import runBuddyImage from "../../assets/images/run-buddy-screenshot.png";

function Portfolio() {
  return (
    <section>
        <div className="projects">
            <div className="donation-tracker">
                <img src={donationTrackerImage} className="donation-tracker-image" alt="donation-tracker-screenshot" />
                <h2>DONATION TRACKER</h2>
                <a href="">
                    <p>Link to Deployed Application</p>
                </a>
                <a href="https://github.com/ndahlberg95/donation-tracker">
                    <p>Link to Github Repository</p>
                </a>
            </div>
            <div className="ghostwriter">
                <img src={ghostwriterImage} className="ghostwriter-image" alt="ghostwriter-screenshot" />
                <h2>GHOSTWRITER</h2>
                <a href="https://desolate-harbor-29412.herokuapp.com/">
                    <p>Link to Deployed Application</p>
                </a>
                <a href="https://github.com/Ryobia/story-telling-app">
                    <p>Link to GitHub Repository</p>
                </a>
            </div>
            <div className="budget-tracker">
                <img src={budgetTrackerImage} className="budget-tracker-image" alt="budget-tracker-screenshot" />
                <h2>BUDGET TRACKER</h2>
                <a href="https://protected-dawn-35403.herokuapp.com/">
                    <p>Link to Deployed Application</p>
                </a>
                <a href="https://github.com/ndahlberg95/budget-tracker">
                    <p>Link to GitHub Repository</p>
                </a>
            </div>
            <div className="horiseon">
                <img src={horiseonImage} className="horiseon-image" alt="horiseon-screenshot" />
                <h2>HORISEON</h2>
                <a href="https://ndahlberg95.github.io/Horiseon/">
                    <p>Link to Deployed Application</p>
                </a>
                <a href="https://github.com/ndahlberg95/Horiseon">
                    <p>Link to GitHub Repository</p>
                </a>
            </div>
            <div className="run-buddy">
                <img src={runBuddyImage} className="run-buddy-image" alt="run-buddy-screenshot" />
                <h2>RUN BUDDY</h2>
                <a href="https://ndahlberg95.github.io/run-buddy/">
                    <p>Link to Deployed Application</p>
                </a>
                <a href="https://github.com/ndahlberg95/run-buddy">
                    <p>Link to GitHub Repository</p>
                </a>
            </div>
            <div className="placeholder">
                <img src={donationTrackerImage} className="donation-tracker-image" alt="donation-tracker-screenshot" />
                <h2>PLACEHOLDER</h2>
                <a href="">
                    <p>Link to Deployed Application</p>
                </a>
                <a href="">
                    <p>Link to GitHub Repository</p>
                </a>
            </div>
        </div>
    </section>
  );
}

export default Portfolio;