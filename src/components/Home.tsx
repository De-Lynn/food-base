import Categories from "./Categories";
import LatestRecipes from "./LatestRecipes";
import PopularRecipes from "./PopularRecipes";
import RandomRecipe from "./RandomRecipe";
import banner from '../img/banner3.jpg'

function Home() {
    return (
        <div>
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
        </div>
    )
}

export default Home