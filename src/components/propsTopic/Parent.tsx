import React from "react";
import ChildOne from "./ChildOne";
import ChildTwo from "./ChildTwo";

function Parent() {
  // Avoid explicit typing when TypeScript can infer: For simple variables, you can rely on TypeScript's type inference.  // const numberProps:number = 47;
  // const arrayStringProps:string[] = ["one", "two", "three"]
  // const arrayAnyProps:any[] = ["Hello", 23, true]

  // Best Practice: Generally, it’s better to be explicit about types in TypeScript to ensure type safety
  // and maintainability. However, using any should be avoided when possible because it bypasses type checking,
  // which is one of the main advantages of using TypeScript.

  // Use interface or type for objects: Define a separate type or interface for complex objects to make the code
  // more readable and maintainable.
  type ObjectType = {
    name: string;
    contact: number;
    alive: boolean;
  };

  const numberProps = 47;
  const stringProps = "Hello by Parent";
  const booleanProps = true;
  const objectProps: ObjectType = {
    name: "Virat",
    contact: 9527180011,
    alive: true,
  };

  const arrayStringProps = ["one", "two", "three"];
  const arrayAnyProps: any[] = ["Hello", 23, true];   // Recommended Approach: const arrayAnyProps: (string | number | boolean)[] = ["Hello", 23, true];

  return (
    <>
      <h2>Parent</h2>
      <ChildOne
        propsNumber={numberProps}
        propsString={stringProps}
        propsBoolean={booleanProps}
        propsObject={objectProps}
        propsArrayString={arrayStringProps}
        propsArrayAny={arrayAnyProps}
        propsChildTwoComponent={<ChildTwo/>}            // Passing component
        propsUnion={"Complete"}

      />
    </>
  );
}

export default Parent;
