import React, {Component} from 'react';
import Profile from './Profile';

class ProfileContainer extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="ProfileContainer">
        <Profile />
      </div>
    )
  }
}

export default ProfileContainer;
