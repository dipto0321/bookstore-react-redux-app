import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import decode from 'jwt-decode';
import BooksDashboard from './BooksDashboard';
import '../../scss/main.scss';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import EditUserPage from './EditUserPage';
import AdminDashboard from './AdminDashboard';
import configureStore from '../store/configureStore';
import { setCurrentUser } from '../actions/user';
import { setAuthorizationToken } from '../services/api';
import history from '../services/history';
import withAuth from '../hocs/withAuth';
import withCorrectUser from '../hocs/withCorrectUser';
import withAdmin from '../hocs/withAdmin';

const store = configureStore();

if (localStorage.token) {
  const userData = decode(localStorage.token);
  setAuthorizationToken(localStorage.token);

  try {
    store.dispatch(setCurrentUser({ authenticated: true, data: userData }));
  } catch (err) {
    store.dispatch(setCurrentUser({ authenticated: false, data: null }));
    localStorage.clear();
  }
}

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/login" component={withAuth(LoginPage, true)} />
        <Route path="/signup" component={withAuth(SignUpPage, true)} />
        <Route path="/" component={withAuth(BooksDashboard)} exact />
        <Route path="/users/:id" component={withAuth(withCorrectUser(EditUserPage))} />
        <Route path="/admin" component={withAuth(withAdmin(AdminDashboard))} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
