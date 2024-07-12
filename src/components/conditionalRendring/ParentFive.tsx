import React, { useState } from "react";


function ParentFive() {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const handleLogout=():void=>{             // Using :void to function because it is not returning.
      setIsLogin(false);
  }

  const handleLogin=():void=>{
    setIsLogin(true);
}
  return (
    <>
      <div>Conditional Rendering</div>
      {isLogin ? (
        <div>
          <h2>Welcome, You are Login</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>Welcome, To Dashboard please login</h2>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </>
  );
}

export default ParentFive;
