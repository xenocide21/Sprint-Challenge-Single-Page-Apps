import React from "react";
import Header from "./components/Header.js";
import Nav from "./components/Nav";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import LocationsList from "./components/LocationsList";
import { Route } from 'react-router-dom'
import './app.css'

export default function App() {

  return (
    <main>
      <Header />
      <Nav />
        <Route exact path='/' component={WelcomePage} />
        <Route path='/characters' component={CharacterList}/>
        <Route path='/location' component={LocationsList}/>
    </main>
  );
}
