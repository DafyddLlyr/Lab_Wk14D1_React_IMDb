import React from 'react';
import './App.css';
import Header from './components/Header'
import FilmList from './containers/FilmList'
import UpcomingButton from './components/UpcomingButton'

function App() {
  return (
    <div id="upcoming-releases">
      <Header/>
      <hr/>
      <FilmList/>
      <hr/>
      <UpcomingButton/>
    </div>
  );
}

export default App;
