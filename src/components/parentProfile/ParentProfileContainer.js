import React, {Component} from 'react';
import ParentProfile from './ParentProfile';

class ParentProfileContainer extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className='ParentProfileContainer'>
        <ParentProfile />
      </div>
    )
  }
}

export default ParentProfileContainer;
