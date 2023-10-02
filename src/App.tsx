import React from 'react';
import axios from 'axios';
import Header from './components/Header'
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RecipePage from './components/RecipePage';
import Home from './components/Home';

function App() {

  const appId = '3b872ec0'
  const appKey = '596e8d06586cc0c44bddfde37916282f'
  let config = {
    url: `https://api.edamam.com/api/recipes/v2?app_id=${appId}&app_key=${appKey}&type=public&q=noodle`,
    method: "get",
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Credentials': 'true'
    }
  };
  // let recipes = axios.request(config).then(response => response.data)
  // console.log(recipes)
  return (
    <BrowserRouter>
      {/* main page */}
      <div className='wrapper'>
        {/* header */}
        <Header />

        {/* body */}
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/recipes/:recipeId'} element={<RecipePage />} />
        </Routes>

        {/* footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
