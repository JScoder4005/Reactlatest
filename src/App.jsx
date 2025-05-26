<<<<<<< HEAD
import React from "react";
import Search from "./components/Search";
import { useState } from "react";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
=======
import React, { useState } from 'react';
import Search from './components/Search';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
>>>>>>> 2058a9ed8b707f79d78b3fc9ad80961fb8fb1073
  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
<<<<<<< HEAD
          <img src="../src/assets/hero.png" alt="Hero Banner" />
=======
          <img src="./hero.png" alt="Hero Banner" />
>>>>>>> 2058a9ed8b707f79d78b3fc9ad80961fb8fb1073
          <h1>
            Find <span className="text-gradient">Movies</span> You'll Enjoy
            without the Hassle
          </h1>
        </header>
<<<<<<< HEAD
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
=======

        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <h1 className="text-white ">{searchTerm}</h1>
>>>>>>> 2058a9ed8b707f79d78b3fc9ad80961fb8fb1073
      </div>
    </main>
  );
};

export default App;
