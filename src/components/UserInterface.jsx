import React, { useState } from 'react';
import "./UserInterface.css";
import Feedback from './Feedback';
import Controls from './Controls';
import ListFeedback from './ListFeedback';

function UserInterface() {
  const [feedback, setFeedback] = useState([]);
  const [newFeedback, setNewFeedback] = useState('');
  const [isFeedback, setIsFeedback] = useState(false);
  const [text, setText] = useState("");

  return (
    <div className='container'>
      <Controls />
      <div className='search-box'>
        <button><i className="fa-sharp fa-solid fa-magnifying-glass"></i></button>
        <input type="text" placeholder='search here' />
      </div>
      <div className='main-container'>
        <div className='feedback-container'>
          {isFeedback ? (
            <ListFeedback
              feedback={feedback}
              setFeedback={setFeedback}
              isFeedback={isFeedback}
              setIsFeedback={setIsFeedback}
            />
          ) : (
            <></>
          )}
        </div>
        <Feedback
          feedback={feedback}
          setFeedback={setFeedback}
          newFeedback={newFeedback}
          setNewFeedback={setNewFeedback}
          isFeedback={isFeedback}
          setIsFeedback={setIsFeedback}
          text={text}
          setText={setText}
        />
      </div>
    </div>
  );
}

export default UserInterface;
