import React, { ReactNode } from "react";

interface PropsType {
  propsNumber: number;
  propsString?: string; // optional Type ?
  propsBoolean: boolean;
  propsObject: {
    name: string;
    contact: number;
    alive: boolean;
  };
  propsArrayString: string[];
  propsArrayAny: any[];
  propsChildTwoComponent: React.ReactNode       // React.ReactNode is a type for component.
  propsUnion: "Complete" | "Incomplete" | "Error"   // Union Type is any of this are not then Ts will show error
}

function ChildOne(props: PropsType) {

  return (
    <>
      <h2>
        <b>ChildOne Component</b>
      </h2>
      <ul>
        <li> Number:{props.propsNumber}</li>
        <li> String:{props.propsString}</li>
        <li> Boolean:{props.propsBoolean}</li>
        <li> Object Name:{props.propsObject.name}</li>
        <li> Object Contact:{props.propsObject.contact}</li>
        <li> Object Alive:{props.propsObject.alive}</li>
      </ul>

      {props.propsArrayString.map((item, index) => (
        <ul key={index}>
          <li>{item}</li>
        </ul>
      ))}

      {props.propsArrayAny.map((item, index) => (
        <ul key={index}>
          <li>{item}</li>
        </ul>
      ))}
      <div>  
      {props.propsChildTwoComponent}       {/* USING CHILDTWO COMPONENT WHICH IS PASSED BY PROPS */}   
      </div>

      <h3>Status: {props.propsUnion}</h3>     
    </>
  );
}

export default ChildOne;

// NOTE- Using interface for defining props in your React components is a good practice and is perfectly fine.
// However, there is no strict rule that you must use interface over type or vice versa for defining component
// props. Both interface and type have their own advantages, and the choice can come down to personal or team
// preference.
