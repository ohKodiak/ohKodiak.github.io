import React, { Component } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  withRouter,
  useHistory
} from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">howdy, glad to have you here</h1>
      </header>
      <p className="App-intro">
        my name is ezra, and i am a computer engineer.
      </p>
      <div className="spotify-container">
        <iframe
          width="300"
          height="300"
          src="https://www.youtube.com/embed/videoseries?list=PLVapI1W4F3iihYLiv-_wGKMP68-I-4LbY"
          title="youre welcome"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="above-image">
          <p>
            {" "}
            
          </p>
        </div>
      </div>
      <div className="App-images">
        <img
          //className="App-image-animated-fadeIn"
          src="https://i.redd.it/3eoqxv69bqb41.jpg"
          alt="placeholder image"
        />
      </div>
      <div></div>
      <div className="App-text">
        <p>
          i like to code. i like animals. i like texas a&m. i like the aggie
          coding club and the texas a&m cyber security club, both of which i am
          fortunate enough to serve as an officer for. i like my silly little
          website.
        </p>

        <h2>more of me</h2>
        <ul>
          <li>email: [ezra@tamu.edu]</li>
          <li>
            resume:{" "}
            <a
              href="https://docs.google.com/document/d/1sGSlxGX9mVve7tX1sesGkt9JjJSwxh2bu6Uw1CoMcOw/edit?usp=sharing"
              class="black-link"
            >
              click
            </a>
          </li>
          <li>
            linkedin:{" "}
            <a href="https://www.linkedin.com/in/ezrajeter/" class="black-link">
              here
            </a>
          </li>
          <li>
            github:{" "}
            <a href="https://github.com/ohKodiak" class="black-link">
              https://github.com/ohKodiak
            </a>
          </li>
          <Link to="/evenmore">
            <li className="black-link">click here for even more!</li>
          </Link>
        </ul>
      </div>
      <div className="bottom-text">
        <p className="bottom-text">
          website version 1.2, i apologize to phone users for the small
          animation font
        </p>
      </div>
    </div>
  );
}

export default Home;

//npm start
//npm run deploy 
//after pushing to github








/*
        <h2>Education</h2>
        <ul>
          <li>[Your Degree], [Your Major], [Your University], [Graduation Year]</li>
          <li>[Your Degree], [Your Major], [Your University], [Graduation Year]</li>
        </ul>
        
        <h2>Experience</h2>
        <h3>[Your Job Title], [Your Company]</h3>
        <p>[Brief Description of Your Role and Accomplishments]</p>
        <h3>[Your Job Title], [Your Company]</h3>
        <p>[Brief Description of Your Role and Accomplishments]</p>
        <h2>Projects</h2>
        <ul>
          <li>[Project Name], [Brief Description], [Link to Project Website/GitHub Repository]</li>
          <li>[Project Name], [Brief Description], [Link to Project Website/GitHub Repository]</li>
        </ul>
        <h2>Contact Me</h2>
        <ul>
          <li>Email: [Your Email Address]</li>
          <li>LinkedIn: [Link to Your LinkedIn Profile]</li>
          <li>GitHub: [Link to Your GitHub Profile]</li>
        </ul> */


        //not sure about npm start but you do need npm run deploy to get updates