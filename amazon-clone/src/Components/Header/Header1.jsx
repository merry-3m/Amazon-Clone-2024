import React, { useContext } from 'react'
import amazonLogo from "../../assets/images/amazonLogo.png"
import flag from "../../assets/images/flag.png"
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BsCart } from "react-icons/bs";
import classes from "./header.module.css"
import LowerHeader from './LowerHeader';

// ` <a> tag will make the browser to refresh when it get clicked. so use Link instead. Link is used to prevent full page reload
import { Link } from 'react-router-dom';
import { DataContext } from '../DataProvider/DataProvider';


const Header1 = () => {

  // ` access the state but we want the basket so destructure it
  const [{basket},dispatch] = useContext(DataContext)
  // ` to access how many buttons are clicked we can use .length 
  // console.log(basket.length);


  return (
    <>
      <section>
        <section className= {classes.header_container}>
           {/* Logo */}
          <div className={classes.logo_container}>
            <Link to="/">
              <img src={amazonLogo} alt="amazonLogo" />
            </Link>
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

             <Link to="" className={classes.language}>
             <img src={flag} alt="Flag" />
              <select name="" id="">
                <option value="">EN</option>
              </select>
             </Link>
          {/* three components */}
          <Link to="/auth">
            <div>
              <p>Sign In</p>
              <span>Account & Lists</span>
            </div>
          </Link>

          {/* Orders */}
          <Link to="/orders">
            <p>returns</p>
            <span>&orders</span>
          </Link>

          {/* Cart */}
          <Link to='/cart' className={classes.cart}>
          <BsCart size={35} />
            <span>{basket.length}</span>
          </Link>
          </div>
        </section>

      </section>
      <LowerHeader/>
      
    </>
  )
}

export default Header1