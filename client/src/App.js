import Navbar from 'components/shared/navbar';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ContactScreen from 'screens/Contact';
import HomeScreen from 'screens/Home';
import SigninScreen from 'screens/Login';
import SignupScreen from 'screens/Signup';
import ProfileScreen from 'screens/Profile';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomeScreen} />
        <Route path="/contact-us" component={ContactScreen} />
        <Route path="/login" component={SigninScreen} />
        <Route path="/signup" component={SignupScreen} />
        <Route path="/profile/:username" component={ProfileScreen} />
      </Switch>
    </Router>
  );
}

export default App;
