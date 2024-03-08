import './styles.css'
import React from 'react'

function ItemList({title, description}) {
  return (
    <div className='itemList'>
        <strong>{title}</strong>
        <p>{description}</p>
        <hr/>
    </div>
  )
}

export default ItemList
