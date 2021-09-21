import React, { useEffect, useState } from 'react';
import Food from './Food/Food';
const Foods = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
            .then(res => res.json())
            .then(data => setFoods(data.meals))
    }, [])
    return (
       <div>
           <h1 className="mt-2 fw-bold">TheMealDb</h1>
            <div className ='d-flex flex-wrap justify-content-center'>
                {
                foods.map(food =><Food strMeal={food.strMeal} strMealThumb={food.strMealThumb}></Food>)
                }
        </div>
       </div>
    );
};

export default Foods;