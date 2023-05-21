import React from 'react';
import Card from './card.js';
import { UserContext } from './context.js';

export default function AllData() {
  // display all users
  const ctx = React.useContext(UserContext);
  const users = ctx.users;

  function getTableBody() {
    // construct every row
    return (
      users.map((u, index) => {
        return (<tr key={u.name}>
          <th scope="row">{index + 1}</th>
          <td>{u.name}</td>
          <td>{u.email}</td>
          <td>{u.password}</td>
        </tr>)
      })
    );
  }

  return (
    <>
      <Card title="Client Accounts Overview"
        bgcolor='primary'
        txtcolor="black"
        cardWidth="w-75"
        body={
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
              </tr>
            </thead>
            <tbody>
              {getTableBody()}
            </tbody>

          </table>

        }
      >

      </Card>
    </>
  );
}
