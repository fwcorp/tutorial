import React from "react";
import Person from "./Person";

function NameList() {
  // USING INDEX FOR KEY IS THE LAST THING TO DO : no filtering, sorting, modifying etc.
  //   const names = ["Bruce", "Clark", "Diana", "Bruce"];
  //   const nameList = names.map((name, index) => (
  //     <h2 key={index}>
  //       {index} {name}
  //     </h2>
  //   ));
  //   return <div>{nameList}</div>;
  //   const persons = [
  //     {
  //       id: 1,
  //       name: "Bruce",
  //       age: 30,
  //       skill: "React",
  //     },
  //     {
  //       id: 2,
  //       name: "Clark",
  //       age: 25,
  //       skill: "Angular",
  //     },
  //     {
  //       id: 3,
  //       name: "Diana",
  //       age: 28,
  //       skill: "Vue",
  //     },
  //   ];
  //   const personList = persons.map((person) => (
  //     <Person key={person.id} person={person} />
  //   ));
  // const personList = [<h2>{persons[0].name}</h2>, <h2>test2</h2>];
  //   return <div>{personList}</div>;
}

export default NameList;
