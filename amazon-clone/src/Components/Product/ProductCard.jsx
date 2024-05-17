import React from 'react'
import classes from "./product.module.css"
// : material ui rating for rating
import Rating from "@mui/material/Rating"
// : numeral js for number counting in my CurrencyFormat Component
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat'
// ` a tag to Link
import { Link } from 'react-router-dom'


// ` Destructure the fetched product from Product component
const ProductCard = ({product}) => {

    // ` Destructure the items in product
    const { image,title, id, rating, price } = product
  return (
    <div className={classes.card_container}>
        <Link to={`/products/${id}`}>
            <img src={image} alt="" />
        </Link>
        <div>
            <h4>{title}</h4>
            <div className={classes.rating}>
                {/* rating */}
                
                <Rating value={rating?.rate} precision={0.1}/>
                {/* rating count */}
                <small>{rating?.count}</small>
            </div>
            <div>
                {/* price */}
                <CurrencyFormat amount={price}/>
</div>
        <button className={classes.button}>
            add to cart
        </button>
        </div>
        
    </div>
  )
}

export default ProductCard