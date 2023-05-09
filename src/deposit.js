import React from 'react';

export default function Deposit() {
  const ctx = React.useContext(UserContext);

  return (
    <>
      <h1>Deposit</h1>
      <p>You have balance of {ctx["balance"]}</p>
    </>
  );
}
