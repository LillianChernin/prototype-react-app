import React, {Component} from 'react';
import NannyProfile from './NannyProfile';

class NannyProfileContainer extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className='NannyProfileContainer'>
        <NannyProfile />
      </div>
    )
  }
}

export default NannyProfileContainer;
