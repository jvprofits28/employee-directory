import React from "react";

export default function Table(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Picture</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Dob</th>
        </tr>
      </thead>
      <tbody>{props.children}</tbody>
    </table>
  );
}
