import React from 'react';
import './App.css';
import Product from './Product';
import { Data } from './model/data';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { Reset } from 'styled-reset'

let data:Data = [{
  id:"1",
  title:"RING 'METAL DROP' - GLD",
  slug:"product01",
  price:"140,00",
  category:"ring",
  detail:"Bague 'METAL DROP' Composition: unisexe acier inoxydable 304 plaqué or 18k Taille S, M, L, XL",
  img:"./img/1.JPG",
  img2:"./img/1-2.PNG"
},
{
  id:"2",
  title:"RING 'METAL DROP' - PAL",
  slug:"product02",
  price:"140,00",
  category:"ring",
  detail:"Bague 'METAL DROP' unisexe Composition:acier inoxydable 304 plaqué palladium Taille S, M, L, XL"
, img:"./img/2.JPG"
, img2:"./img/2-2.PNG"
},]



const App:React.FC = () => {
  return (
    <BrowserRouter>
    <Reset />
        <Routes>
          <Route path='/' element={<Home/>} />
          {/* <Route path='/signin' component={Signin} />
          <Route component={NotFound} /> */}
        </Routes>
      </BrowserRouter>

  );
}

export default App;
