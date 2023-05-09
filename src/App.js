import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to My Personal Website</h1>
        </header>
        <p className="App-intro">
          My name is Ezra, and I am a Computer Engineer.
        </p>
        <div className="App-images">
          <img className="App-image animated fadeIn" src="https://www.australiangeographic.com.au/wp-content/uploads/2018/06/kodiak-bear-768x452.jpg" alt="placeholder image" />
        </div>
        <p>
          I have experience in [List Your Skills or Projects]. I am passionate about [Your Interests or Hobbies].
        </p>
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
        </ul>
      </div>
    );
  }
}

export default App;
