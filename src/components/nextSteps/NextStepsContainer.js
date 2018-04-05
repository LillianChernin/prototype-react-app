import React, {Component} from 'react';
import NextSteps from './NextSteps';

class NextStepsContainer extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className='NextStepsContainer'>
        <NextSteps />
      </div>
    )
  }
}

export default NextStepsContainer;
