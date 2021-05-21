import React, { useState } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import '../App.css'
import Login from "./login";

const SignUp = props => {
    // login template. will update for signup
    // const initialUserState = {
    //     name: "",
    //     password: "",
    //     id: ""
    //   };
    
    //   const [user, setUser] = useState(initialUserState);
    
    //   const handleInputChange = event => {
    //     const { name, value } = event.target;
    //     setUser({ ...user, [name]: value });
    //   };
    
    //   const signup = () => {
    //     props.signup(user) // async function from App.js
    //     props.history.push('/login'); //update url to / route
    //   }
    const signup = () => {
        //
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
                    // required
                    // value={user.name}
                    // onChange={handleInputChange}
                    name="name"
                />
                </div>

                <div className="form-group">
                <label htmlFor="user">Email</label>
                <input
                    type="text"
                    className="form-control"
                    id="email"
                    // required
                    // value={user.email}
                    // onChange={handleInputChange}
                    name="email"
                />
                </div>

                <div className="form-group">
                <label htmlFor="id">Password</label>
                <input
                    type="text"
                    className="form-control"
                    id="id"
                    // required
                    // value={user.id}
                    // onChange={handleInputChange}
                    name="id"
                />
                </div>

                <button onClick={signup} className="btn btn-success">
                    Sign Up
                </button>
                <div>
                <Link to={"/login"} className="App-link">
                        Login!
                </Link>
                </div>
            </div>
            {/* <div>
                <Switch>
                    <Route 
                        exact path="/login"
                        render={(props) => (
                        <Login {...props} signup={signup} />
                        )}
                    />
                </Switch>
            </div> */}
        </div>
    );
}

export default SignUp;