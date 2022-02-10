import React from "react"
import "./card.styles.css"

export const Card = (props) => {
  return (
    <div className='card-container'>
      <img
        src={`https://robohash.org/${props.cat.id}?set=set4&size=180x180`}
        alt=''
      />
      <h2>{props.cat.name}</h2>
      <h3>{props.cat.email}</h3>
    </div>
  )
}
