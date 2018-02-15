import React from 'react';

export default function FoodItem (props) {
    return (
        <p>{props.foodItem}</p>
    )
}

// functional component was being called without receiving props