import React, { Component, Fragment } from 'react';
import proptypes from 'prop-types';

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: 0,
      second: 0,
      third: 0,
      end: performance.now(),
    };
  }

  componentDidMount() {
    // eslint-disable-next-line no-alert
    alert("HOC says: Hello! I'm mounted now!");
  }

  componentWillUnmount() {
    // eslint-disable-next-line no-alert
    alert('HOC says: Goodbye!');
  }

  handleSquareClick = square => {
    this.setState(prevState => {
      const updatedState = { ...prevState };
      updatedState[square] += 1;

      return updatedState;
    });
  };

  render() {
    const { end } = this.state;
    const { start, history } = this.props;
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
            onClick={() => this.handleSquareClick('first')}
            className="square-container--figure red"
          >
            <div className="square-container--figure__counter">
              {this.state.first || 'Red'}
            </div>
          </button>
          <button
            type="button"
            onClick={() => this.handleSquareClick('second')}
            className="square-container--figure blue"
          >
            <div className="square-container--figure__counter">
              {this.state.second || 'Blue'}
            </div>
          </button>
          <button
            type="button"
            onClick={() => this.handleSquareClick('third')}
            className="square-container--figure green"
          >
            <div className="square-container--figure__counter">
              {this.state.third || 'Green'}
            </div>
          </button>
        </div>
        <div className="square-actions">
          <button type="button" onClick={() => history.push('hook-component')}>
            Hook Component
          </button>
        </div>
      </Fragment>
    );
  }
}

ClassComponent.propTypes = {
  start: proptypes.string,
  history: proptypes.func,
};

export default ClassComponent;
