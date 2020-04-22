import React from "react";
import { render } from "react-dom";
import Card from "./components/Card";

const App = () => {
  return (
    <>
      <h1 className="titleCard" onClick={() => {}}>
        TODAY IN SPACE
      </h1>
      <Card />
    </>
  );
};

render(React.createElement(App), document.getElementById("root"));
