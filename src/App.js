import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">howdy, glad to have you here</h1>
        </header>
        <p className="App-intro">
          my name is ezra, and i am a computer engineer.
        </p>
<div className = "spotify-container">
  <iframe
    width="300"
    height="300"
    src="https://www.youtube.com/embed/videoseries?list=PLVapI1W4F3iihYLiv-_wGKMP68-I-4LbY"
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
<div className = "above-image">
<p> this website looks alot better on a computer because the typing animation can fit on one line without being shrunk so much. i could use another animation to look better for phone users, but i am choosing not to. i also used a spotify embedded button at first but for some reason most browsers took issue with it so youtube embed instead. anyways, enjoy the rest of my website.</p>

</div>

</div>
        <div className="App-images">
          <img className="App-image-animated-fadeIn" src="https://www.australiangeographic.com.au/wp-content/uploads/2018/06/kodiak-bear-768x452.jpg" alt="placeholder image" />
        </div>
        <div></div>
        <div className="App-text">
        <p>
          i like to code. i like animals. i like texas a&m. i like the aggie coding club and the texas a&m cyber security club, both of which i am fortunate enough to serve as an officer for. 
          i like making things. 
        </p>
         
        
        <h2>more of me</h2>
        <ul>
          <li>email: [ezra@tamu.edu]</li>
          <li>linkedin: [my name]</li>
          <li>github: [https://github.com/ohKodiak]</li>
        </ul>
        </div>

      </div>
      
    );
  }
}

export default App;







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