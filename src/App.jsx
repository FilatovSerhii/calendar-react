import React, { useState, useEffect } from 'react';

import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';

import { deleteEvent, createEvent, fetchEvents } from './gateway/events';
import { getWeekDates } from '../src/utils/dateUtils.js';

import './common.scss';

const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const weekDates = getWeekDates(weekStartDate);

  const onNextWeek = () => {
    setWeekStartDate(new Date(weekStartDate.setDate(weekStartDate.getDate() + 7)));
  };

  const onPrevWeek = () => {
    setWeekStartDate(new Date(weekStartDate.setDate(weekStartDate.getDate() - 7)));
  };

  const onToday = () => {
    setWeekStartDate(new Date());
  };

  const refreashEvents = () => {
    fetchEvents().then(response => {
      setEvents(
        response.map(el => ({
          ...el,
          dateFrom: new Date(el.dateFrom),
          dateTo: new Date(el.dateTo),
        })),
      );
    });
  };

  const onCreateEvent = event =>
    createEvent(event).then(_ => {
      refreashEvents();
    });

  const onDeleteEvent = eventId =>
    deleteEvent(eventId).then(_ => {
      refreashEvents();
    });

  useEffect(() => {
    refreashEvents();
  }, []);

  return (
    <>
      <Header
        onCreateEvent={onCreateEvent}
        weekDates={weekDates}
        onNextWeek={onNextWeek}
        onPrevWeek={onPrevWeek}
        onToday={onToday}
      />
      <Calendar onDeleteEvent={onDeleteEvent} events={events} weekDates={weekDates} />
    </>
  );
};

export default App;
