import React, { useState } from "react";
import firebase from "firebase";
import { db } from "./Firebase";
import Table from "./Table";
import SiderMenu from "./Sider";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleForm = (e) => {
    e.preventDefault();

    db.collection("users").add({
      name,
      email,
      timestamp: firebase.firestore.Timestamp.fromDate(new Date()),
    });
    setName("");
    setEmail("");
  };

  return (
    <div className="App">
      <SiderMenu />
    </div>
  );
}

export default App;
