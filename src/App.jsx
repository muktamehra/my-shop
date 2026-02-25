import { useState } from 'react'
import Header from './Header'
import Hero from './Hero'
import ProductCard from './ProductCard'
import Footer from './Footer'
import './Hero.css'
import './ProductCard.css'

function App() { // ← this is a React component
  const [cart, setCart] = useState([])
  const [cartTotal, setCartTotal] = useState(0)
  const products = [
    {id: 1, name: "Winter Coat", price: 30, image: "images/jacket.jpg", description: " A great all year round jacket"},
    {id: 2, name: "Summer Dress", price: 60, image: "images/dress.jpg", description: " A beautiful red dress"},
    {id: 3, name: "Comfortable Shoes", price: 45, image: "images/shoes.jpg", description: " A pair of comfortable shoes"}
  ]

  function addToCart(name, price) {
    setCartTotal(cartTotal + 1)

    const existingProduct = cart.find(function(item) {
      return item.name === name
    })

    if (existingProduct) {
      setCart(cart.map(function(item) {
        if (item.name === name) {
          return { ...item, quantity: item.quantity + 1 }
        }
        return item
      }))
    } else {
      setCart([...cart, { name: name, price: price, quantity: 1 }])
    }
  }
  
  return (     //← everything inside here shows on the page
    <div>
      <Header cartTotal={cartTotal} />
      <Hero />
      <div className="cards">
        {products.map(function(product) {
          return (
            <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            description={product.description}
            addToCart={addToCart}
            />
          )
        })}
      </div>
      <Footer />
    </div>
  )
}

export default App  // ← makes this component available to other files