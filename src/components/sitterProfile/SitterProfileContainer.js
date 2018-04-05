import React, {Component} from 'react';
import SitterProfile from './SitterProfile';

class SitterProfileContainer extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div class="SitterProfileContainer">
        <SitterProfile />
      </div>
    )
  }
}

export default SitterProfileContainer;
