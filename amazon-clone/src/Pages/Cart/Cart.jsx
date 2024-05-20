import React, { useContext } from 'react'
import classes from "./cart.module.css"
import LayOut from '../../Components/LayOut/LayOut'
import { DataContext } from '../../Components/DataProvider/DataProvider'
import ProductCard from "../../Components/Product/ProductCard"
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat'
import { Link } from 'react-router-dom'

const Cart = () => {
// ` to access the state
   const [{basket, user}, dispatch] = useContext(DataContext)

  //  ` to access the total price we can use reducer method.
  const total = basket.reduce((amount,item)=>{
    // ` amount is the previous price so it will be (previous price + new price)
      return item.price + amount
      // console.log(item);
  },0)  //`0 is the initial value
  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.card_container}>
          <h2>Hello</h2>
          <h3>Your shopping basket</h3>
          <hr />
          {
            basket?.length === 0?(<p>oops! No item in your cart</p>):(
              basket?.map((item)=>(
                <ProductCard
                product={item}
                renderDetail={true}
                key={item.id}
                flex={true}
                renderButton={false}
                
                />
              ))
            )
          }
        </div>

        {
            basket?.length !== 0 && (
            <div className={classes.subtotal}>
              <div>
                <p>Subtotal ({basket?.length} items)</p>
                <CurrencyFormat
                amount={total}
                />
              </div> 
              <span>
                <input type="checkbox" />
                <small>This order contains a gift</small>
              </span>  

                 { /*payment button  */}
                 <Link to ="/payments">
                 Continue to check out
                 </Link>

             </div>
            )
          }
       
      </section>
    </LayOut>
  )
}

export default Cart