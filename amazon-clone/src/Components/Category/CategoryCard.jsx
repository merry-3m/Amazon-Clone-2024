// ` We are building this component for one card 

import React from 'react'
import classes from "./category.module.css"

const CategoryCard = ({data}) => { //` We are destructuring the props data from category component
  return (
    <div className={classes.category}>

        <a href="">
            <span>
                <h2>{data.title}</h2>
            </span>
            <img src={data.imgLink} alt="" />
            <p>Shop now</p>

        </a>
    </div>
  )
}

export default CategoryCard