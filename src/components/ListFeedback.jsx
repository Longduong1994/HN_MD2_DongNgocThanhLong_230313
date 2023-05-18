import React from 'react';

function ListFeedback(props) {
  const { feedback, setFeedback, isFeedback, setIsFeedback } = props;

  const handleDelete = (index) => {
    setIsFeedback(false);
    const updatedFeedback = [...feedback];
    updatedFeedback.splice(index, 1);
    setFeedback(updatedFeedback);
  };

  const getCurrentDate = () => {
    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
    return formattedDate;
  };

  return (
    <div>
      <div className='feedback'>
        {feedback.map((content, i) => (
          <div key={i}>
            <p className='info'>{content}</p>
            <div className='active'>
              <p>{getCurrentDate()}</p>
              <p><i className="fa-solid fa-trash-can" onClick={() => handleDelete(i)}></i></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListFeedback;
