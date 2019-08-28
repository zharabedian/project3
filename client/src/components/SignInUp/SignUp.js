import React from 'react';
import { withRouter } from 'react-router-dom';
import { State } from 'react-powerplug';
import { auth } from '../../firebase';
import * as routes from '../../constants/routes';
import "./sign.css"

class SignUp extends React.Component {
  handleSubmit = ({ email, password }) => {
    return auth
      .doCreateUserWithEmailAndPassword(email, password)
      .then(response => {
        console.log('Successful Sign Up', response);
        
        this.props.history.push(routes.HOME_PATH);
      })
      .catch(err => {
        console.log('Failed Sign Up', err);
        throw err;
      });
  };

  render() {
    return (
      <div className="signWrapper">
      <State initial={{ email: '', password: '', error: null }}>
        {({ state, setState }) => {
          const onEmailChange = e => {
            setState({ email: e.target.value });
          };
          const onPasswordChange = e => {
            setState({ password: e.target.value });
          };
          const onSubmit = e => {
            e.preventDefault();
            this.handleSubmit({
              email: state.email,
              password: state.password,
              
            }).catch(err => {
              setState({ error: err.message });
            });
          };

          return (


            <div>
              <h1 className="signHeader">Sign Up</h1>
              <form onSubmit={onSubmit}>
                {state.error &&
                  <p style={{ color: 'red' }}>
                    {state.error}
                  </p>}

                {/* Email */}
                <div className="form-group row">
                  <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control"  name="email" value={state.email} onChange={onEmailChange}></input>
                  </div>
                </div>

                {/* Password*/}
                <div className="form-group row">
                  <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                  <div className="col-sm-10">
                    <input type="password" className="form-control"  name="password" value={state.password} onChange={onPasswordChange}></input>
                  </div>
                  <button type="submit" className="btn btn-primary">Sign Up</button>
                </div>
              </form>
            </div>


          );
        }}
      </State>
      </div>
    );
  }
}

export default withRouter(SignUp);
