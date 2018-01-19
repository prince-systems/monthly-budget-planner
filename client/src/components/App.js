import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
const Dashboard = () => {
  return <h1>Dashboard</h1>;
};

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" component={Landing} exact />
            <Route path="/dashboard" component={Dashboard} exact />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);