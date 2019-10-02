import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './components/Header';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import ContactsPage from './pages/ContactsPage';

function App({ user }) {
  return (
    <Router>
      <Header login={!!user} />

      <Switch>
        <Route exact path="/">
          <HomePage user={user} />
        </Route>

        <Route exact path="/login">
          <LoginPage />
        </Route>

        <Route exact path="/profile">
          {user === null ? <Redirect to="/login" /> : <ProfilePage />}
        </Route>

        <Route exact path="/contacts">
          {user === null ? <Redirect to="/login" /> : <ContactsPage />}
        </Route>
      </Switch>
    </Router>
  );
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(App);
