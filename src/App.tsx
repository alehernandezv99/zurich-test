import React, {useState, useEffect ,Suspense, lazy} from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter, Routes, Route} from "react-router-dom";

import { Navbar } from './components/Navbar';

const  Characters  = lazy(() => import("./components/Characters"))
const CharacterDetails = lazy(() => import("./components/CharacterDetails"));



function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    
    fetch("https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json")
    .then(response => {
        return response.json();
    })
    .then(json => {
        console.log(json);
        setData(json.Brastlewark);
    })
    .catch(e => {
        console.log(e);
    })
}, [])

  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Navbar/>
        <Routes>

          <Route path='/' element={<Characters data={data}/>}/>

          <Route path='/character/:id' element={<CharacterDetails data={data}/>}/>
        </Routes>
      </BrowserRouter>
      </Suspense>
     
    </div>
  );
}

export default App;
