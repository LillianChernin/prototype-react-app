import React, {Component} from 'react';
import Upgrade from './Upgrade';

class UpgradeContainer extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className='UpgradeContainer'>
        <Upgrade />
      </div>
    )
  }
}

export default UpgradeContainer;
