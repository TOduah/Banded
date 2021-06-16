import React, { useState } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import '../App.css'
import Login from "./login";
import axios from 'axios'

const SignUp = props => {
    const initialUserState = {
        name: "",
        password: "",
        id: ""
      };
    const [user, setUser] = useState(initialUserState); //default value empty string
    const [email, setEmail] = useState(initialUserState);
    const [password, setPassword] = useState(initialUserState);
    //  will update for signup
    
    
    //   const [user, setUser] = useState(initialUserState);
    
    //   const handleInputChange = event => {
    //     const { name, value } = event.target;
    //     setUser({ ...user, [name]: value });
    //   };
    
    //   const signup = () => {
    //     props.signup(user) // async function from App.js
    //     props.history.push('/login'); //update url to / route
    //   }
    const signup = async (e) => {
        //
        e.preventDefault();
        // try {
        //     const response = await fetch('/users/add', {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json"
        //         },
        //         body: JSON.stringify({
        //             user,
        //             email,
        //             password
        //         })
        //     });
        // } catch (error) {
        //     console.log(error.message);
        // }

        const user_data = {
            username: user,
            email: email,
            password: password
        }
        axios.post('https://bander.live/users/add', user_data)
            .then(res => console.log(res.data));
        
        props.history.push('/login');
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
                    // value={user.name}
                    onChange={e => setUser(e.target.value)}
                    name="name"
                />
                </div>

                <div className="form-group">
                <label htmlFor="user">Email</label>
                <input
                    type="text"
                    className="form-control"
                    id="email"
                    required
                    // value={user.email}
                    onChange={e => setEmail(e.target.value)}
                    name="email"
                />
                </div>

                <div className="form-group">
                <label htmlFor="id">Password</label>
                <input
                    type="text"
                    className="form-control"
                    id="id"
                    required
                    // value={user.id}
                    onChange={e => setPassword(e.target.value)}
                    name="id"
                />
                </div>

                <button onClick={signup} className="btn btn-success">
                    Sign Up
                </button>
                <div>
                <Link to={"/login"} className="App-link">
                        Already have an account? Login!
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