import React, { useState } from "react";
import "./NewPage.css";

function EvenMore() {
  const [inputValue, setInputValue] = useState("");
  const [output, setOutput] = useState("");

  const handleInputChange = (event) => {
    const sanitizedInput = sanitizeInput(event.target.value);
    setInputValue(sanitizedInput);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
  
    const skillsRegex = /^(?!.*\b(not|don't|do not|no)\b)(?=.*\b(skills|skill|expertise|programming)\b)/i;
    const experienceRegex = /^(?!.*\b(not|don't|do not|no)\b)(?=.*\b(job|jobs|experience|work|internship)\b)/i;
    const projectsRegex = /^(?!.*\b(not|don't|do not|no)\b)(?=.*\b(projects|project)\b)/i;
  
    if (skillsRegex.test(inputValue)) {
      setOutput("I consider myself foremost a problem solver, and programing and engineering are skills that I can use to solve problems. More specificially, I have basic profiency in Python, C++, javaScript, Typescript, Verilog, SQL, and MATLAB. I work well, if not best, in teams and collaborative enviroments but I can meet deadlines individually as well.  ");
    } else if (experienceRegex.test(inputValue)) {
      setOutput("I have worked as a software intern, software developer, and a hardware security research assistant. I am also the events and marketing chair at the Aggie Coding Club and on the tech commitee at the Cyber Security Club.");
    } else if (projectsRegex.test(inputValue)) {
      setOutput("I have worked on several projects in the past, gaining valuable experience. I worked with a team to create a file cabinet note with a unique UI that imitated the sliding motion of pulling files with data on them from filing cabinets. I also have a project called Browser Extensions where I worked with a team to create a browser extension to enhance the functionality of our class homepage canvas, remaking the UI to make it more relaxing and visually pleasing with a dark mode and embedded lofi youtube videos. I also have experience using Blender to model a church to scale for a research group at Texas A&M. ");
    } else {
      setOutput("I'm sorry, I don't have an answer for that input. Please indicate whether you would like to hear about either my skills, experience, or projects. ");
    }
  };
  
  const sanitizeInput = (input) => {
    // Remove any potential malicious content
    const sanitizedInput = input.replace(/<[^>]*>/g, ""); // Remove HTML tags
    const safeInput = sanitizedInput.replace(/[^a-zA-Z0-9\s.,?!]/g, ""); // Remove non-alphanumeric characters except some punctuation
  
    return safeInput;
  };
  

  return (
    <div>
      <h1 className="first-header">Ask me more about my skills, experience, or projects in the text box below.</h1>
      <form className="centered-container" onSubmit={handleSubmit}>
        <input className="centered-textbox" type="text" value={inputValue} onChange={handleInputChange} />
        <button className="cool-button" type="submit">Submit</button>
      </form>
      <p className = "output-response">{output}</p>
    </div>
  );
}

export default EvenMore;
