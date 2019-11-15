import React from "react";
import Header from "./components/Header.js";
import Nav from "./components/Nav";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import LocationList from "./components/LocationsList";
import { Route } from 'react-router-dom'
import SearchForm from "./components/SearchForm";

export default function App() {

  return (
    <main>
      <Header />
      <Nav />
        <Route exact path='/' component={WelcomePage} />
        <SearchForm />
        <Route path='/characters' component={CharacterList}/>
        <Route path='/location' component={LocationList}/>
    </main>
  );
}
