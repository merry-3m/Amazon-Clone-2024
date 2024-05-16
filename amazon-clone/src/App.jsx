import { useState } from 'react'

import './App.css'
import Header1 from './Components/Header/Header1'
import CarouselEffect from './Components/Carousel/Carousel'
import Category from './Components/Category/Category'
import Product from './Components/Product/Product'

function App() {
  

  return (
    <div>
      <Header1/>
      <CarouselEffect/>
      <Category/>
      <Product/>
  
    </div>
  )
}

export default App
