import React, { useEffect, useState } from 'react'
import classes from "./results.module.css"
import LayOut from '../../Components/LayOut/LayOut'
import { useParams } from 'react-router-dom' 
import axios from "axios"
import { productUrl } from '../../Api/endPoints'
import ProductCard from '../../Components/Product/ProductCard'

const Results = () => {
  // ` Create useState to store the data
  const [results, setResults] = useState([])

  // ` use useParams for a dynamic path
  const { categoryName } = useParams()
  // console.log(categoryName);


  //` use useEffect so the data will be fetched when the component mounts
  useEffect(()=>{
     // *Fetch the baseUrl then and all the path and to make it dynamic we use useParams

  axios.get(`${productUrl}/products/category/${categoryName}`)
  .then(res=>{ //* the response is named as data
    // console.log(res.data);
    setResults(res.data)
  }).catch(err=>console.log(err))
  },[])


 

  return (
    <LayOut>
    <section>
      <h1 style={{padding:"30px"}}>Results</h1>
      <p style={{padding:"30px"}}>Category/{categoryName}</p>
      <hr />

      <div className={classes.products_container}>
        {
          results?.map((product)=>(
            <ProductCard
              product = {product}
              key={product.id}
            
            />

          ))

        }
      </div>
    </section>

      
    </LayOut>
  )
}

export default Results