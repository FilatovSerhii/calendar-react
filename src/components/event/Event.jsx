import React, { useState } from 'react';

import ClassNames from 'classnames';

import './event.scss';

const Event = ({ onDeleteEvent, eventId, height, marginTop, title, time, weekDay }) => {
  const [isVisible, setIsVisible] = useState(false);

  const eventStyle = {
    height,
    marginTop,
  };

  const btnStyle = {
    top: height + marginTop - 10,
  };

  const root = document.querySelector('#root');

  const showBtnDelete = () => {
    setIsVisible(true);
    root.addEventListener('click', hideBtnDelete);
  };

  const hideBtnDelete = () => {
    setIsVisible(false);
    root.removeEventListener('click', hideBtnDelete);
  };

  return (
    <>
      <div style={eventStyle} className="event" onClick={showBtnDelete}>
        <div className="event__title">{title}</div>
        <div className="event__time">{time}</div>
      </div>

      <button
        onClick={() => onDeleteEvent(eventId)}
        style={btnStyle}
        className={ClassNames('delete-event-btn', {
          'delete-event-btn_left': weekDay === 'Sun',
          hidden: !isVisible,
        })}
      >
        <i className="fas fa-trash"></i>Delete
      </button>
    </>
  );
};



export default Event;
