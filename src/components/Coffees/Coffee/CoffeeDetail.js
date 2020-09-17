import React from 'react';

const CoffeeDetail = props => {
    const Coffee = props.coffee ? props.coffee : {coffeeImage : '', coffeeType: 'empty'}
    console.log(Coffee);
    return(
        <div>
            <h3>{Coffee.coffeeName}</h3>
            <img src={Coffee.coffeeImage.fluid && Coffee.coffeeImage.fluid.src} alt=""></img>
            <p>Type of Coffee: {Coffee.coffeeType && Coffee.coffeeType.coffeeType}</p>
            <p>{Coffee.coffeeDescription}</p>
            <p>Rating: {Coffee.coffeeRating}</p>
        </div>
    )
}


export default CoffeeDetail;