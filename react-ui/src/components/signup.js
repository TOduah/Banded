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
    const [userError, setUserError] = useState(null);
    const [emailError, setEmailError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
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
        if (user.length < 3){
            setUserError('username must be 3 or more characters long');
        }
        if (password.length < 3){
            setPasswordError('password must be 3 or more characters long');
        }
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(email)){
            setEmailError('not a valid email');
        }

        else{
            const user_data = {
                username: user,
                email: email,
                password: password
            }
            axios.post('https://bander.live/users/add', user_data)
                .then(res => console.log(res.data))
                .catch(err => {console.log(err.response)});
            
            props.history.push('/login');
        }
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
                <div style={{"color":'red'}}>{userError}</div>
                </div>
                

                <div className="form-group">
                <label htmlFor="user">Email</label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    required
                    // value={user.email}
                    onChange={e => setEmail(e.target.value)}
                    name="email"
                />
                <div style={{"color":'red'}}>{emailError}</div>
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
                <div style={{"color":'red'}}>{passwordError}</div>
                </div>
                
                <div className="text-center mt-3">
                    <button onClick={signup} className="btn btn-success">
                        Sign Up
                    </button>
                </div>
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