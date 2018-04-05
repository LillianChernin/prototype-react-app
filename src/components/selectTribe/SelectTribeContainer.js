import React, {Component} from 'react';
import SelectTribe from './SelectTribe';

class SelectTribeContainer extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="SelectTribeContainer">
        <SelectTribe />
      </div>
    )
  }
}

export default SelectTribeContainer;
