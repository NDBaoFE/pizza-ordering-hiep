import React from 'react'
import ProductsCard from './components/ProductCart'

function Child({ pizzas }) {
  return (
    <>
      {pizzas.map((pizza) => (
        <ProductsCard key={pizza.id} {...pizza} />
      ))}
    </>
  )
}

export default Child
