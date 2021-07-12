import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import JoinRoomPage from './JoinPage';
import RoomPage from './RoomPage';
import IntroPage from './IntroPage';

import './App.css';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/join-room">
          <JoinRoomPage />
        </Route>
        <Route path="/room">
          <RoomPage />
          </Route>
          <Route path="/">
            <IntroPage />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
