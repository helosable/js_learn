import React from "react";
import Guess_card from "./Components/Car_card";

let data = await fetch("https://api.npoint.io/a2b70b4c0ded4fe6fe16");
data = await data.json();

console.log(data);
function App() {
  return data.map((el) => (
    <Guess_card
      key={el.id}
      text={el.desc}
      mark={el.car_mark}
      img={el.pic_link}
    />
  ));
}

export default App;
