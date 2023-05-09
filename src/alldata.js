import React from 'react';
import { UserContext } from './context.js';

export default function AllData() {
  const ctx = React.useContext(UserContext);
  return (
    <>
      <h1>All Data</h1>
      <p>{JSON.stringify(ctx)}</p>
    </>
  )
}
