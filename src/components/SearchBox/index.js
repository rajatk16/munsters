import React from 'react'
import './style.css';

export const SearchBox = ({placeholder, searchField, handleChange}) =>  {
  return (
    <input 
      className="search"
      type="search" 
      placeholder={placeholder}
      value={searchField}
      onChange={handleChange}  
    />
  )
}