import React, {Component} from 'react';
import Calendar from './Calendar';

class CalendarContainer extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="CalendarContainer">
        <Calendar />
      </div>
    )
  }
}

export default CalendarContainer;
