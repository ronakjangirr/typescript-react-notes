import React, { useState } from "react";

interface UserInterface {
  name: string;
  contact: number;
}

function ParentThree() {
  const [count, setCount] = useState<number>(0);
  const [user, setUser] = useState<UserInterface>({
    name: "Virat",
    contact: +91 - 9527180011,
  });
  const [message, setMessage] = useState<string>();

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  const handleChange = () => {
    setUser({
      name: "Rahul",
      contact: 100,
    });
  };

  // Function with parameters-

  const handleMessage=(data:string)=>{
    setMessage(data);
  }
  return (
    <>
      <div>ParentThree</div>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <h2>Name: {user.name}</h2>
      <h2>Contact: {user.contact}</h2>

      <button onClick={handleChange}>Change User Details</button>
      <br/>
      <h2>Topic Function with parameters- Whats the message : {message}</h2>
      <button onClick={()=>handleMessage("LIKE")}>LIKE</button>
      <button onClick={()=>handleMessage("COMMENT")}>COMMENT</button>
      <button onClick={()=>handleMessage("SUBSCRIBE")}>SUBSCRIBE</button>

      
    </>
  );
}

export default ParentThree;
