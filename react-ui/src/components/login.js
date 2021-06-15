import React, { useState } from "react"
import { Switch, Route, Link } from 'react-router-dom'
import '../App.css'
import SignUp from "./signup";


const Login = props => {

  const initialUserState = {
    name: "",
    id: "",
  };

  const [user, setUser] = useState(initialUserState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const login = () => {
    props.login(user) // async function from App.js
    props.history.push('/home'); //update url to /home route
  }

  async function signup(user = null) {
    // setUser(user);
    props.history.push('/signup');
  }

  return (
    <div className="App-header">
      <div>
        <div className="form-group">
          <label htmlFor="user">Username</label>
          <input
            type="text"
            className="form-control"
            id="name"
            required
            value={user.name}
            onChange={handleInputChange}
            name="name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="id">Password</label>
          <input
            type="password"
            className="form-control"
            id="id"
            required
            value={user.id}
            onChange={handleInputChange}
            name="id"
          />
        </div>

        <button onClick={login} className="btn btn-success">
          Login
        </button>
        <div>
        <Link to={"/signup"} className="App-link">
                Don't have an account? Signup!
        </Link>
        </div>
      </div>
      <div>
        <Switch>
            <Route 
                exact path="/signup"
                render={(props) => (
                <SignUp {...props} signup={signup} />
                )}
            />
        </Switch>
      </div>
    </div>
  );
};

export default Login;