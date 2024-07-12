import React, { useState } from "react";
// import { ObjectType } from 'typescript';
import ChildThree from "./ChildThree";

type ObjectType = {   // When recives and data through props we also have to write its type or import it other wise it will show type error.
  name: string;
  contact: number;
  alive: boolean;
};

function ParentTwo() {
  const [num, setNum] = useState<number>();
  const [str, setStr] = useState<string>();
  // const [obj, setObj] = useState<ObjectType>(); // Define the type of obj explicitly
  const [obj, setObj] = useState<ObjectType | undefined>(); // Use ObjectType or undefined if obj can be undefined
  const [arrStr, setArrStr] = useState<string[]>();
  const [arrAny, setArrAny] = useState<any[]>();
  // const [alertFun, setAlertFun] = useState<() => void>(); // State to store alert function
  // const [returnAlertFun, setReturnAlertFun] = useState<() => string>(); // State for the return alert function

  const handleNum = (numData: number) => {
    setNum(numData);
  };
  const handleStr = (strData: string) => {
    setStr(strData);
  };

  const handleObj = (objData: ObjectType) => {
    setObj(objData);
    // setObj(objData as ObjectType)    // This will also work fine
  };

  const handleArrStr = (arrStrData: string[]) => {
    setArrStr(arrStrData);
  };

  const handleArrAny=(arrAnyData: any[])=>{
    setArrAny(arrAnyData)
  }

  const handleAlertFunction=(handleAlert: () => void)=>{
    handleAlert()
    // setAlertFun(() => handleAlert); // Store the alert function in state
  }

  const handleReturnAlertFunction=(handleReturnAlert: () => string)=>{
    handleReturnAlert()
    // setReturnAlertFun(() => handleReturnAlert); // Store the return alert function in state
  }
  return (
    <>
      <div>ParentTwo</div>
      <ChildThree
        sendNumber={handleNum}
        sendString={handleStr}
        sendObject={handleObj}
        sendArrayString={handleArrStr}
        sendArrayAny={handleArrAny}
        sendAlertFun={handleAlertFunction}
        sendReturnAlertFun={handleReturnAlertFunction}

      />
      <ol>
        <li>Number: {num}</li>
        <li>String: {str}</li>
        <li>Object: {obj && obj.name}</li>
        <li>Array String: {arrStr && arrStr.join(", ")}</li>
        <li>Array Any: {arrAny && arrAny.join(", ")}</li>
      </ol>
      {/* <button onClick={() => alertFun && alertFun()}>Trigger Alert</button> Button to trigger the alert */}
      {/* <button onClick={() => returnAlertFun && alert(returnAlertFun())}>
        Trigger Return Alert
      </button> */}
    </>
  );
}

export default ParentTwo;
