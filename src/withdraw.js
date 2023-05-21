import React from 'react';
import Card from './card.js';
import * as util from "./util.js";
import { UserContext, CurrentUser } from './context.js';

export default function Withdraw() {
  const ctx = React.useContext(UserContext);
  const user = ctx.users.filter(x => x.name === CurrentUser)[0];
  const [currentBalanceToDisplay, setCurrentBalanceToDisplay] = React.useState(user.currentBalance);
  const [withdrawAmtInput, setWithdrawAmtInput] = React.useState("");
  const [isWithdrawSubmitButtonDisabled, setIsWithdrawSubmitButtonDisabled] = React.useState(true); // disabled is true by default 

  function validateWithdrawAmt(val) {
    console.log("not implemented")
    if (val <= 0) {
      return { res: false, msg: "withdrawal amount is less than 0" };
    }

    else if (user.currentBalance - val < 0) {
      return { res: false, msg: `The withdrawal amount ${val} overdraft your balance` };
    }
    return { res: true, msg: `Withdraw ${val} successfully` };
  }

  function onWithdrawInputChange(e) {
    const val = e.currentTarget.value;
    if (val.length === 0) {
      setIsWithdrawSubmitButtonDisabled(true);
    }
    else {
      setIsWithdrawSubmitButtonDisabled(false);

    }

    if (!util.isStringNumber(val[val.length - 1])) { // get the last character of the input
      if (val.length == 1) {
        alert("Only numbers are allowed to enter");
        return;
      }
    }

    setWithdrawAmtInput(val);
  }


  function handleWithdrawInputSubmit(e) {
    e.preventDefault();
    console.log("withdrawal amount = " + withdrawAmtInput);
    const withdrawAmt = util.convertFromStringToNumber(withdrawAmtInput);
    const validation = validateWithdrawAmt(withdrawAmt);
    if (validation.res) {
      //update the context
      user.currentBalance -= withdrawAmt;
      //update the balance dispalyed in withdraw card
      setCurrentBalanceToDisplay(user.currentBalance);
      console.log("current balance = " + user.currentBalance);
      setWithdrawAmtInput("");
    }
    alert(validation.msg);
  }


  return (
    <>
      <Card title="Withdrawal"
        bgcolor="primary"
        txtcolor="black"
        body={
          <div className="border border-secondary-subtle rounded-1 ">
            <div className="d-flex mx-2 my-2 justify-content-between">
              <p>Balance</p>
              <p>${currentBalanceToDisplay}</p>
            </div>

            <div className="form-group mb-3">
              <div className="mx-2">
                <label className="my-2"
                  htmlFor="depositAmountInputId">
                  Withdraw Amount
                </label>
                <input className="form-control my-2"
                  onChange={onWithdrawInputChange}
                  value={withdrawAmtInput}
                  id="depositAmountInputId"
                  placeholder="Please input withdrawal amount"
                />
                <button className="btn btn-primary my-2 mb-3" type="submit"
                  disabled={isWithdrawSubmitButtonDisabled}
                  onClick={handleWithdrawInputSubmit}
                >Withdraw</button>

              </div>
            </div>
          </div>
        }
      >
      </Card>

    </>
  )
}
