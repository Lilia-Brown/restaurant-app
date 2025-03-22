import axios from 'axios'
import React, { useState, useEffect } from 'react'
import RestaurantItem from './RestaurantItem'
import styled from 'styled-components'

const Wrapper = styled.div`
  text-align: center;
  margin: 0 auto;
  max-width: 600px;
  padding: 20px;
`
const RestaurantHeader = styled.div`
  color: #333;
  font-size: 2rem;
  margin-top: 20px;
`
  const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
`
const Error = styled.div`
  width: 100%;
  color: rgb(255, 80, 44);
  border: 1px solid rgb(255, 80, 44);
  border-radius: 4px;
  margin-top: 8px;
  text-align:center;
  padding: 4px;
`

const Restaurants = () => {
  const [error, setError] = useState('')
  const [restaurants, setRestaurants] = useState([])
  const restaurantUrl = '/api/v1/restaurants'

  const catchError = (error) => { setError(error.message) }

  useEffect(() => {
    axios.get(`${restaurantUrl}.json`)
      .then(response => {
        setRestaurants(response.data.data)
        setError('')
      })
      .catch(catchError);
  }, [])

  const resaurantList = restaurants.map((restaurant, index) => {
    return (
      <RestaurantItem key={index} attributes={restaurant.attributes} />
    )
  })

  return (
    <Wrapper>
      <RestaurantHeader>I Sure Do Like to Eat</RestaurantHeader>

      <List>
        {resaurantList}
      </List>
      {
        error &&
        <Error>{error}</Error>
      }
    </Wrapper>
  )
}

export default Restaurants
