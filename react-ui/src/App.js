import trumpet from './images/trumpet.svg';
import bass_drum from './images/bass_drum.svg';
import guitar from './images/guitar.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Switch, Route, Link } from 'react-router-dom'
import Login from './components/login'
import SignUp from './components/signup'
import User from './components/user'
import AddProfile from './components/add-profile'
import Home from './components/home'

// import React, { Component } from 'react'

 

function App() {
    const [user, setUser] = React.useState(null);

    async function login(user = null) {
      setUser(user);
    }
    async function logout(){
      setUser(null);
    }

    return (

      <div className="App">  
      {/* {setTimeout(() => this.plusDivs(), 4000)} */}
      <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark" expand="lg">
              <div class="row">
              <a href="/" className="navbar-brand">
                Bander
              </a>
              </div>
              <div className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={"/home"} className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item" >
                  { user ? (
                    <a onClick={logout} className="nav-link" style={{cursor:'pointer'}}>
                      Logout {user.name}
                    </a>
                  ) : (            
                  <Link to={"/login"} className="nav-link">
                    Login
                  </Link>
                  )}

                </li>
              </div>
            </nav>
            <div>
              <Switch>
                <Route exact path={["/home"]} component={Home} />
                <Route 
                  path="/home/:id/userprofile"
                  render={(props) => (
                    <AddProfile {...props} user={user} />
                  )}
                />
                <Route 
                  path="/users/:id"
                  render={(props) => (
                    <User {...props} user={user} />
                  )}
                />
                <Route 
                  path="/login"
                  render={(props) => (
                    <Login {...props} login={login} />
                  )}
                />
              </Switch>
            </div>
          </div>

        <header className="App-header" >
          <div>
            <p>Bander</p>
          </div>
          <div id="Fader">
            <img src={trumpet} className="App-logo" alt="logo" />
            <img src={bass_drum} className="App-logo" alt="logo" />
            <img src={guitar} className="App-logo" alt="logo" />
                {/* {setTimeout(() => this.plusDivs(), 4000)} */}
                {/* <button onClick={() => this.plusDivs(1)}>Next</button> */}
          </div>
        </header>
      </div>

    );
  }


export default App;
