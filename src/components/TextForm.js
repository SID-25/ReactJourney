import React, { useState } from 'react';

export default function TextArea(props) {
  const [text, setText] = useState('Enter the text here')

  const handleUpclick = () => {
   let newText = text.toUpperCase();
    setText(newText);
  }

  const handleOnChange = (event) => {
    setText(event.target.value) 
  }

  const handleFocus = () => {
    setText(''); // Clear the textarea when it receives focus
  }

  return (
    <div className="mb-3">
      <label htmlFor="mybox" className="form-label">{props.heading}</label>
      <textarea
        className="form-control"
        value={text}
        onChange={handleOnChange}
        onFocus={handleFocus} // Clear the textarea when it receives focus
        id="mybox"
        rows="8"
      ></textarea>
      <button className='btn btn-primary' onClick={handleUpclick}>Convert to Uppercase</button>
    </div>
  );
}
