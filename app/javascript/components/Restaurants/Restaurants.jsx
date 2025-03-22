import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([])
  useEffect(() => {
    axios.get('/api/v1/restaurants.json')
      .then(response => {
        setRestaurants(response.data.data)
      })
      .catch(error => {
        console.error('There was an error fetching the restaurants!', error);
      });
  }, [])
  return (
    <div>
      <h1>Restaurants</h1>
      <ul>
        {restaurants.map(restaurant => (
          <li key={restaurant.attributes.id}>{restaurant.attributes.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Restaurants
