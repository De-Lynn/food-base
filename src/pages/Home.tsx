import Categories from "../components/Categories"
import LatestRecipes from "../components/LatestRecipes"
import PopularRecipes from "../components/PopularRecipes"
import RandomRecipe from "../components/RandomRecipe"
import './Home.scss'

const Home = () => {
    return (
        <div className="home-page _container">
            {/* banner  */}
            {/* <div className="banner">
                <img src={banner} alt="banner" width={'100%'}/>
            </div> */}
            
            <div className="home">
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