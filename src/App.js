import React from 'react'
import './App.css'
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPoster from './Components/Rowposter/RowPoster';
import {Action,Originals,Horror} from './urls'




function App() {
  return (
  <div className='App'>
    <NavBar/>
    <Banner/>
    <RowPoster url={Action} title= 'Action' />
    <RowPoster url={Horror} title= 'Horror' isSmall/>
    <RowPoster url={Originals} title='Netflix Orginals' isSmall/>
    
  </div>
  );
}

export default App;
