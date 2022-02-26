import "./App.css";
import React from "react";
import Header from "./components/Header";
import TinderCards from "./components/TinderCards";
import SwipeButtons from "./components/SwipeButtons";

function App() {
  return (
    <div className="app">
      {/* header */}
      <Header />
      {/* tindercard */}
      <TinderCards />
      {/* swipe button */}
      <SwipeButtons />
    </div>
  );
}

export default App;

//Backend -- MongoDB(Database)  --Node JS(Backend JavaScript FrameWork) ---Express JS(Server Side) -- Moongose(To connect MongoDB) --Heroku(to host backend)

//working of backend
//Creating a node js application
//create a express server
//express connect to mongoDB to grab all the data(already stored in mongoDB)

//install
//npx create-react-app tinder-clone
//for icons --Material UI
//npm install @mui/material @emotion/react @emotion/styled
//npm install @mui/icons-material
//for tinder card
//npm i react-tinder-card
//go to bACKEND
//to hook our backend install axios which make http request super simple
//npm i axios

//now we created new app on heroku
//changed url in axios

//now install firebase if not already installed
//npm i -g firebase-tools
//to  check version
//firebase -V
//to login
//firebase login
// firebase init
//hosting
//use existing project
//What do you want to use as your public directory? (public) FOR THIS TYPE
//build
//single page application
//yes
//firebase deploy

//if webpage show You're seeing this because you've successfully setup Firebase Hosting. Now it's time to go build something extraordinary!

//then goto firebase.json and replace
//"public": "build"------>"public": "./build",

//then  run
//npm run build
//firebase build
