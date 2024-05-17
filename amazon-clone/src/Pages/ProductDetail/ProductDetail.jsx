import React, { useEffect, useState } from 'react'
import classes from "./productDetail.module.css"
import LayOut from '../../Components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from "axios" 
import { productUrl } from '../../Api/endPoints'
import ProductCard from '../../Components/Product/ProductCard'

const ProductDetail = () => {
  const { productId } = useParams()

  //` use useState to store the data
  const [products,setProducts] = useState([])
  // console.log(productId);

  // ` use useEffect so it'll be fetched when the component mount

  useEffect (()=> {
    // ` axios to fetch data
    axios.get(`${productUrl}/products/${productId}`)
    .then((res)=>{
      // console.log(res);
      setProducts(res.data)
    }).catch(err=>console.log(err))
  },[])
  return (
    <LayOut>

      <ProductCard
      product = {products}
      key = {products.id}
      
      />
    
      
    </LayOut>
  )
}

export default ProductDetail