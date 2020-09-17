import React from "react"
import Layout from "../components/Layout/layout"
import CoffeeType from "../components/Coffees/CoffeeType"
import CoffeeDetail from "../components/Coffees/Coffee/CoffeeDetail"

const DetailPage = props => {
  const coffeetype = props.pageContext.coffeeType;
  const coffee = props.pageContext.coffee;
  if (coffeetype) {
    return (
      <Layout>
          <CoffeeType coffeetype={coffeetype}></CoffeeType>
      </Layout>
    )
  }else{
      return (
        <Layout>
            <CoffeeDetail coffee={coffee}></CoffeeDetail>
        </Layout>
      )
  }
}

export default DetailPage
