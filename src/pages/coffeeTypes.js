import React from "react"
import Layout from "../components/Layout/layout"
// import CoffeeCard from "../components/Coffees/Coffee/CoffeeCard"
import CoffeeType from "../components/Coffees/CoffeeType";

const CoffeeTypes = (props) => {
  const allCoffeeTypes = props.pageContext.allCoffeeTypes;
  return (
    <Layout>
      {allCoffeeTypes && allCoffeeTypes.map(coffeetype => {
        return (
          <CoffeeType key={coffeetype.id} coffeetype={coffeetype}></CoffeeType>
        )
      })}
    </Layout>
  )
}

export default CoffeeTypes
