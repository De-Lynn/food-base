import React from 'react';
//import logo from './logo.svg';
//import './App.scss';
import axios from 'axios';
import banner from './img/banner3.jpg'
import Header from './components/Header'
import Categories from './components/Categories';
import RandomRecipe from './components/RandomRecipe';
import Footer from './components/Footer';
import LatestRecipes from './components/LatestRecipes';
import PopularRecipes from './components/PopularRecipes';

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
    // main page
    <div>

      {/* header */}
      <Header />

      {/* banner  */}
      <img src={banner} alt="" width={'100%'}/>

      {/* categories carousel */}
      <Categories />

      {/* random recipe */}
      <RandomRecipe />

      {/* latest recipes */}
      <LatestRecipes />

      {/* vote */}
      <div>

      </div>

      {/* popular recipes */}
      <PopularRecipes />

      {/* footer */}
      <Footer />
      
    </div>
  );
}

export default App;
