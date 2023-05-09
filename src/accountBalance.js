import React from 'react';
import Card from './card.js';
import { UserContext } from './context.js';

export default function AccountBalance() {
  const userContext = React.useContext(UserContext);
  const title = `Your account ${userContext.accountNumber}`;
  return (
    <>
      <Card
        title={title}
        text="Details"
        body={
          (
            <>
              <label>Account:</label>
              <p>{userContext.accountNumber}</p>
            </>
          )
        }
      ></Card>
    </>
  )
}
