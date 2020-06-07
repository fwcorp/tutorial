import React from "react";

const Hello = () => {
  //   return (
  //     <div>
  //       <h1>Hello Jinhyuk from Hello.js</h1>
  //     </div>
  //   );
  return React.createElement(
    "div",
    { id: "hello", className: "dummyclass" },
    React.createElement("h1", null, "hello jinhyuk")
  );
};

export default Hello;
