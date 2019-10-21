import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { REQUEST_READY } from './reducers/loginReducer';

import Home from './containers/Home';
import Login from './containers/Login';

import './App.css';

function App({ loadingStatus }) {
  const isLogined = loadingStatus === REQUEST_READY;

  return (
    <Router>
      <Switch>
          {/* home */}
          <Route exact path="/">
            {isLogined ? <Home /> : <Redirect to='/login' />}
          </Route>

          {/* login route */}
          <Route
            exact
            path="/login"
          >
            {isLogined ? <Redirect to='/' /> : <Login /> }
          </Route>
        </Switch>
    </Router>
  );
}

const mapStateToProps = state => ({
  loadingStatus: state.Login.loadingStatus,
});

export default connect(mapStateToProps)(App);
