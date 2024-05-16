import React, { useEffect, useState } from 'react'
import classes from "./product.module.css"
import axios from "axios"
import ProductCard from './ProductCard'

const Product = () => {
    //` Fetch data from Fake Api. Create useState to store the data
    
    const [products,setProducts] = useState([])
    //` useEffect so it render when the component mount

    useEffect (()=>{
        // ` axios to fetch the data
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
            // console.log(res);
            setProducts(res.data)
        }).catch((err) => console.log(err));
        

    },[])
// console.log(products);

// # use products from useState to map the fetched data
      return (
    <section className={classes.product_container}>
        
        {
            products.map((singleProduct)=>(
                <ProductCard product ={singleProduct} key={singleProduct.id}/>

            ))
        }

        
    </section>
  )
}

export default Product