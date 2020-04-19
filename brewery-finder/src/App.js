import React, { useState, useEffect } from 'react';
import { BreweryContext } from './contexts/BreweryContext';
import axios from 'axios';

import BreweryList from './components/BreweryList';
import SearchForm from './components/SearchForm';

import './App.css';
import { Header } from './components/Styles';


const App = () => {

  const [ breweries, setBreweries ] = useState([])
  
  useEffect(() => {
    axios
      .get(`https://api.openbrewerydb.org/breweries`)
      .then(response => {
        const breweries = response.data.results
        setBreweries(breweries)
        console.log(breweries);
      })
      .catch(error => {
        console.log('error loading data', error);
      })
  }, []);


  return (
    <BreweryContext.Provider value={{breweries, setBreweries}}>
      <Header className="App">
        <h1>Northwest Breweries</h1>
        <h3>Find your next stop</h3>
        <SearchForm />
        <BreweryList />
      </Header>
    </BreweryContext.Provider>
  );
}


export default App;