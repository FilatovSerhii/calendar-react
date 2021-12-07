import React from 'react';
import { useState, useEffect } from 'react';
const RedLine = () => {
  const [redLineTop, setRedLineTop] = useState(new Date().getMinutes());

  const style = {
    top: redLineTop,
  };

  useEffect(() => {
    const id = setInterval(() => setRedLineTop(redLineTop + 1), 1000 * 60);
    return () => clearTimeout(id);
  });

  return (
    <div style={style} className="time-line">
      <div className="time-line__circle"></div>
      <div className="time-line__line"></div>
    </div>
  );
};

export default RedLine;
