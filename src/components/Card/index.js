import React from 'react'
import './style.css';

export const Card = ({monster}) => {
  return (
    <div className="card-container">
      <h1>
        <img alt={monster.name} src={`https://robohash.org/${monster.id}?set=set1&size=180x180`}/>
        {monster.name}
      </h1>
      <p>
        {monster.email}
      </p>
    </div>
  )
}