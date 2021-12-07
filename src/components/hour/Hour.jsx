import React from 'react';
import TimeLine from './TimeLine.jsx';

import './hour.scss';

import Event from '../event/Event';
import { formatMins } from "../../utils/dateUtils.js";

const Hour = ({ 
  onDeleteEvent,
  isCurrentHour, 
  dataHour, 
  hourEvents, 
  weekDay }) => (
    <div className="calendar__time-slot" data-time={dataHour + 1}>
      {isCurrentHour && <TimeLine />}

      {hourEvents.map(({ id, dateFrom, dateTo, title, description }) => {
        const eventStart = `${dateFrom.getHours()}:${formatMins(
          dateFrom.getMinutes()
        )}`;
        const eventEnd = `${dateTo.getHours()}:${formatMins(
          dateTo.getMinutes()
        )}`;

        return (
          <Event
            onDeleteEvent={onDeleteEvent}
            key={id}
            eventId={id}
            weekDay={weekDay}
            height={(dateTo.getTime() - dateFrom.getTime()) / (1000 * 60)}
            marginTop={dateFrom.getMinutes()}
            time={`${eventStart} - ${eventEnd}`}
            title={title}
            description={description}
          />
        );
      })}
    </div>
  );



export default Hour;
