import "./App.css";
import React from "react";
import Header from "./components/Header";
import TinderCards from "./components/TinderCards";

function App() {
  return (
    <div className="app">
      {/* header */}
      <Header />
      {/* tindercard */}
      <TinderCards />
      {/* swipe button */}
    </div>
  );
}

export default App;

//Backend -- MongoDB(Database)  --Node JS(Backend JavaScript FrameWork) ---Express JS(Server Side) -- Moongose(To connect MongoDB) --Heroku(to host backend)

//install
//npx create-react-app tinder-clone
//for icons --Material UI
//npm install @mui/material @emotion/react @emotion/styled
//npm install @mui/icons-material
//for tinder card
//npm i react-tinder-card
