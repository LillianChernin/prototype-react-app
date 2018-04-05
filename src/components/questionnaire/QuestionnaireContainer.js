import React, {Component} from 'react';
import Questionnaire from './Questionnaire';

class QuestionnaireContainer extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className='QuestionnaireContainer'>
        <Questionnaire />
      </div>
    )
  }
}

export default QuestionnaireContainer;
