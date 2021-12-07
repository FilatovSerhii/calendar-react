import React, { useState } from 'react';

import ClassNames from 'classnames';
import DeleteEvent from './DeleteEvent.jsx';
import './event.scss';

const Event = ({
  onDeleteEvent,
  eventId,
  height,
  marginTop,
  title,
  time,
  weekDay,
  description,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const eventStyle = {
    height,
    marginTop,
  };

 

  const [isShowModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!isShowModal);
  };

  return (
    <>
      <div style={eventStyle} className="event" onClick={toggleModal}>
        <div className="event__title">{title}</div>
        <div className="event__time">{time}</div>
        <div className="event__description">{description}</div>
        {isShowModal && (
          <DeleteEvent onDeleteEvent={onDeleteEvent} eventId={eventId} />
        )}
      </div>

      
    </>
  );
};



export default Event;
