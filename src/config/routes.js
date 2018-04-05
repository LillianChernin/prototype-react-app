import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/home/Home';
import FacebookLogin from '../components/facebookLogin/FacebookLogin';
import SelectTribe from '../components/selectTribe/SelectTribe';
import QuestionnaireContainer from '../components/questionnaire/QuestionnaireContainer';
import Upgrade from '../components/upgrade/Upgrade';
import ProfileContainer from '../components/profile/ProfileContainer';
import CalendarContainer from '../components/calendar/CalendarContainer';
import NextStepsContainer from '../components/nextSteps/NextStepsContainer';
import SitterProfileContainer from '../components/sitterProfile/SitterProfileContainer';
import ParentProfileContainer from '../components/parentProfile/ParentProfileContainer';
import NannyProfileContainer from '../components/nannyProfile/NannyProfileContainer';
import VideoCallContainer from '../components/videoCall/VideoCallContainer';

export default (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/login' component={FacebookLogin} />
    <Route exact path='/select-tribe' component={SelectTribe} />
    <Route exact path='/upgrade' component={Upgrade} />
    <Route exact path='/profile' component={ProfileContainer} />
    <Route exact path='/calendar' component={CalendarContainer} />
    <Route path='/next-steps/:id' component={NextStepsContainer} />
    <Route path='/questionnaire/:id' component={QuestionnaireContainer} />
    <Route path='/sitter/:id' component={SitterProfileContainer} />
    <Route path='/parent/:id' component={ParentProfileContainer} />
    <Route path='/nanny/:id' component={NannyProfileContainer} />
    <Route path='/video/:id' component={VideoCallContainer} />
  </Switch>
)
