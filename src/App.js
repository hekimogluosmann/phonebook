import React from "react";

import { useState } from "react";
import EntryForm from "./EntryForm";
import DisplayEntries from "./DisplayEntries";

function App() {
  const [entries, setEntries] = useState([]);
  const addEntryToPhoneBook = (entry) => {
    setEntries(
      [...entries, entry].sort((a, b) =>
        a.lastName.toLowerCase() > b.lastName.toLowerCase() ? 1 : -1
      )
    );
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <EntryForm addEntryToPhoneBook={addEntryToPhoneBook} />
      <DisplayEntries entries={entries} />
    </div>
  );
}

export default App;
