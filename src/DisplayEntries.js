import React from "react";

function DisplayEntries({ entries }) {
  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody>
        {entries.map((entry, i) => (
          <tr key={`${entry.firstName} ${entry.lastName}`}>
            <td>{entry.firstName}</td>
            <td>{entry.lastName}</td>
            <td>{entry.phoneNumber}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DisplayEntries;
