import React from 'react'
import classes from "./footer.module.css"

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.topButton}>
        <button>Back to top</button>
      </div>     
    </div>
  )
}

export default Footer