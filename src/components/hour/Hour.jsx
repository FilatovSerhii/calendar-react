import React, { useEffect, useState } from 'react';
import TimeLine from './TimeLine.jsx';
import './hour.scss';

import Event from '../event/Event';
import { formatMins } from '../../../src/utils/dateUtils.js';

const Hour = ({ onDeleteEvent, isCurrentHour, dataHour, hourEvents, weekDay }) => {
  const [redLineTop, setRedLineTop] = useState(new Date().getMinutes());

  const style = {
    top: redLineTop,
  };

  useEffect(() => {
    const id = setInterval(() => setRedLineTop(redLineTop + 1), 1000 * 60);
    return () => clearTimeout(id);
  });

  return (
    <div className="calendar__time-slot" data-time={dataHour + 1}>
      {!isCurrentHour ? null : <TimeLine style={style} />}

      {hourEvents.map(({ id, dateFrom, dateTo, title }) => {
        const eventStart = `${dateFrom.getHours()}:${formatMins(dateFrom.getMinutes())}`;
        const eventEnd = `${dateTo.getHours()}:${formatMins(dateTo.getMinutes())}`;

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
          />
        );
      })}
    </div>
  );
};



export default Hour;
