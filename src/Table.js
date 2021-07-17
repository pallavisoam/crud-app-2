import React, { useState, useEffect } from "react";
import "./Table.css";
import { db } from "./Firebase";
import firebase from "firebase";
import { Button, Tag } from "antd";
import { RiUserFill } from "react-icons/ri";

const Table = () => {
  const [patent, setPatent] = useState([]);
  useEffect(() => {
    db.collection("users")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPatent(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  return (
    <>
      <div className="MainDiv">
        {patent.map(({ id, data: { name, email, timestamp, rehab, sex } }) => {
          return (
            <div
              className="table"
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                border: "1px solid black",
                width: "100%",
                height: "50px",
                margin: "1em auto",
                borderRadius: "10px",
                border: "none",
                backgroundColor: "#fcfcfc",
                padding: "0.5em 0em",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                alt=".."
              />
              <p>{name}</p>
              <p>{sex}</p>
              <p>
                {timestamp.toDate().toLocaleDateString("nl", {
                  year: "2-digit",
                  month: "2-digit",
                  day: "2-digit",
                })}
              </p>
              <div>
                <Button className="button_rehab1">{rehab.rehab}</Button>
                <Button className="button_rehab2">{rehab.rehab}</Button>
              </div>
              <RiUserFill
                style={{
                  color: "rgb(66, 133, 244)",
                  fontSize: "20px",
                  marginRight: "-4.5em",
                  marginTop: "0.2em",
                }}
              />
              <p>View Profile</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Table;
