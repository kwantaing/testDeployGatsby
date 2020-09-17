const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const queryResults = await graphql(`
    query initialQuery {
      allContentfulCoffeeTypes {
        nodes {
          id
          coffeeType
          typeDescription
          coffeeComponents
          slug
          coffeeTypeImg {
            id
            fluid(maxWidth: 614) {
              src
            }
          }
          coffeeTypeOfferings {
            id
            coffeeName
            coffeeDescription
            slug
            coffeeRating
            coffeeType {
              coffeeType
              slug
            }
            coffeeImage {
              id
              fluid(maxWidth: 614) {
                src
              }
              fixed {
                src
              }
            }
          }
        }
      }
      allContentfulCoffee {
        nodes {
          id
          coffeeName
          coffeeImage {
            fluid {
              src
            }
            fixed {
              src
            }
          }
          slug
          coffeeDescription
          coffeeRating
          coffeeType {
            slug
            coffeeType
          }
        }
      }
    }
  `)
    //page components
    const allCoffeePage = path.resolve('./src/pages/allCoffees.js');
    const allCoffeeTypesPage = path.resolve('./src/pages/coffeeTypes.js');
    const DetailPage = path.resolve('./src/pages/DetailPage.js');

    //data from CMS
    const allCoffees = queryResults.data.allContentfulCoffee.nodes;
    const allCoffeeTypes = queryResults.data.allContentfulCoffeeTypes.nodes;

    createPage({
        path: `/coffees`,
        component: allCoffeePage,
        context: {
            allCoffees: allCoffees
        }
    })
    createPage({
        path: `/categories`,
        component: allCoffeeTypesPage,
        context: {
            allCoffeeTypes : allCoffeeTypes
        }
    })

    //coffee types
        //each coffee 

    allCoffeeTypes.forEach(coffeeType => {
        createPage({
            path: `/${coffeeType.slug}`,
            component: DetailPage,
            context:{
                coffeeType : coffeeType
            }
        })
        coffeeType.coffeeTypeOfferings.forEach(coffee => {
            createPage({
                path : `/${coffeeType.slug}/${coffee.slug}`,
                component: DetailPage,
                context: {
                    coffee: coffee
                }
            })
        })
    })



}
