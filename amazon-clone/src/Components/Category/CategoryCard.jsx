// ` We are building this component for one card 

import React from 'react'
import classes from "./category.module.css"
// ` change a tag to Link
import { Link } from "react-router-dom"

const CategoryCard = ({data}) => { //` We are destructuring the props data from category component
  // console.log(data);
  return (
    <div className={classes.category}>

        <Link to={`/category/${data.name}`}>
            <span>
                <h2>{data.title}</h2>
            </span>
            <img src={data.imgLink} alt="" />
            <p>Shop now</p>

        </Link>
    </div>
  )
}

export default CategoryCard