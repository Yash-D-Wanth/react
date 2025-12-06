import React, { Component } from "react";
import Components from "./Components";
export class List extends Component {
  render() {
    const characters = [
      { name: "jesse pinkman", age: 25, series: "breaking bad" },
      { name: "Hopper", age: 54, series: "stranger things" },
      { name: "jon snow", age: 24, series: "game of thrones" },
    ];
    return (
      <>
      {characters.map((character)=>(
        <Components name={character.name} age={character.age} series={character.series} key={character.name}/>
      ))}</>
    );
  }
}

export default List;
