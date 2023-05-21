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
import usersJson from './Users.json';

const users = usersJson.users
console.log(JSON.stringify(users));
// const users = [
//   { name: "David Lam", email: "david.lam@gmail.com", password: "123Pass78", currentBalance: 1432. },
//   { name: "Jane Doe", email: "david.lam@gmail.com", password: "12345678", currentBalance: 1432. },
//   { name: "Peter Parker", email: "david.lam@gmail.com", password: "12345678", currentBalance: 1432. },
//   { name: "John Smith", email: "david.lam@gmail.com", password: "12345678", currentBalance: 1432. },
// ]
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

