import React, { useState, useEffect, Fragment } from 'react';
import proptypes from 'prop-types';

function HookComponent({ start, history }) {
  const [redCounter, setRedCounter] = useState(0);
  const [blueCounter, setBlueCounter] = useState(0);
  const [greenCounter, setGreenCounter] = useState(0);
  const [end] = useState(performance.now());

  useEffect(() => {
    // eslint-disable-next-line no-alert
    alert("Hook says: Hello! I'm mounted now!");
    // eslint-disable-next-line no-alert
    return () => alert('Hook says: Goodbye!');
  });

  return (
    <Fragment>
      <div className="title">
        <h1>HOC vs Hooks</h1>
        <h4>A small introduction</h4>
      </div>
      <div className="performance">
        Time to render:
        {` ${Math.floor(end - start * -100) / 100} ms`}
      </div>
      <div className="square-container">
        <button
          type="button"
          onClick={() => setRedCounter(redCounter + 1)}
          className="square-container--figure red"
        >
          <div className="square-container--figure__counter">
            {redCounter || 'Red'}
          </div>
        </button>
        <button
          type="button"
          onClick={() => setBlueCounter(blueCounter + 1)}
          className="square-container--figure blue"
        >
          <div className="square-container--figure__counter">
            {blueCounter || 'Blue'}
          </div>
        </button>
        <button
          type="button"
          onClick={() => setGreenCounter(greenCounter + 1)}
          className="square-container--figure green"
        >
          <div className="square-container--figure__counter">
            {greenCounter || 'Green'}
          </div>
        </button>
      </div>
      <div className="square-actions">
        <button type="button" onClick={() => history.push('class-component')}>
          Class Component (HOC)
        </button>
      </div>
    </Fragment>
  );
}

HookComponent.propTypes = {
  start: proptypes.string,
  history: proptypes.func,
};

export default HookComponent;
