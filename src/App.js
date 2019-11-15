import React from "react";
import Header from "./components/Header.js";
import Nav from "./components/Nav";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import { Route } from 'react-router-dom'

export default function App() {

  return (
    <main>
      <Header />
      <Nav />
      <Route exact path='/' component={WelcomePage} />
      <div>
          <Route path='/characters' component={CharacterList}/>
      </div>
    </main>
  );
}
