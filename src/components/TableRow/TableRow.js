import React from "react";

function TableRow(props) {
  return (
    <tr>
      <th scope="row">
        <img src={props.picture} alt={props.name}></img>
      </th>
      <td>
        {props.first} {props.last}
      </td>
      <td>{props.email}</td>
      <td>{props.phone}</td>
      <td>{props.dob.date}</td>
    </tr>
  );
}
export default TableRow;
