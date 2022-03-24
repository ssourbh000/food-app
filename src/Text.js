import React from 'react'
import "./Text.css"


function Text() {
  return (
    <div style={{display: "flex", flexDirection:"column" ,justifyContent: "center", alignItems:"center"}}>
      <h1>Hey, test your Taste Buds with a new Recipe.</h1>
      <img style={{width: "50%", height: "60vh", borderRadius: "50%"}} src="https://appgrooves.com/cdn/lifegoal/220/e/53014-45519-56524-56048_w1200.png" alt="food" />
    </div>
  )
}

export default Text