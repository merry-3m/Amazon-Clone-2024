import React from 'react'
import Header1 from '../Header/Header1'

// ` So when we call LayOut Component the header and the children will have the same order as LayOut function

const LayOut = ({children}) => {
  return (
    <div>
        <Header1/>
        {children}
    </div>
  )
}

export default LayOut