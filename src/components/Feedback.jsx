import React, { useState } from 'react';

function Feedback(props) {
  const { feedback, setFeedback, newFeedback, setNewFeedback, isFeedback, setIsFeedback, text, setText } = props;
  const [characterCount, setCharacterCount] = useState(0);

  const handleChange = (e) => {
    const inputText = e.target.value;
    setNewFeedback(inputText);
    setText(inputText);
    setCharacterCount(inputText.length);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFeedback(true);
    setFeedback([...feedback, newFeedback]);
    setNewFeedback('');
  };

  return (
    <div>
      <div className='feedback'>
        <form onSubmit={handleSubmit}>
          <input type="text" value={newFeedback} onChange={handleChange} />
          <div className='active'>
            <p> {characterCount}</p>
            <p>
              <button type='submit'>PUBLISH</button>
              <i className="fa-sharp fa-solid fa-upload"></i>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Feedback;
