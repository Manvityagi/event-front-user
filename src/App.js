import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './store/rootReducer.js';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import Events from './pages/events/Events';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import EventDetail from './pages/events/EventDetail';
import Navbar from './pages/layout/Navbar';

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunk,
    logger
  )
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Navbar />
            <Switch>
              <Route exact path='/' component={Events} />
              <Route exact path="/signin" component={SignIn} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/events/:id" component={EventDetail} />
              {/* <Route exact path="/events/:id/book" component={EventBooking} /> */}
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>

    );
  }

}

export default App;
