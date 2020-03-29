import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Pages
const Login = React.lazy(() => import('./components/LoginComponent'));
const Dashboard = React.lazy(() => import('./components/DashboardComponent'));

class App extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <HashRouter>
        <React.Suspense fallback={loading()}>
          <Switch>
            <Route exact path="/dashboard" name="Home Page" render={props => <Dashboard {...props} />} />
            <Route path="/" name="Login" render={props => <Login {...props} />} />
          </Switch>
        </React.Suspense>
      </HashRouter>
    );
  }
}


function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(App);
