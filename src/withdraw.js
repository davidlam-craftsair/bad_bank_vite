import React from 'react';
import { UserContext } from './context.js';

export default function Withdraw() {
  const ctx = React.useContext(UserContext);

  return (
    <>
      <h1>Withdraw</h1>
      <p>{JSON.stringify(ctx)}</p>

    </>
  )
}
