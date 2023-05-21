import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './navbar';
import Home from './home.js';
import Deposit from './deposit.js';
import Withdraw from './withdraw.js';
import AllData from './alldata.js';
import CreateAccount from './createAccount.js'
import { UserContext } from './context.js';
import usersJson from './assets/users.json';

const users = usersJson.users

export default function App() {
  return (
    <>
      <div>
        <Router>
          <Navbar />
          <UserContext.Provider value={{ users: users }}>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="createaccount" element={<CreateAccount />}></Route>
              <Route path="deposit" element={<Deposit />}></Route>
              <Route path="withdraw" element={<Withdraw />}></Route>
              <Route path="alldata" element={<AllData />}></Route>
            </Routes>
          </UserContext.Provider>
        </Router >
      </div>

    </>
  )
}

