import React, { FormEvent, useState } from "react";
import { User } from "./types";

function ParentFour() {
  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    contact: null,
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: name === "contact" ? Number(value) : value, // Convert contact to number if it's being changed
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {     // Here are 3 Approaches and all are correct one so more better approach is 1 and 3rd 
  // const handleSubmit = (e: FormEvent) => {                         // FormEvent will imported above from React
  // const handleSubmit = (e: FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    console.log(user);
    setUser({
      name: "",
    email: "",
    contact: null,
    })
  };
  return (
    <>
      <div>Form Handling with React</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />

        <input
          type="number"
          placeholder="Contact"
          name="contact"
          value={user.contact !== null ? user.contact : ""}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default ParentFour;
