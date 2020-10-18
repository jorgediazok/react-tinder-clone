import React from 'react';
import Header from './components/Header';
import TinderCards from './components/TinderCards';
import SwipeButtons from './components/SwipeButtons';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Router>
        <Switch>
          <Route path="/chat">
            <h1>Chat</h1>
          </Route>
        </Switch>
        <Route path="/" exact>
          <TinderCards />
          <SwipeButtons />
        </Route>
      </Router>
    </div>
  );
}

export default App;
