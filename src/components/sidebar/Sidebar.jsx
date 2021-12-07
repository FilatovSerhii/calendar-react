import React from 'react';

import './sidebar.scss';

const Sidebar = () => {
  const hours = Array(23)
    .fill()
    .map((_,index) => index+1);

  return (
    <div className="calendar__time-scale">
      {hours.map((hour) => (
        <div key={hour} className="time-slot">
          <span className="time-slot__time">{`${hour}:00`}</span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
