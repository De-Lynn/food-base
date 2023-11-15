import { useState } from "react"
import AdvancedSearch from "./AdvancedSearch/AdvancedSearch"
import SearchResults from "./SearchResults"
import './SearchPage.scss'

function SearchPage() {
    const [recipes, setRecipes] = useState<any>([
        {
            recipe: {
                calories: 254.15999998710873,
                cautions: [ "Sulfites" ],
                co2EmissionsClass: "A",
                cuisineType: [ "american" ],
                dietLabels: [ "Low-Fat", "Low-Sodium" ],
                dishType: [ "drinks" ],
                healthLabels: [ "Sugar-Conscious", "Low Sugar", "Vegan",
                    "Vegetarian", "Pescatarian", "Mediterranean", "Dairy-Free", "Gluten-Free", 
                    "Wheat-Free", "Egg-Free", "Peanut-Free", "Tree-Nut-Free", "Soy-Free", 
                    "Fish-Free", "Shellfish-Free", "Pork-Free", "Red-Meat-Free", "Crustacean-Free", 
                    "Celery-Free", "Mustard-Free", "Sesame-Free", "Lupine-Free", "Mollusk-Free", 
                    "Alcohol-Free", "No oil added", "Sulfite-Free", "Kosher"
                ],
                images: { 
                    THUMBNAIL: {
                        height: 100,
                        url: "https://edamam-product-images.s3.amazonaws.com/web-img/68f/68fa29c8f3084df9d4cdc84dbffe939b-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIGaJYjA3YgNM2MiBBCXwUwd19%2BtxQZZVFO0CW5fv9WQuAiBY05G3U1g8i9pRZuiasCMsN2c2Imw4geeX1HdvhgIb3yrCBQjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMnOGojXlIucLZUpMgKpYFxQK%2BVKfK2k3IIMyh6iyBMj1nGdcGxHDHpy7hq7yp9BCD9Vr%2F7FnWSII0lFRhtJYIHEFfHDEF2dX4acdjKFxlap7sM2WaY5yr4c8jXWymwvsJUs%2BxFZsWJsY1Cnq9f9MZM62EHXD2nEZS1RUp6%2FkV7cp2e%2BtemZd%2FqFebkVCEmb6M8%2FvGA0SZUem9W3mgd9vNWmzsrU4h%2BrUwLqmCunsulG9IDDjSyzth4F9zfvusModtuMxZrPQgCgDkb2LH2bjnCpBwb2cVHhOnYrt%2F16uBEo6en%2F15kASOiyA2WuEBnpxtAzPpmnizZ6IBCqYdwC5ANx6DWRXGI05kTUYnlvCEwaq07IEJR69ZhPdrDilG%2BmqlNvKlaio3pA%2Bb92T4obKQEQdSCJW6Gp9oXeL%2Bn5nMDtaS7CJmEDTdom5tHp9Xrs535bn4sQ6zaryW5dbZZJpIaWcVzX1HMVsrU0SKGNv6WUEUl0fD7ZwXkMiEOCd5ibynE6%2B%2BUpPP4PnFEfk1LBm0gHJKNsNtE9Yem8rB1sS8p%2BjtP%2FNcb6vqgWM7r1UIAJJeGtEdq10FyPNxkS2outKM5l7pjYLp6l3j84AUk%2F6GYtaJ6vVJaGln%2FnReeV9ZuGBQci31iWZs8dCbZ9Aulz9kNpKNPgKFaLTMjLtzBHLm44nLWXa%2FaVNDK7KZvfeRRGg4vjW5ZsxqvQG%2BvN1XtlTj7sjE19kAoFI%2B2THqk2DSjo14gahWg59Fy2G7kcF%2FlVfmi21pWg8eRlRN8pGTRltcHed1fEbvuR3qKcvMLlWyNbRIKYmWePgims6h8eq%2Fej%2BPwgXzXbhMkhY6ky3AF%2FPAqybV9WDFNz186%2BAQL9wjJo8Kn%2FebohqUVW2%2FuyIqjiL3B3SUTcEw75e4qgY6sgFOtn5o0tHyi64tPQXJJz6G%2BYSVgQd%2BBO18sPk0R757IjNm34oaBI2k8altIaqlKMKnmDMFCrPI%2FVzMnlPl%2BzBiuNp6LNdeZIPIM0W8n0wGEwGYziMvPM5dpDpcCoN4jqwDgnSQTknAORDV7Ds6XN1aKoWRBAzu%2Fz0LaYGjINDUA8lAmxpO5CrIID6p8mHyKMwUwFmHsQ1CSAN0xo21NfKEovPrpnn6pKnxxkGJx9AKG0U8&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231110T113158Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFC5SSKWOI%2F20231110%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=fe0afef4b0c5fb7a01d343755493f5f58c4f827c47a00a22ccbbfcf805d53083",
                        width: 100,
                    }, 
                    SMALL: {
                        height: 200,
                        url: "https://edamam-product-images.s3.amazonaws.com/web-img/68f/68fa29c8f3084df9d4cdc84dbffe939b-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIGaJYjA3YgNM2MiBBCXwUwd19%2BtxQZZVFO0CW5fv9WQuAiBY05G3U1g8i9pRZuiasCMsN2c2Imw4geeX1HdvhgIb3yrCBQjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMnOGojXlIucLZUpMgKpYFxQK%2BVKfK2k3IIMyh6iyBMj1nGdcGxHDHpy7hq7yp9BCD9Vr%2F7FnWSII0lFRhtJYIHEFfHDEF2dX4acdjKFxlap7sM2WaY5yr4c8jXWymwvsJUs%2BxFZsWJsY1Cnq9f9MZM62EHXD2nEZS1RUp6%2FkV7cp2e%2BtemZd%2FqFebkVCEmb6M8%2FvGA0SZUem9W3mgd9vNWmzsrU4h%2BrUwLqmCunsulG9IDDjSyzth4F9zfvusModtuMxZrPQgCgDkb2LH2bjnCpBwb2cVHhOnYrt%2F16uBEo6en%2F15kASOiyA2WuEBnpxtAzPpmnizZ6IBCqYdwC5ANx6DWRXGI05kTUYnlvCEwaq07IEJR69ZhPdrDilG%2BmqlNvKlaio3pA%2Bb92T4obKQEQdSCJW6Gp9oXeL%2Bn5nMDtaS7CJmEDTdom5tHp9Xrs535bn4sQ6zaryW5dbZZJpIaWcVzX1HMVsrU0SKGNv6WUEUl0fD7ZwXkMiEOCd5ibynE6%2B%2BUpPP4PnFEfk1LBm0gHJKNsNtE9Yem8rB1sS8p%2BjtP%2FNcb6vqgWM7r1UIAJJeGtEdq10FyPNxkS2outKM5l7pjYLp6l3j84AUk%2F6GYtaJ6vVJaGln%2FnReeV9ZuGBQci31iWZs8dCbZ9Aulz9kNpKNPgKFaLTMjLtzBHLm44nLWXa%2FaVNDK7KZvfeRRGg4vjW5ZsxqvQG%2BvN1XtlTj7sjE19kAoFI%2B2THqk2DSjo14gahWg59Fy2G7kcF%2FlVfmi21pWg8eRlRN8pGTRltcHed1fEbvuR3qKcvMLlWyNbRIKYmWePgims6h8eq%2Fej%2BPwgXzXbhMkhY6ky3AF%2FPAqybV9WDFNz186%2BAQL9wjJo8Kn%2FebohqUVW2%2FuyIqjiL3B3SUTcEw75e4qgY6sgFOtn5o0tHyi64tPQXJJz6G%2BYSVgQd%2BBO18sPk0R757IjNm34oaBI2k8altIaqlKMKnmDMFCrPI%2FVzMnlPl%2BzBiuNp6LNdeZIPIM0W8n0wGEwGYziMvPM5dpDpcCoN4jqwDgnSQTknAORDV7Ds6XN1aKoWRBAzu%2Fz0LaYGjINDUA8lAmxpO5CrIID6p8mHyKMwUwFmHsQ1CSAN0xo21NfKEovPrpnn6pKnxxkGJx9AKG0U8&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231110T113158Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIASXCYXIIFC5SSKWOI%2F20231110%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f5cceca0ec543eed2c5552d7a66c63bc4453f14a9446dd49627205e48ef66314",
                        width: 200
                    }, 
                    REGULAR: {
                        height: 300,
                        url: "https://edamam-product-images.s3.amazonaws.com/web-img/68f/68fa29c8f3084df9d4cdc84dbffe939b.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIGaJYjA3YgNM2MiBBCXwUwd19%2BtxQZZVFO0CW5fv9WQuAiBY05G3U1g8i9pRZuiasCMsN2c2Imw4geeX1HdvhgIb3yrCBQjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMnOGojXlIucLZUpMgKpYFxQK%2BVKfK2k3IIMyh6iyBMj1nGdcGxHDHpy7hq7yp9BCD9Vr%2F7FnWSII0lFRhtJYIHEFfHDEF2dX4acdjKFxlap7sM2WaY5yr4c8jXWymwvsJUs%2BxFZsWJsY1Cnq9f9MZM62EHXD2nEZS1RUp6%2FkV7cp2e%2BtemZd%2FqFebkVCEmb6M8%2FvGA0SZUem9W3mgd9vNWmzsrU4h%2BrUwLqmCunsulG9IDDjSyzth4F9zfvusModtuMxZrPQgCgDkb2LH2bjnCpBwb2cVHhOnYrt%2F16uBEo6en%2F15kASOiyA2WuEBnpxtAzPpmnizZ6IBCqYdwC5ANx6DWRXGI05kTUYnlvCEwaq07IEJR69ZhPdrDilG%2BmqlNvKlaio3pA%2Bb92T4obKQEQdSCJW6Gp9oXeL%2Bn5nMDtaS7CJmEDTdom5tHp9Xrs535bn4sQ6zaryW5dbZZJpIaWcVzX1HMVsrU0SKGNv6WUEUl0fD7ZwXkMiEOCd5ibynE6%2B%2BUpPP4PnFEfk1LBm0gHJKNsNtE9Yem8rB1sS8p%2BjtP%2FNcb6vqgWM7r1UIAJJeGtEdq10FyPNxkS2outKM5l7pjYLp6l3j84AUk%2F6GYtaJ6vVJaGln%2FnReeV9ZuGBQci31iWZs8dCbZ9Aulz9kNpKNPgKFaLTMjLtzBHLm44nLWXa%2FaVNDK7KZvfeRRGg4vjW5ZsxqvQG%2BvN1XtlTj7sjE19kAoFI%2B2THqk2DSjo14gahWg59Fy2G7kcF%2FlVfmi21pWg8eRlRN8pGTRltcHed1fEbvuR3qKcvMLlWyNbRIKYmWePgims6h8eq%2Fej%2BPwgXzXbhMkhY6ky3AF%2FPAqybV9WDFNz186%2BAQL9wjJo8Kn%2FebohqUVW2%2FuyIqjiL3B3SUTcEw75e4qgY6sgFOtn5o0tHyi64tPQXJJz6G%2BYSVgQd%2BBO18sPk0R757IjNm34oaBI2k8altIaqlKMKnmDMFCrPI%2FVzMnlPl%2BzBiuNp6LNdeZIPIM0W8n0wGEwGYziMvPM5dpDpcCoN4jqwDgnSQTknAORDV7Ds6XN1aKoWRBAzu%2Fz0LaYGjINDUA8lAmxpO5CrIID6p8mHyKMwUwFmHsQ1CSAN0xo21NfKEovPrpnn6pKnxxkGJx9AKG0U8&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231110T113158Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFC5SSKWOI%2F20231110%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=46d988ba0022ea7d412d9320e039bb76bab2eb10fca52e06732c49e831c96655",
                        width: 300
                    }, 
                },
                ingredientLines: [ "170g (6 ounces) whole coffee beans (about 1 1/2 cups whole beans), coarsely ground", 
                    "1,020g (36 ounces; about 4 1/4 cups) cold water" ],
                ingredients: [
                    {
                        food: "coffee beans",
                        foodCategory: "coffee and tea",
                        foodId: "food_b36idu0apr5kqtbcs7b7ua8spx6m",
                        image: "https://www.edamam.com/food-img/336/336e810373dd353a955a6896699b586e.jpg",
                        measure: "cup",
                        quantity: 1.5,
                        text: "170g (6 ounces) whole coffee beans (about 1 1/2 cups whole beans), coarsely ground",
                        weight: 71.99999999634808,
                    }, 
                    {
                        food: "water",
                        foodCategory: "water",
                        foodId: "food_a99vzubbk1ayrsad318rvbzr3dh0",
                        image: "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg",
                        measure: "ounce",
                        quantity: 1,
                        text: "1,020g (36 ounces; about 4 1/4 cups) cold water",
                        weight: 28.349523125
                    }
                ],
                label: "Cold Brew Iced Coffee Recipe",
                mealType: [ "teatime" ],
                shareAs: "http://www.edamam.com/recipe/cold-brew-iced-coffee-recipe-337f2c3780eccd9f01fe16c71b14ba84/-",
                source: "Serious Eats",
                totalCO2Emissions: 123.24959999374866,
                totalTime: 10,
                totalWeight: 100.34952312134808,
                uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_337f2c3780eccd9f01fe16c71b14ba84",
                url: "https://www.seriouseats.com/recipes/2020/06/cold-brew-iced-coffee.html",
                yield: 2,
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
            },
        },
        {
            recipe: {
                calories: 254.15999998710873,
                cautions: [ "Sulfites" ],
                co2EmissionsClass: "A",
                cuisineType: [ "american" ],
                dietLabels: [ "Low-Fat", "Low-Sodium" ],
                dishType: [ "drinks" ],
                healthLabels: [ "Sugar-Conscious", "Low Sugar", "Vegan",
                    "Vegetarian", "Pescatarian", "Mediterranean", "Dairy-Free", "Gluten-Free", 
                    "Wheat-Free", "Egg-Free", "Peanut-Free", "Tree-Nut-Free", "Soy-Free", 
                    "Fish-Free", "Shellfish-Free", "Pork-Free", "Red-Meat-Free", "Crustacean-Free", 
                    "Celery-Free", "Mustard-Free", "Sesame-Free", "Lupine-Free", "Mollusk-Free", 
                    "Alcohol-Free", "No oil added", "Sulfite-Free", "Kosher"
                ],
                images: { 
                    THUMBNAIL: {
                        height: 100,
                        url: "https://edamam-product-images.s3.amazonaws.com/web-img/68f/68fa29c8f3084df9d4cdc84dbffe939b-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIGaJYjA3YgNM2MiBBCXwUwd19%2BtxQZZVFO0CW5fv9WQuAiBY05G3U1g8i9pRZuiasCMsN2c2Imw4geeX1HdvhgIb3yrCBQjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMnOGojXlIucLZUpMgKpYFxQK%2BVKfK2k3IIMyh6iyBMj1nGdcGxHDHpy7hq7yp9BCD9Vr%2F7FnWSII0lFRhtJYIHEFfHDEF2dX4acdjKFxlap7sM2WaY5yr4c8jXWymwvsJUs%2BxFZsWJsY1Cnq9f9MZM62EHXD2nEZS1RUp6%2FkV7cp2e%2BtemZd%2FqFebkVCEmb6M8%2FvGA0SZUem9W3mgd9vNWmzsrU4h%2BrUwLqmCunsulG9IDDjSyzth4F9zfvusModtuMxZrPQgCgDkb2LH2bjnCpBwb2cVHhOnYrt%2F16uBEo6en%2F15kASOiyA2WuEBnpxtAzPpmnizZ6IBCqYdwC5ANx6DWRXGI05kTUYnlvCEwaq07IEJR69ZhPdrDilG%2BmqlNvKlaio3pA%2Bb92T4obKQEQdSCJW6Gp9oXeL%2Bn5nMDtaS7CJmEDTdom5tHp9Xrs535bn4sQ6zaryW5dbZZJpIaWcVzX1HMVsrU0SKGNv6WUEUl0fD7ZwXkMiEOCd5ibynE6%2B%2BUpPP4PnFEfk1LBm0gHJKNsNtE9Yem8rB1sS8p%2BjtP%2FNcb6vqgWM7r1UIAJJeGtEdq10FyPNxkS2outKM5l7pjYLp6l3j84AUk%2F6GYtaJ6vVJaGln%2FnReeV9ZuGBQci31iWZs8dCbZ9Aulz9kNpKNPgKFaLTMjLtzBHLm44nLWXa%2FaVNDK7KZvfeRRGg4vjW5ZsxqvQG%2BvN1XtlTj7sjE19kAoFI%2B2THqk2DSjo14gahWg59Fy2G7kcF%2FlVfmi21pWg8eRlRN8pGTRltcHed1fEbvuR3qKcvMLlWyNbRIKYmWePgims6h8eq%2Fej%2BPwgXzXbhMkhY6ky3AF%2FPAqybV9WDFNz186%2BAQL9wjJo8Kn%2FebohqUVW2%2FuyIqjiL3B3SUTcEw75e4qgY6sgFOtn5o0tHyi64tPQXJJz6G%2BYSVgQd%2BBO18sPk0R757IjNm34oaBI2k8altIaqlKMKnmDMFCrPI%2FVzMnlPl%2BzBiuNp6LNdeZIPIM0W8n0wGEwGYziMvPM5dpDpcCoN4jqwDgnSQTknAORDV7Ds6XN1aKoWRBAzu%2Fz0LaYGjINDUA8lAmxpO5CrIID6p8mHyKMwUwFmHsQ1CSAN0xo21NfKEovPrpnn6pKnxxkGJx9AKG0U8&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231110T113158Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFC5SSKWOI%2F20231110%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=fe0afef4b0c5fb7a01d343755493f5f58c4f827c47a00a22ccbbfcf805d53083",
                        width: 100,
                    }, 
                    SMALL: {
                        height: 200,
                        url: "https://edamam-product-images.s3.amazonaws.com/web-img/68f/68fa29c8f3084df9d4cdc84dbffe939b-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIGaJYjA3YgNM2MiBBCXwUwd19%2BtxQZZVFO0CW5fv9WQuAiBY05G3U1g8i9pRZuiasCMsN2c2Imw4geeX1HdvhgIb3yrCBQjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMnOGojXlIucLZUpMgKpYFxQK%2BVKfK2k3IIMyh6iyBMj1nGdcGxHDHpy7hq7yp9BCD9Vr%2F7FnWSII0lFRhtJYIHEFfHDEF2dX4acdjKFxlap7sM2WaY5yr4c8jXWymwvsJUs%2BxFZsWJsY1Cnq9f9MZM62EHXD2nEZS1RUp6%2FkV7cp2e%2BtemZd%2FqFebkVCEmb6M8%2FvGA0SZUem9W3mgd9vNWmzsrU4h%2BrUwLqmCunsulG9IDDjSyzth4F9zfvusModtuMxZrPQgCgDkb2LH2bjnCpBwb2cVHhOnYrt%2F16uBEo6en%2F15kASOiyA2WuEBnpxtAzPpmnizZ6IBCqYdwC5ANx6DWRXGI05kTUYnlvCEwaq07IEJR69ZhPdrDilG%2BmqlNvKlaio3pA%2Bb92T4obKQEQdSCJW6Gp9oXeL%2Bn5nMDtaS7CJmEDTdom5tHp9Xrs535bn4sQ6zaryW5dbZZJpIaWcVzX1HMVsrU0SKGNv6WUEUl0fD7ZwXkMiEOCd5ibynE6%2B%2BUpPP4PnFEfk1LBm0gHJKNsNtE9Yem8rB1sS8p%2BjtP%2FNcb6vqgWM7r1UIAJJeGtEdq10FyPNxkS2outKM5l7pjYLp6l3j84AUk%2F6GYtaJ6vVJaGln%2FnReeV9ZuGBQci31iWZs8dCbZ9Aulz9kNpKNPgKFaLTMjLtzBHLm44nLWXa%2FaVNDK7KZvfeRRGg4vjW5ZsxqvQG%2BvN1XtlTj7sjE19kAoFI%2B2THqk2DSjo14gahWg59Fy2G7kcF%2FlVfmi21pWg8eRlRN8pGTRltcHed1fEbvuR3qKcvMLlWyNbRIKYmWePgims6h8eq%2Fej%2BPwgXzXbhMkhY6ky3AF%2FPAqybV9WDFNz186%2BAQL9wjJo8Kn%2FebohqUVW2%2FuyIqjiL3B3SUTcEw75e4qgY6sgFOtn5o0tHyi64tPQXJJz6G%2BYSVgQd%2BBO18sPk0R757IjNm34oaBI2k8altIaqlKMKnmDMFCrPI%2FVzMnlPl%2BzBiuNp6LNdeZIPIM0W8n0wGEwGYziMvPM5dpDpcCoN4jqwDgnSQTknAORDV7Ds6XN1aKoWRBAzu%2Fz0LaYGjINDUA8lAmxpO5CrIID6p8mHyKMwUwFmHsQ1CSAN0xo21NfKEovPrpnn6pKnxxkGJx9AKG0U8&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231110T113158Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIASXCYXIIFC5SSKWOI%2F20231110%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f5cceca0ec543eed2c5552d7a66c63bc4453f14a9446dd49627205e48ef66314",
                        width: 200
                    }, 
                    REGULAR: {
                        height: 300,
                        url: "https://edamam-product-images.s3.amazonaws.com/web-img/68f/68fa29c8f3084df9d4cdc84dbffe939b.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIGaJYjA3YgNM2MiBBCXwUwd19%2BtxQZZVFO0CW5fv9WQuAiBY05G3U1g8i9pRZuiasCMsN2c2Imw4geeX1HdvhgIb3yrCBQjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMnOGojXlIucLZUpMgKpYFxQK%2BVKfK2k3IIMyh6iyBMj1nGdcGxHDHpy7hq7yp9BCD9Vr%2F7FnWSII0lFRhtJYIHEFfHDEF2dX4acdjKFxlap7sM2WaY5yr4c8jXWymwvsJUs%2BxFZsWJsY1Cnq9f9MZM62EHXD2nEZS1RUp6%2FkV7cp2e%2BtemZd%2FqFebkVCEmb6M8%2FvGA0SZUem9W3mgd9vNWmzsrU4h%2BrUwLqmCunsulG9IDDjSyzth4F9zfvusModtuMxZrPQgCgDkb2LH2bjnCpBwb2cVHhOnYrt%2F16uBEo6en%2F15kASOiyA2WuEBnpxtAzPpmnizZ6IBCqYdwC5ANx6DWRXGI05kTUYnlvCEwaq07IEJR69ZhPdrDilG%2BmqlNvKlaio3pA%2Bb92T4obKQEQdSCJW6Gp9oXeL%2Bn5nMDtaS7CJmEDTdom5tHp9Xrs535bn4sQ6zaryW5dbZZJpIaWcVzX1HMVsrU0SKGNv6WUEUl0fD7ZwXkMiEOCd5ibynE6%2B%2BUpPP4PnFEfk1LBm0gHJKNsNtE9Yem8rB1sS8p%2BjtP%2FNcb6vqgWM7r1UIAJJeGtEdq10FyPNxkS2outKM5l7pjYLp6l3j84AUk%2F6GYtaJ6vVJaGln%2FnReeV9ZuGBQci31iWZs8dCbZ9Aulz9kNpKNPgKFaLTMjLtzBHLm44nLWXa%2FaVNDK7KZvfeRRGg4vjW5ZsxqvQG%2BvN1XtlTj7sjE19kAoFI%2B2THqk2DSjo14gahWg59Fy2G7kcF%2FlVfmi21pWg8eRlRN8pGTRltcHed1fEbvuR3qKcvMLlWyNbRIKYmWePgims6h8eq%2Fej%2BPwgXzXbhMkhY6ky3AF%2FPAqybV9WDFNz186%2BAQL9wjJo8Kn%2FebohqUVW2%2FuyIqjiL3B3SUTcEw75e4qgY6sgFOtn5o0tHyi64tPQXJJz6G%2BYSVgQd%2BBO18sPk0R757IjNm34oaBI2k8altIaqlKMKnmDMFCrPI%2FVzMnlPl%2BzBiuNp6LNdeZIPIM0W8n0wGEwGYziMvPM5dpDpcCoN4jqwDgnSQTknAORDV7Ds6XN1aKoWRBAzu%2Fz0LaYGjINDUA8lAmxpO5CrIID6p8mHyKMwUwFmHsQ1CSAN0xo21NfKEovPrpnn6pKnxxkGJx9AKG0U8&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231110T113158Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFC5SSKWOI%2F20231110%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=46d988ba0022ea7d412d9320e039bb76bab2eb10fca52e06732c49e831c96655",
                        width: 300
                    },
                },
                ingredientLines: [ "170g (6 ounces) whole coffee beans (about 1 1/2 cups whole beans), coarsely ground", 
                    "1,020g (36 ounces; about 4 1/4 cups) cold water" ],
                ingredients: [
                    {
                        food: "coffee beans",
                        foodCategory: "coffee and tea",
                        foodId: "food_b36idu0apr5kqtbcs7b7ua8spx6m",
                        image: "https://www.edamam.com/food-img/336/336e810373dd353a955a6896699b586e.jpg",
                        measure: "cup",
                        quantity: 1.5,
                        text: "170g (6 ounces) whole coffee beans (about 1 1/2 cups whole beans), coarsely ground",
                        weight: 71.99999999634808,
                    }, 
                    {
                        food: "water",
                        foodCategory: "water",
                        foodId: "food_a99vzubbk1ayrsad318rvbzr3dh0",
                        image: "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg",
                        measure: "ounce",
                        quantity: 1,
                        text: "1,020g (36 ounces; about 4 1/4 cups) cold water",
                        weight: 28.349523125
                    }
                ],
                label: "Cold Brew Iced Coffee Recipe",
                mealType: [ "teatime" ],
                shareAs: "http://www.edamam.com/recipe/cold-brew-iced-coffee-recipe-337f2c3780eccd9f01fe16c71b14ba84/-",
                source: "Serious Eats",
                totalCO2Emissions: 123.24959999374866,
                totalTime: 10,
                totalWeight: 100.34952312134808,
                uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_337f2c3780eccd9f01fe16c71b14ba84",
                url: "https://www.seriouseats.com/recipes/2020/06/cold-brew-iced-coffee.html",
                yield: 2,
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
            },
        },
    ])
    return (
        <div className='search-page _container'>
            <AdvancedSearch setRecipes={setRecipes}/>
            <SearchResults recipes={recipes}/>
        </div>
    )
}

export default SearchPage