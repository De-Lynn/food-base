import Categories from "./Categories";
import LatestRecipes from "./LatestRecipes";
import PopularRecipes from "./PopularRecipes";
import RandomRecipe from "./RandomRecipe";
import banner from '../img/banner3.jpg'

function Home() {
    return (
        <div className="home-page">
            {/* banner  */}
            <img src={banner} alt="banner" width={'100%'}/>

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