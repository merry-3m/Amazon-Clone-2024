import React from 'react'
import amazonLogo from "../../assets/images/amazonLogo.png"
import flag from "../../assets/images/flag.png"
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BsCart } from "react-icons/bs";
import classes from "./header.module.css"
import LowerHeader from './LowerHeader';


const Header1 = () => {
  return (
    <>
      <section>
        <section className= {classes.header_container}>
           {/* Logo */}
          <div className={classes.logo_container}>
            <a href="/">
              <img src={amazonLogo} alt="amazonLogo" />
            </a>
            {/* Delivery */}
           <div className={classes.delivery}>
           <span>
              <SlLocationPin />
            </span>
            <div>
              <p>Delivered to:</p>
              <span>Ethiopia</span>
            </div>
           </div>
          </div>
          
            {/* Search Bar */}

          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" name='id' placeholder='search product'/>
            <BsSearch size={25} />
          </div>

          {/* Right Side */}

          <div className={classes.order_container}>

             <a href="" className={classes.language}>
             <img src={flag} alt="Flag" />
              <select name="" id="">
                <option value="">EN</option>
              </select>
             </a>
          {/* three components */}
          <a href="">
            <div>
              <p>Sign In</p>
              <span>Account & Lists</span>
            </div>
          </a>

          {/* Orders */}
          <a href="">
            <p>returns</p>
            <span>&orders</span>
          </a>

          {/* Cart */}
          <a href='' className={classes.cart}>
          <BsCart size={35} />
            <span>0</span>
          </a>
          </div>
        </section>

      </section>
      <LowerHeader/>
      
    </>
  )
}

export default Header1