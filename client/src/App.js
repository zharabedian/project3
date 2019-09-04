import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import * as routes from './constants/routes';
import SignUp from './components/SignInUp/SignUp';
import SignIn from './components/SignInUp/SignIn';
import { firebase, auth } from './firebase';
import Form from "./pages/Form";
import About from "./pages/About";
import UpdateForm from "./pages/UpdateForm"

class SignOut extends React.Component {
  signOut = e => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }

    return auth
      .doSignOut()
      .then(response => {
        console.log('successfully signed out', response);
        localStorage.clear();
      })
      .catch(err => {
        console.log('failed to sign out', err);
      });
  };

  componentDidMount() {
    this.signOut();
  }

  render() {
    return <Redirect to={routes.HOME_PATH} />;
  }
}

const AuthenticatedNavigation = () => {
  return (
    <React.Fragment>
      <li className="navitems">
        <Link to={routes.SIGN_OUT_PATH}>Sign Out</Link>
      </li>
      <li>
        {/* {(localStorage.getItem("repeatUser") !== 1) ? ( */}
        <Link to="/customize" className={window.location.pathname === "/customize"}>
          Customize Your New Button</Link>
        {/* ) : ( */}

        {/* )} */}

      </li>
      <li>
        <Link to="/update" className={window.location.pathname === "/update"}>
          Update Your Registered Button</Link>
      </li>










    </React.Fragment>
  );
};

const UnauthenticatedNavigation = () => {
  return (
    <React.Fragment>
      <li className="navitems">
        <Link to={routes.SIGN_UP_PATH}>Sign Up</Link>
      </li>
      <li className="navitems">
        <Link to={routes.SIGN_IN_PATH}>Sign In</Link>
      </li>
    </React.Fragment>
  );
};

const Navigation = () => {
  return (

    <nav className="navbar navbar-expand-lg navitems">
      <Link className="navbar-brand" to="/">
      <img src="https://i.imgur.com/uRDd2Pw.png" width="30" height="30" alt=""></img>
        Zel Button
        
      </Link>
      <AuthContext.Consumer>
        {({ authUser }) =>
          <nav>
            <ul>
              <li className="navitems">
                <Link to={routes.HOME_PATH}>Home</Link>
              </li>
              {authUser && <AuthenticatedNavigation />}
              {!authUser && <UnauthenticatedNavigation />}
              
            </ul>
          </nav>}
      </AuthContext.Consumer>
    </nav>
  );
};

const AuthContext = React.createContext({ authUser: null });

class AuthProvider extends React.Component {
  state = {
    authUser: null,
  };

  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState(() => ({ authUser }))
        : this.setState(() => ({ authUser: null }));
    });
  }

  render() {
    return (
      <AuthContext.Provider value={{ authUser: this.state.authUser }}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <Router>
          <div>
            <Navigation />
            <Switch>
              <Route exact path="/" component={About} />
              <Route exact path="/welcome" component={About} />
              <Route exact path="/customize" component={Form} />
              <Route exact path="/update" component={UpdateForm} />
              <Route exact path={routes.SIGN_UP_PATH} component={SignUp} />
              <Route exact path={routes.SIGN_IN_PATH} component={SignIn} />
              <Route exact path={routes.SIGN_OUT_PATH} component={SignOut} />
            </Switch>
          </div>
        </Router>
      </AuthProvider>
    );
  }
}

export default App;