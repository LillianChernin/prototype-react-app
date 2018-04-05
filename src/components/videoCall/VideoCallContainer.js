import React, {Component} from 'react';
import VideoCall from './VideoCall';

class VideoCallContainer extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className='VideoCallContainer'>
        <VideoCall />
      </div>
    )
  }
}

export default VideoCallContainer;
