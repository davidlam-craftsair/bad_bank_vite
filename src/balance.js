import React from 'react';
import { UserContext } from './context.js';

export default function Balance() {
  const ctx = React.useContext(UserContext);
  return (
    <>
      <h1>Balance</h1>
      <p>You have balance {JSON.stringify(ctx)}</p>
    </>
  );

}
