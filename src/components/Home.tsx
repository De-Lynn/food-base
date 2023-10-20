import Categories from "./Categories";
import LatestRecipes from "./LatestRecipes";
import PopularRecipes from "./PopularRecipes";
import RandomRecipe from "./RandomRecipe";
import banner from '../img/banner3.jpg'
import './Home.scss'

function Home() {
    return (
        <div className="home-page">
            {/* banner  */}
            <div className="banner">
                <img src={banner} alt="banner" width={'100%'}/>
            </div>
            
            <div className="home _container">
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
            </div>
            
        </div>
    )
}

export default Home