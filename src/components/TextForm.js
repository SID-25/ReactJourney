import React, { useState } from 'react';

export default function TextArea(props) {
  // State for storing the text value of the textarea
  const [text, setText] = useState('Enter the text here')

  // Function to convert the text to uppercase and update the state
  const handleUpclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }

  // Function to handle changes in the textarea content and update the state
  const handleOnChange = (event) => {
    setText(event.target.value) 
  }

  // Function to clear the textarea content when it receives focus
  const handleFocus = () => {
    setText(''); // Clear the textarea when it receives focus
  }

  return (
    <div className="mb-3">
      {/* Label for the textarea */}
      <label htmlFor="mybox" className="form-label">{props.heading}</label>
      {/* Textarea element */}
      <textarea
        className="form-control"
        value={text} // Value of the textarea set to the state 'text'
        onChange={handleOnChange} // Event handler for changes in textarea content
        onFocus={handleFocus} // Event handler for clearing textarea content when it receives focus
        id="mybox"
        rows="8"
      ></textarea>
      {/* Button to convert textarea content to uppercase */}
      <button className='btn btn-primary' onClick={handleUpclick}>Convert to Uppercase</button>
    </div>
  );
}
