import React, {Component} from 'react';
import './FacebookLogin.css';

class FacebookLogin extends Component {
  render() {
    return (
      <div class='FacebookLogin'>
        <h1>Facebook Login</h1>
        <div className="fb-login-button" data-max-rows="1" data-size="large" data-button-type="continue_with" data-show-faces="false" data-auto-logout-link="false" data-use-continue-as="false"></div>
      </div>
    )
  }
}

export default FacebookLogin;
