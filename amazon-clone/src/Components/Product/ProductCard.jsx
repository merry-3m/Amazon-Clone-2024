import React, { useContext } from 'react'
import classes from "./product.module.css"
// : material ui rating for rating
import Rating from "@mui/material/Rating"
// : numeral js for number counting in my CurrencyFormat Component
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat'
// ` a tag to Link
import { Link } from 'react-router-dom'
import { DataContext } from '../DataProvider/DataProvider'
import { Type } from '../../Utility/action.type'


// ` Destructure the fetched product from Product component
const ProductCard = ({product,flex,renderDetail}) => {

    // ` Destructure the items in product
    const { image,title, id, rating, price,description } = product
    // console.log(product);

    // ` use useContext to import DataContext so we can access state and dispatch from useReducer

    const [state,dispatch] = useContext(DataContext)

    //` we can access the state when add to cart get clicked 
    // console.log(state);
    

// `
   const addToCart = () => {
    // ` dispatch the action to add the product to the basket
    dispatch({
        type:Type.ADD_TO_BASKET,
        item:{
            image,title, id, rating, price,description 
        }
    })

   }






    // ` To limit the css to the class it's called (add this by myself)
    const cardClass = `${classes.card_container} ${flex ? classes.product_flexed : ""} ${renderDetail ? classes.no_hover : ""}`
  return (
    <div className={cardClass}>

        <Link to={`/products/${id}`}>
            <img src={image} alt="" />
        </Link>
        <div>
            <h3>{title}</h3>
            {/* if renderDetail is true in ProductDetail component */}
            {renderDetail && <div style={{maxWidth:"750px"}}>
                {description}
                </div>}
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
        <button 
        className={classes.button}
        onClick={addToCart}
        >
            add to cart
        </button>
        </div>
        
    </div>
  )
}

export default ProductCard