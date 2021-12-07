import React from 'react';
import './event.scss';

const DeleteEvent = ({ onDeleteEvent, eventId }) => (
  <button className="delete-event-btn" onClick={() => onDeleteEvent(eventId)}>
    Delete
  </button>
);

export default DeleteEvent;
