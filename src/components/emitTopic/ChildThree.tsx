import React from "react";

type ChildThreeEmit = {
  sendNumber: (numberProps: number) => void; // sendNumber is a function and doesn't return anything so if function is not returning any thing then we use void
  sendString: (stringProps: string) => void;
  sendObject: (objectProps: ObjectType) => void;
  sendArrayString:(arrayStringProps: string[]) => void;
  sendArrayAny:(arrayAnyProps: any[])=> void;
  sendAlertFun : (handleAlert: () => void) => void; 
  sendReturnAlertFun: (handleReturnAlert: () => string) => void;
};

type ObjectType = {
    name: string;
    contact: number;
    alive: boolean;
  };
// function ChildThree({sendNumber}) {

// const ChildThree = ({ sendNumber }: ChildThreeProps) => {     // This will also work
const ChildThree: React.FC<ChildThreeEmit> = ({
  sendNumber,
  sendString,
  sendObject,
  sendArrayString,
  sendArrayAny,
  sendAlertFun,
  sendReturnAlertFun
}) => {
  
  const numberProps = 47;
  const stringProps = "Hello by Parent";
  const booleanProps = true;

  const objectProps: ObjectType = {
    name: "Virat",
    contact: 9527180011,
    alive: true,
  };

  const arrayStringProps = ["one", "two", "three"];
  const arrayAnyProps: any[] = ["Hello", 23, true]; // Recommended Approach: const arrayAnyProps: (string | number | boolean)[] = ["Hello", 23, true];

  const handleAlert=()=>{
      alert("Hello by Child")
  }

  const handleReturnAlert=()=>{
    alert("Return Hello by Child 2")
    return "Alert function executed";
}

  const handleSend = () => {
    sendNumber(numberProps);
    sendString(stringProps);
    sendObject(objectProps);
    sendArrayString(arrayStringProps);
    sendArrayAny(arrayAnyProps)
    sendAlertFun(handleAlert)
    sendReturnAlertFun(handleReturnAlert)
  };

  return (
    <>
      <div>ChildThree</div>
      <button onClick={handleSend}>Send To Parent</button>
    </>
  );
};

export default ChildThree;
