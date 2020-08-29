import React from "react";
import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [info, setInfo] = useState([]);
  const handleSubmit = (e) => {
    let newInfo = [{ name: name, email: email }];
    e.preventDefault();
    setInfo(newInfo);
    console.log(info);
  };
  return (
    <div>
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <br />
        <input type="text" onChange={(e) => setEmail(e.target.value)} />
        <br />
        <br />
        <button>Save</button>
      </form>
      {info.map((li) => (
        <p>
          {li.name} || {li.email}
        </p>
      ))}
    </div>
  );
};

export default Form;
