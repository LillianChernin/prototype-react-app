import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Home.css';
import nannyTribe from '../../images/nanny-tribe-icon.png';
import twitter from '../../images/twitter-icon.png';
import pinterest from '../../images/pinterest-icon.png';
import facebook from '../../images/facebook-icon.png';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <img className="nannyTribeMainIcon" src={nannyTribe} alt="twitter"/>
        <div className="mainSignupButton">
          <Link className="Link SignupLink" to={'/login'}><h3 className="mainSignupButtonText">sign up</h3></Link>
        </div>
        <div className="mainLoginButton">
          <Link className="Link LoginLink" to={'/login'}><h3 className="mainLoginButtonText">login</h3></Link>
        </div>
        <h5 className='followHeader'>follow the leader</h5>
        <div className='followIconsContainer'>
          <a href="https://twitter.com/oliveyounannywi" target="_blank">
            <img className="twitterIcon" src={twitter} width="39" alt="twitter"/>
          </a>
          <a href="https://www.pinterest.com/oliveyouclt/" target="_blank">
            <img className="pinterestIcon" src={pinterest} width="39" alt="pinterest"/>
          </a>
          <a href="https://www.facebook.com/Olive-You-Nanny-Austin-355737071176496/" target="_blank">
            <img className="facebookIcon" src={facebook} width="39" alt="facebook"/>
          </a>
        </div>
      </div>
    )
  }
}

export default Home;
