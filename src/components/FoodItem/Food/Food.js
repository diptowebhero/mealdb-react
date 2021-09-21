import React from 'react';
const Food = (props) => {
    return (
        <div>
            <div className="card m-3 border-0 shadow" style={{ width: '18rem' }}>
                <img src={props.strMealThumb} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.strMeal}</h5>
                </div>
            </div>
        </div>
    );
};

export default Food;