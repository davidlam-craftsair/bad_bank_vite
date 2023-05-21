import React from 'react';
import { UserContext } from './context.js';
import Card from './card.js';
import bankLogo from './assets/bank_logo.jpg';

export default function Home() {
  const [isAlreadyLogin, setIsAlreadyLogin] = React.useState(false);

  return (
    <>
      <Card
        bgcolor="primary"
        txtcolor="black"
        cardWidth='w-75'
        title="WELCOME TO THE BANK"
        text="For all your banking needs"
        body={<img src={bankLogo} width="100%" />}
      />
    </>
  );
}
