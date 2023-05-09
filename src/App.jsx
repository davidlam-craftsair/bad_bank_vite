import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './navbar';
import About from './about.js';
import Home from './home.js';
import Deposit from './deposit.js';
import Withdraw from './withdraw.js';
import Balance from './balance.js';
import AllData from './alldata.js';
import CreateAccount from './createAccount.js'
import { UserContext } from './context.js';
import Login from './login.js';
import Pay from "./pay.js";
import Transfer from "./transfer.js";
import AccountBalance from './accountBalance.js';

export default function App() {
  const userContext = {
    users: [
      {
        name: "David Lam",
        accountNumber: "1234000000",
        email: "david.lam@mit.edu",
        password: "Architektur123",
        balance: 100,
        accountCurrency: "HKD"
      },
    ]
  };
  return (
    <>
      <div>
        <Router>
          <Navbar />
          <UserContext.Provider value={userContext}>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="createaccount" element={<CreateAccount />}></Route>
              <Route path="login" element={<Login />}></Route>
              <Route path="about" element={<About />}></Route>
              <Route path="deposit" element={<Deposit />}></Route>
              <Route path="withdraw" element={<Withdraw />}></Route>
              <Route path="balance" element={<Balance />}></Route>
              <Route path="alldata" element={<AllData />}></Route>
              <Route path="pay" element={<Pay />}></Route>
              <Route path="transfer" element={<Transfer />}></Route>
              <Route path="accountBalance" element={<AccountBalance />}></Route>
            </Routes>
          </UserContext.Provider>
        </Router >
      </div>

    </>
  )
}

