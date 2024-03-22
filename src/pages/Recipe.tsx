import { v1 } from "uuid"
import img from '../img/lasagna.jpg'
import clockImg from '../img/clock.svg'
import spoonImg from '../img/spoon.svg'
import '../styles/Recipe.scss'

const Recipe = () => {
    const ingredients = [
        '100 ml milk',
        '30 g butter',
        '3 eggs',
        '1 tbs cocoa',
        '2 tsp backing soda',
        'a pinch of salt',
    ]

    const instructions = `There will be instructions. There will be instructions.
        There will be instructions. There will be instructions. There will be instructions.
        There will be instructions. There will be instructions. There will be instructions.
        There will be instructions. There will be instructions. There will be instructions.
    `

    const recipe = {
        recipe: {
            id: v1(),
            calories: 1964.1280164562957,
            cautions: [ "Gluten", "Wheat", "Sulfites" ],
            co2EmissionsClass: "F",
            cuisineType: [ "mexican" ],
            dietLabels: [ "High-Fiber", "Low-Fat" ],
            dishType: [ "main course" ],
            healthLabels: [
                "Sugar-Conscious", "DASH", "Dairy-Free", "Gluten-Free", "Wheat-Free",
                "Egg-Free", "Peanut-Free", "Tree-Nut-Free", "Soy-Free", "Fish-Free",
                "Shellfish-Free", "Pork-Free", "Red-Meat-Free", "Crustacean-Free",
                "Mustard-Free", "Sesame-Free", "Lupine-Free", "Mollusk-Free", "Alcohol-Free",
                "Sulfite-Free", "Kosher"
            ],
            image: "https://edamam-product-images.s3.amazonaws.com/web-img/d42/d426cef53c83422467a83e819d27f371.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLWVhc3QtMSJHMEUCICybqa4SWwD0pt7RN966aCH%2Bh6UEm8Z0%2B%2Bp9v8Wcn6wkAiEAjkcmbmIDdPR1QBHzDO01OaptclWp3dhh%2FDoMe7RqZiMquQUIcxAAGgwxODcwMTcxNTA5ODYiDFuPlNj4Gf96ZoWjbCqWBZCSP6nqQ1EXlq87s5PazYUDbnTC2tDR4lmytu3YUD8NH7HpgjqzKnY2H1PRadYkysQ4DKDB%2BHZgEMB8pS9EWNPerUX%2BdOUWdoxWSIWsyPzo6LoUImjtS91gOtqxIujMozbVwfN4IsqN0s3MzleTMuVbnZ%2FZWul0M%2FLezVy3AHr5GDF45YMSe01ICxjccTxXSRrLds4InyG6ceTVHNHqURUsjLRTr1dQVvQT6t8hp67vZeHCut7JtSBhod3sKMuGrzpMmN9stTjgdLK3OY1HUja%2BgswZZrK2FiMyGHgBzSaUw4Wli1JFAfLGOGg1gLxpkC2SuRFaR7jIpt4MaxSgdnDq%2BW1spUF1XzAOPtnvvfeabsbkU6gnHNpT80W%2BIDqhheuNfHe%2FoSiksmmaZcNCJnf4dXyNXwnZLGePRmiPX%2F7B7nTX4L1tmZ2NZzUMaF19PAUwWBQlqjl2va6wxXfk1JMk%2BYTo1wDMiHpvcbb%2F0p1uv31Jf8D2B2dNl24qZgchtVZ6PpME%2FpUDq7bn91cy6mMRan3%2BN1PK8bUOqYNZ3VKTEVSpm6%2FhN0oR%2BAyV4UHiFEIVvaha35oyCRzuQ08UDwAczOOQCR2CpHj9VzOPB7ptxjVvEXRDTV65lTLhvNhdMoDwbkltwfvbiHtFqcDONxfefxzQWzye%2FqKtfOAoVPYFB8eo7scOQWvcIOFLI4XvyVtM1EbgPLyrJVNbiwAXfcq%2BuLlUFTRZ5t1rlndwUgPaA3Sp0lug9X5do6%2B8Rc%2BzYyQtCa6i%2BoFpS%2FtF4P2TPDYJgAkeTtKqUFz22uOwCY8iPQX0OSRYaxewwyZLNaJEPxpG%2FAvw9KE7t1zwNHRy%2F7i%2FnmzwA68btz3PuK2VjErIiUGimewlMIek0qoGOrEBYoHFBzVuYab3iJRI3OpqHSpuH4Ywe050mhkjDPEPp6TrJcxodmRBRk5DYHE%2BzlyEm%2FhNpVHXkWNNlLwk7iI96OhSZc2I17HXO9Wqdm%2FgcfDnPvweuHrTyEbcLdKS6uVVDkzYGMkjalChDRCcuv4p25LfiTSp3ODL49YuRRZe01zWxEVNyxdR0MlwJa5vuyUKHC24NALVLrSAlJUBiO2dykEdDB%2Fk7ggnG7z68zs%2FqJe%2B&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231115T110249Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIASXCYXIIFLWSIZKRG%2F20231115%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=7ed856f8478cb369073a5b10ae9412d604e520bca4e7a2a9dd24c3c911b818e1",
            images: { 
                THUMBNAIL: {
                    height: 100,
                    url: "https://edamam-product-images.s3.amazonaws.com/web-img/d42/d426cef53c83422467a83e819d27f371-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLWVhc3QtMSJHMEUCICybqa4SWwD0pt7RN966aCH%2Bh6UEm8Z0%2B%2Bp9v8Wcn6wkAiEAjkcmbmIDdPR1QBHzDO01OaptclWp3dhh%2FDoMe7RqZiMquQUIcxAAGgwxODcwMTcxNTA5ODYiDFuPlNj4Gf96ZoWjbCqWBZCSP6nqQ1EXlq87s5PazYUDbnTC2tDR4lmytu3YUD8NH7HpgjqzKnY2H1PRadYkysQ4DKDB%2BHZgEMB8pS9EWNPerUX%2BdOUWdoxWSIWsyPzo6LoUImjtS91gOtqxIujMozbVwfN4IsqN0s3MzleTMuVbnZ%2FZWul0M%2FLezVy3AHr5GDF45YMSe01ICxjccTxXSRrLds4InyG6ceTVHNHqURUsjLRTr1dQVvQT6t8hp67vZeHCut7JtSBhod3sKMuGrzpMmN9stTjgdLK3OY1HUja%2BgswZZrK2FiMyGHgBzSaUw4Wli1JFAfLGOGg1gLxpkC2SuRFaR7jIpt4MaxSgdnDq%2BW1spUF1XzAOPtnvvfeabsbkU6gnHNpT80W%2BIDqhheuNfHe%2FoSiksmmaZcNCJnf4dXyNXwnZLGePRmiPX%2F7B7nTX4L1tmZ2NZzUMaF19PAUwWBQlqjl2va6wxXfk1JMk%2BYTo1wDMiHpvcbb%2F0p1uv31Jf8D2B2dNl24qZgchtVZ6PpME%2FpUDq7bn91cy6mMRan3%2BN1PK8bUOqYNZ3VKTEVSpm6%2FhN0oR%2BAyV4UHiFEIVvaha35oyCRzuQ08UDwAczOOQCR2CpHj9VzOPB7ptxjVvEXRDTV65lTLhvNhdMoDwbkltwfvbiHtFqcDONxfefxzQWzye%2FqKtfOAoVPYFB8eo7scOQWvcIOFLI4XvyVtM1EbgPLyrJVNbiwAXfcq%2BuLlUFTRZ5t1rlndwUgPaA3Sp0lug9X5do6%2B8Rc%2BzYyQtCa6i%2BoFpS%2FtF4P2TPDYJgAkeTtKqUFz22uOwCY8iPQX0OSRYaxewwyZLNaJEPxpG%2FAvw9KE7t1zwNHRy%2F7i%2FnmzwA68btz3PuK2VjErIiUGimewlMIek0qoGOrEBYoHFBzVuYab3iJRI3OpqHSpuH4Ywe050mhkjDPEPp6TrJcxodmRBRk5DYHE%2BzlyEm%2FhNpVHXkWNNlLwk7iI96OhSZc2I17HXO9Wqdm%2FgcfDnPvweuHrTyEbcLdKS6uVVDkzYGMkjalChDRCcuv4p25LfiTSp3ODL49YuRRZe01zWxEVNyxdR0MlwJa5vuyUKHC24NALVLrSAlJUBiO2dykEdDB%2Fk7ggnG7z68zs%2FqJe%2B&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231115T110249Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFLWSIZKRG%2F20231115%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=cf410a52bd1206403923ef0b7c411e658f941bba8fa084214abc53b74ad3f07c",
                    width: 100,
                }, 
                SMALL: {
                    height: 200,
                    url: "https://edamam-product-images.s3.amazonaws.com/web-img/d42/d426cef53c83422467a83e819d27f371-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLWVhc3QtMSJHMEUCICybqa4SWwD0pt7RN966aCH%2Bh6UEm8Z0%2B%2Bp9v8Wcn6wkAiEAjkcmbmIDdPR1QBHzDO01OaptclWp3dhh%2FDoMe7RqZiMquQUIcxAAGgwxODcwMTcxNTA5ODYiDFuPlNj4Gf96ZoWjbCqWBZCSP6nqQ1EXlq87s5PazYUDbnTC2tDR4lmytu3YUD8NH7HpgjqzKnY2H1PRadYkysQ4DKDB%2BHZgEMB8pS9EWNPerUX%2BdOUWdoxWSIWsyPzo6LoUImjtS91gOtqxIujMozbVwfN4IsqN0s3MzleTMuVbnZ%2FZWul0M%2FLezVy3AHr5GDF45YMSe01ICxjccTxXSRrLds4InyG6ceTVHNHqURUsjLRTr1dQVvQT6t8hp67vZeHCut7JtSBhod3sKMuGrzpMmN9stTjgdLK3OY1HUja%2BgswZZrK2FiMyGHgBzSaUw4Wli1JFAfLGOGg1gLxpkC2SuRFaR7jIpt4MaxSgdnDq%2BW1spUF1XzAOPtnvvfeabsbkU6gnHNpT80W%2BIDqhheuNfHe%2FoSiksmmaZcNCJnf4dXyNXwnZLGePRmiPX%2F7B7nTX4L1tmZ2NZzUMaF19PAUwWBQlqjl2va6wxXfk1JMk%2BYTo1wDMiHpvcbb%2F0p1uv31Jf8D2B2dNl24qZgchtVZ6PpME%2FpUDq7bn91cy6mMRan3%2BN1PK8bUOqYNZ3VKTEVSpm6%2FhN0oR%2BAyV4UHiFEIVvaha35oyCRzuQ08UDwAczOOQCR2CpHj9VzOPB7ptxjVvEXRDTV65lTLhvNhdMoDwbkltwfvbiHtFqcDONxfefxzQWzye%2FqKtfOAoVPYFB8eo7scOQWvcIOFLI4XvyVtM1EbgPLyrJVNbiwAXfcq%2BuLlUFTRZ5t1rlndwUgPaA3Sp0lug9X5do6%2B8Rc%2BzYyQtCa6i%2BoFpS%2FtF4P2TPDYJgAkeTtKqUFz22uOwCY8iPQX0OSRYaxewwyZLNaJEPxpG%2FAvw9KE7t1zwNHRy%2F7i%2FnmzwA68btz3PuK2VjErIiUGimewlMIek0qoGOrEBYoHFBzVuYab3iJRI3OpqHSpuH4Ywe050mhkjDPEPp6TrJcxodmRBRk5DYHE%2BzlyEm%2FhNpVHXkWNNlLwk7iI96OhSZc2I17HXO9Wqdm%2FgcfDnPvweuHrTyEbcLdKS6uVVDkzYGMkjalChDRCcuv4p25LfiTSp3ODL49YuRRZe01zWxEVNyxdR0MlwJa5vuyUKHC24NALVLrSAlJUBiO2dykEdDB%2Fk7ggnG7z68zs%2FqJe%2B&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231115T110249Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFLWSIZKRG%2F20231115%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=03b68973d6d2447b791e7f5cfa3abd48e64c985745cf21343b667704b916ab21",
                    width: 200,
                }, 
                REGULAR: {
                    height: 300,
                    url: "https://edamam-product-images.s3.amazonaws.com/web-img/d42/d426cef53c83422467a83e819d27f371.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLWVhc3QtMSJHMEUCICybqa4SWwD0pt7RN966aCH%2Bh6UEm8Z0%2B%2Bp9v8Wcn6wkAiEAjkcmbmIDdPR1QBHzDO01OaptclWp3dhh%2FDoMe7RqZiMquQUIcxAAGgwxODcwMTcxNTA5ODYiDFuPlNj4Gf96ZoWjbCqWBZCSP6nqQ1EXlq87s5PazYUDbnTC2tDR4lmytu3YUD8NH7HpgjqzKnY2H1PRadYkysQ4DKDB%2BHZgEMB8pS9EWNPerUX%2BdOUWdoxWSIWsyPzo6LoUImjtS91gOtqxIujMozbVwfN4IsqN0s3MzleTMuVbnZ%2FZWul0M%2FLezVy3AHr5GDF45YMSe01ICxjccTxXSRrLds4InyG6ceTVHNHqURUsjLRTr1dQVvQT6t8hp67vZeHCut7JtSBhod3sKMuGrzpMmN9stTjgdLK3OY1HUja%2BgswZZrK2FiMyGHgBzSaUw4Wli1JFAfLGOGg1gLxpkC2SuRFaR7jIpt4MaxSgdnDq%2BW1spUF1XzAOPtnvvfeabsbkU6gnHNpT80W%2BIDqhheuNfHe%2FoSiksmmaZcNCJnf4dXyNXwnZLGePRmiPX%2F7B7nTX4L1tmZ2NZzUMaF19PAUwWBQlqjl2va6wxXfk1JMk%2BYTo1wDMiHpvcbb%2F0p1uv31Jf8D2B2dNl24qZgchtVZ6PpME%2FpUDq7bn91cy6mMRan3%2BN1PK8bUOqYNZ3VKTEVSpm6%2FhN0oR%2BAyV4UHiFEIVvaha35oyCRzuQ08UDwAczOOQCR2CpHj9VzOPB7ptxjVvEXRDTV65lTLhvNhdMoDwbkltwfvbiHtFqcDONxfefxzQWzye%2FqKtfOAoVPYFB8eo7scOQWvcIOFLI4XvyVtM1EbgPLyrJVNbiwAXfcq%2BuLlUFTRZ5t1rlndwUgPaA3Sp0lug9X5do6%2B8Rc%2BzYyQtCa6i%2BoFpS%2FtF4P2TPDYJgAkeTtKqUFz22uOwCY8iPQX0OSRYaxewwyZLNaJEPxpG%2FAvw9KE7t1zwNHRy%2F7i%2FnmzwA68btz3PuK2VjErIiUGimewlMIek0qoGOrEBYoHFBzVuYab3iJRI3OpqHSpuH4Ywe050mhkjDPEPp6TrJcxodmRBRk5DYHE%2BzlyEm%2FhNpVHXkWNNlLwk7iI96OhSZc2I17HXO9Wqdm%2FgcfDnPvweuHrTyEbcLdKS6uVVDkzYGMkjalChDRCcuv4p25LfiTSp3ODL49YuRRZe01zWxEVNyxdR0MlwJa5vuyUKHC24NALVLrSAlJUBiO2dykEdDB%2Fk7ggnG7z68zs%2FqJe%2B&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231115T110249Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFLWSIZKRG%2F20231115%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=cbe53c97fe1319db7bfa9281829701eeb15d995d570335aa0560396b09ad15c2",
                    width: 300,
                },
                LARGE: {
                    height: 600,
                    url: "https://edamam-product-images.s3.amazonaws.com/web-img/d42/d426cef53c83422467a83e819d27f371-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLWVhc3QtMSJHMEUCICybqa4SWwD0pt7RN966aCH%2Bh6UEm8Z0%2B%2Bp9v8Wcn6wkAiEAjkcmbmIDdPR1QBHzDO01OaptclWp3dhh%2FDoMe7RqZiMquQUIcxAAGgwxODcwMTcxNTA5ODYiDFuPlNj4Gf96ZoWjbCqWBZCSP6nqQ1EXlq87s5PazYUDbnTC2tDR4lmytu3YUD8NH7HpgjqzKnY2H1PRadYkysQ4DKDB%2BHZgEMB8pS9EWNPerUX%2BdOUWdoxWSIWsyPzo6LoUImjtS91gOtqxIujMozbVwfN4IsqN0s3MzleTMuVbnZ%2FZWul0M%2FLezVy3AHr5GDF45YMSe01ICxjccTxXSRrLds4InyG6ceTVHNHqURUsjLRTr1dQVvQT6t8hp67vZeHCut7JtSBhod3sKMuGrzpMmN9stTjgdLK3OY1HUja%2BgswZZrK2FiMyGHgBzSaUw4Wli1JFAfLGOGg1gLxpkC2SuRFaR7jIpt4MaxSgdnDq%2BW1spUF1XzAOPtnvvfeabsbkU6gnHNpT80W%2BIDqhheuNfHe%2FoSiksmmaZcNCJnf4dXyNXwnZLGePRmiPX%2F7B7nTX4L1tmZ2NZzUMaF19PAUwWBQlqjl2va6wxXfk1JMk%2BYTo1wDMiHpvcbb%2F0p1uv31Jf8D2B2dNl24qZgchtVZ6PpME%2FpUDq7bn91cy6mMRan3%2BN1PK8bUOqYNZ3VKTEVSpm6%2FhN0oR%2BAyV4UHiFEIVvaha35oyCRzuQ08UDwAczOOQCR2CpHj9VzOPB7ptxjVvEXRDTV65lTLhvNhdMoDwbkltwfvbiHtFqcDONxfefxzQWzye%2FqKtfOAoVPYFB8eo7scOQWvcIOFLI4XvyVtM1EbgPLyrJVNbiwAXfcq%2BuLlUFTRZ5t1rlndwUgPaA3Sp0lug9X5do6%2B8Rc%2BzYyQtCa6i%2BoFpS%2FtF4P2TPDYJgAkeTtKqUFz22uOwCY8iPQX0OSRYaxewwyZLNaJEPxpG%2FAvw9KE7t1zwNHRy%2F7i%2FnmzwA68btz3PuK2VjErIiUGimewlMIek0qoGOrEBYoHFBzVuYab3iJRI3OpqHSpuH4Ywe050mhkjDPEPp6TrJcxodmRBRk5DYHE%2BzlyEm%2FhNpVHXkWNNlLwk7iI96OhSZc2I17HXO9Wqdm%2FgcfDnPvweuHrTyEbcLdKS6uVVDkzYGMkjalChDRCcuv4p25LfiTSp3ODL49YuRRZe01zWxEVNyxdR0MlwJa5vuyUKHC24NALVLrSAlJUBiO2dykEdDB%2Fk7ggnG7z68zs%2FqJe%2B&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231115T110249Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFLWSIZKRG%2F20231115%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=bc03fb8041ac38b17bf63cff2721b63eab2a076e8f5fd49cee2c3862e663ca8c",
                    width: 600,
                }
            },
            ingredientLines: [ 
                "* 1 tablespoon olive oil", "* about 16 ounce skinless, boneless chicken breast",
                "* 1/2 teaspoon mccormick chipotle chili pepper", "* 1/2 teaspoon kosher salt",
                "* 1/2 cup diced yellow onion", "* 1/2 cup diced celery", "* 1/2 cup diced sweet green pepper",
                "* 1 14 ounce can diced tomato with green chilie", "* 1 15 ounce can black bean, drained and rinsed",
                "* 1 cup jasmine or white rice", "* 1 and 1/2 cup low sodium chicken broth",
                "* 2 teaspoon mccormick oregano leaf", "* 1 teaspoon mccormick smoked paprika",
                "* 1 teaspoon mccormick ground cumin", "* 1 teaspoon mccormick onion powder",
                "* 1 teaspoon mccormick chipotle chili pepper", "* 3/4 teaspoon mccormick garlic powder",
                "* additional salt, to taste",
            ],
            label: "Chipotle Chicken Black Beans & Rice",
            mealType: [ "lunch/dinner" ],
            shareAs: "http://www.edamam.com/recipe/chipotle-chicken-black-beans-rice-3ce049c77f4d6a32de5de505108ce107/-",
            source: "thecreeksidecook.com",
            totalCO2Emissions: 9780.922533495695,
            totalTime: 0,
            totalWeight: 2074.284041176989,
            uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_3ce049c77f4d6a32de5de505108ce107",
            url: "http://thecreeksidecook.com/chipotle-chicken-black-beans-and-rice/",
            yield: 8,
            totalNutrients: {
                "FAT": {
                    label: "Fat",
                    quantity: 44.214710159804,
                    unit: "g"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 49.0926427026,
                    "unit": "g"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 46.291116205159994,
                    "unit": "g"
                },
                "CHOLE": {
                    "label": "Cholesterol",
                    "quantity": 111.620125,
                    "unit": "mg"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 1826.6438549484194,
                    "unit": "mg"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 1214.8195239556271,
                    "unit": "mg"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 180.2010748341678,
                    "unit": "mg"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 2256.6447535581424,
                    "unit": "mg"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 5.816474781587372,
                    "unit": "mg"
                },
            }
        }
    }


    return (
        <div className='recipe-page _container'>
            {/* title and picture */}
            <div className='recipe__img'>
                {/* <img src={recipe.recipe.image} alt="" /> */}
                <img src={img} alt="" />
            </div>

            {/* recipe */}
            <div className='recipe__description'>
                <div className="recipe__tags">
                    {recipe.recipe.cuisineType[0]}
                    <span className='delimiter'>&#183;</span>
                    {recipe.recipe.dishType[0]}
                </div>
                <div className='recipe__title'>{recipe.recipe.label}</div>
                <div className="recipe__information">
                    {
                        // recipe.recipe.totalTime !==0 && 
                        <div className='information__item time'>
                            <div className="information__img">
                                <img src={clockImg} alt="" />
                            </div>
                            <div className="information__text">{recipe.recipe.totalTime}</div>
                        </div>
                    }   
                    <div  className='information__item servings'>
                        <div className="information__img">
                            <img src={spoonImg} alt="" />
                        </div>
                        <div className="information__text">Make {recipe.recipe.yield} servings</div>
                    </div>
                </div>
                
                <div className='recipe__ingredients'>
                    <div className='ingredients__title'>Ingredients</div>
                    <div className='ingredients__list'>
                        {recipe.recipe.ingredientLines.map(el => <span className='ingredients__item'>{el}</span>)}
                    </div>
                </div>

                <div className='nutrition'>
                    <div className="nutrition__title">Nutritional Information</div>
                    <div className='nutrition__group'> {/*className='energy-value' */}
                        {/* <div className='yield'>{recipe.recipe.yield} servings</div> */}
                        <div className='nutrition__item'> {/*className='calories' */}
                            <span className="nutrition__name">kcal</span>
                            <span className="nutrition__quantity">{Math.floor(recipe.recipe.calories / recipe.recipe.yield)}</span>
                        </div>
                    </div>
                    <div className='nutrition__group'> {/*className='total-nutrients' */}
                        <div className='nutrition__item'> {/*className='protein' */}
                            <span className="nutrition__name">
                                <span className='dot green'></span>
                                Protein
                            </span>
                            <span className="nutrition__quantity">
                                {Math.floor(recipe.recipe.totalNutrients.PROCNT.quantity)} g
                            </span>
                        </div>
                        <div className='nutrition__item'> {/*className='fat' */}
                            <span className="nutrition__name">
                                <span className='dot yellow'></span>
                                Fat
                            </span>
                            <span className="nutrition__quantity">{Math.floor(recipe.recipe.totalNutrients.FAT.quantity)} g</span>
                        </div>
                        <div className='nutrition__item'> {/*className='carb' */}
                            <span className="nutrition__name">
                                <span className='dot red'></span>
                                Carb
                            </span>
                            <span className="nutrition__quantity">{Math.floor(recipe.recipe.totalNutrients.CHOCDF.quantity)} g</span>
                        </div>
                    </div> 
                    <div className='nutrition__group'> {/*className='total-nutrients' */}
                        <div className='nutrition__item'> {/*className='cholesterol' */}
                            <span className="nutrition__name">Cholesterol</span>
                            <span className="nutrition__quantity">{Math.floor(recipe.recipe.totalNutrients.CHOLE.quantity)} mg</span>
                        </div>
                        <div className='nutrition__item'> {/*className='sodium' */}
                            <span className="nutrition__name">Sodium</span>
                            <span className="nutrition__quantity">{Math.floor(recipe.recipe.totalNutrients.NA.quantity)} mg</span>
                        </div>
                        <div className='nutrition__item'> {/*className='calcium' */}
                            <span className="nutrition__name">Calcium</span>
                            <span className="nutrition__quantity">{Math.floor(recipe.recipe.totalNutrients.CA.quantity)} mg</span>
                        </div>
                        <div className='nutrition__item'> {/*className='magnesium' */}
                            <span className="nutrition__name">Magnesium</span>
                            <span className="nutrition__quantity">{Math.floor(recipe.recipe.totalNutrients.MG.quantity)} mg</span>
                        </div>
                        <div className='nutrition__item'> {/*className='potassium' */}
                            <span className="nutrition__name">Potassium</span>
                            <span className="nutrition__quantity">{Math.floor(recipe.recipe.totalNutrients.K.quantity)} mg</span>
                        </div>
                        <div className='nutrition__item'> {/*className='iron' */}
                            <span className="nutrition__name">Iron</span>
                            <span className="nutrition__quantity">{Math.floor(recipe.recipe.totalNutrients.FE.quantity)} mg</span>
                        </div>
                    </div> 
                </div>
                {/* <div className='recipe-instructions'>
                    <div className='instructions-title'>INSTRUCTIONS</div>
                    <div className='instructions'>{instructions}</div>
                </div> */}
            </div>
        </div>
    )
}

export default Recipe