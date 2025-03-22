import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Restaurant = () => {
  const [restaurant, setRestaurant] = useState([])
  useEffect(() => {
    const slug = window.location.pathname.split('/')[2]
    axios.get(`/api/v1/restaurants/${slug}.json`)
      .then(response => {
        setRestaurant(response.data.data.attributes)
      })
      .catch(error => {
        console.error('There was an error fetching the restaurant!', error);
      });
  }, [])
  return (
    <div>
      <h1>{restaurant.name}</h1>
      <ul>
        <li key='cuisine'>{restaurant.cuisine}</li>
        <li key='website'>{restaurant.website}</li>
      </ul>
      <img src={restaurant.img_url} alt={restaurant.name} width='400' />
    </div>
  )
}

export default Restaurant
