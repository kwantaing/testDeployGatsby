import React from "react"
import CoffeeCard from "./Coffee/CoffeeCard"
import { Link } from "gatsby"

const CoffeeType = props => {
  const coffeetype = props.coffeetype
  return (
    <div key={coffeetype.id}>
      <Link to={`/${coffeetype.slug}`}>
        <h2>{coffeetype.coffeeType}</h2>
      </Link>
      <img src={coffeetype.coffeeTypeImg.fluid.src} alt=""></img>
      <br />
      {coffeetype.coffeeTypeOfferings.map(coffee => {
        return (
          <CoffeeCard
            key={coffee.id}
            coffeeType={coffeetype.slug}
            coffee={coffee}
          ></CoffeeCard>
        )
      })}
    </div>
  )
}

export default CoffeeType
