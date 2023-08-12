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
      setOutput("I have expertise in various programming languages and frameworks.");
    } else if (experienceRegex.test(inputValue)) {
      setOutput("I have worked on several projects in the past, gaining valuable experience.");
    } else if (projectsRegex.test(inputValue)) {
      setOutput("I have developed several projects, including web applications and mobile apps.");
    } else {
      setOutput("I'm sorry, I don't have an answer for that input.");
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
