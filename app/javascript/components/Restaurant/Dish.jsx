import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Card = styled.div`
  text-align: center;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin: 10px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`

const Image = styled.div`
  img {
    height: 200px;
    border: 1px solid rgba(0,0,0,0.1);
  }
`

const Dish = (props) => {
  const dish = props.attributes
  return(
    <Card>
      <li key='name'>{dish.name}</li>
      <li key='description'><i>{dish.description}</i></li>
      <Image>
        <img src={dish.img_url} alt={dish.name} />
      </Image>
    </Card>
  )
}

export default Dish
