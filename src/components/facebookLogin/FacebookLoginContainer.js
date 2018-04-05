import React, {Component} from 'react';
import FacebookLogin from './FacebookLogin';

class FacebookLoginContainer extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className='FacebookLoginContainer'>
        <FacebookLogin />
      </div>
    )
  }
}

export default FacebookLoginContainer;
