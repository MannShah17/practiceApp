import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log('Uppercase was clicked' + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    // console.log('On change');
    setText(event.target.value);
  };
  const handleOnEmail = () => {
    var emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    var emails = text.match(emailPattern);
    if (emails) {
      // props.alert('Emails  found', 'success');
      setText('Emails found in your text are: ' + emails.join(', '));
    } else {
      // props.alert('No Emails Found', 'warning');
      setText('Email not Found');
    }
  };
  const [text, setText] = useState('');
  return (
    <>
      <div className='container'>
        <div className='mb-3 my-3'>
          <label htmlFor='myBox' className='form-label'>
            <h2>{props.heading}</h2>
          </label>
          <textarea
            className='form-control'
            onChange={handleOnChange}
            value={text}
            id='myBox'
            rows='8'
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className='btn btn-primary mx-2 my-2'
          onClick={handleUpClick}
        >
          Convert to upper-case
        </button>
        <button
          disabled={text.length === 0}
          className='btn btn-primary mx-2 my-2'
          onClick={handleLoClick}
        >
          Convert to lowwer-case
        </button>
        <button
          disabled={text.length === 0}
          className='btn btn-primary mx-2 my-2'
          onClick={handleOnEmail}
        >
          Click to find emails
        </button>
      </div>
      <div className='container my-2'>
        <h2>Your text summary</h2>
        <p>
          {
            text.split(' ').filter((element) => {
              return element.length !== 0;
            }).length
          }{' '}
          words and {text.length} characters
        </p>
        <p>{0.008 * text.split(' ').length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
