import React from 'react';
import Hour from '../hour/Hour';

import moment from 'moment';

const Day = ({ onDeleteEvent, dayStart, dataDay, dayEvents, weekDay }) => {
  const hours = Array(24)
    .fill()
    .map((val, index) => index);

  return (
    <div className="calendar__day" data-day={dataDay}>
      {hours.map(hour => {
        const hourEvents = dayEvents.filter(event => event.dateFrom.getHours() === hour);

        return (
          <Hour
            onDeleteEvent={onDeleteEvent}
            key={dataDay + hour}
            isCurrentHour={
              moment(dayStart).format('M D Y') === moment(new Date()).format('M D Y') &&
              hour === new Date().getHours()
            }
            weekDay={weekDay}
            dataHour={hour}
            hourEvents={hourEvents}
          />
        );
      })}
    </div>
  );
};



export default Day;
