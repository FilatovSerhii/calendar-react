import React, { useState } from 'react';

import { months } from '../../utils/dateUtils.js';
import Modal from '../modal/Modal.jsx';

import './header.scss';

const Header = ({ weekDates, onCreateEvent, onNextWeek, onPrevWeek, onToday }) => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  
  const [month, nextMonth] = [...new Set(weekDates.map(day => day.getMonth()))];

  return (
    <>
      {isVisibleModal && (
        <Modal
          onCreateEvent={onCreateEvent}
          onCloseModal={() => setIsVisibleModal(false)}
        />
      )}

      <header className="header">
        <button
          className="button create-event-btn"
          onClick={() => setIsVisibleModal(true)}
        >
          <i className="fas fa-plus create-event-btn__icon"></i>Create
        </button>

        <div className="navigation">
          <button className="navigation__today-btn button" onClick={onToday}>
            Today
          </button>

          <button
            className="icon-button navigation__nav-icon"
            onClick={onPrevWeek}
          >
            <i className="fas fa-chevron-left"></i>
          </button>

          <button
            className="icon-button navigation__nav-icon"
            onClick={onNextWeek}
          >
            <i className="fas fa-chevron-right"></i>
          </button>

          <span className="navigation__displayed-month">
            {!nextMonth
              ? months[month]
              : `${months[month]} - ${months[nextMonth]}`}
          </span>
        </div>
      </header>
    </>
  );
};



export default Header;
