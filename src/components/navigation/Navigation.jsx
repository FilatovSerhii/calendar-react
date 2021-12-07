import React from 'react';

import СlassNames from 'classnames';
import moment from 'moment';

import { days } from '../../utils/dateUtils.js';

const Navigation = ({ weekDates }) => (
    <header className="calendar__header">
      <span className="calendar__gmt">GMT+02</span>
      {weekDates.map((dayDate, index) => (
        <div
          key={index}
          className={СlassNames('calendar__day-label day-label', {
            'day-label_current':
              moment(dayDate).format('M D Y') === moment(new Date()).format('M D Y'),
          })}
        >
          <span className="day-label__day-name">{days[dayDate.getDay()]}</span>
          <span className="day-label__day-number">{dayDate.getDate()}</span>
          <div className="day-label__day-gmt"></div>
        </div>
      ))}
    </header>
  );



export default Navigation;
