import axios from 'axios'
import Button from '@mui/material/Button'
import CustomButton from '../shared/CustomButton'
import NewRestaurantForm from './NewRestaurantForm'
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
const ButtonWrapper = styled.div`
  text-align: center;
  padding-top: 20px;
  color: #74c6e1;
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
  const defaultRestaurant = { name: '', cuisine: '', website: '', img_url: '', address: '' }
  const [error, setError] = useState('')
  const [isCreating, setIsCreating] = useState(false)
  const [newRestaurant, setNewRestaurant] = useState(defaultRestaurant)
  const [restaurants, setRestaurants] = useState([])
  const restaurantUrl = '/api/v1/restaurants'

  const catchError = (error) => { setError(error.message) }

  // Set restaurants
  useEffect(() => {
    axios.get(`${restaurantUrl}.json`)
      .then(response => {
        setRestaurants(response.data.data)
        setError('')
      })
      .catch(catchError);
  }, [])

  // Modify text in restaurant form
  const handleChange = (e) => {
    setNewRestaurant({ ...newRestaurant, [e.target.name]: e.target.value })
  }

  // Create a new restaurant
  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post(restaurantUrl, { ...newRestaurant })
    .then( (resp) => {
      setRestaurants([...restaurants, resp.data.data])
      setNewRestaurant(defaultRestaurant)
      setError('')
    })
    .catch(catchError)
    .finally(() => setIsCreating(false))
  }

  // Show form when adding a new restaurant
  const showForm = () => {
    setIsCreating(true)
    setError('')
  }

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

      { !isCreating &&
        <CustomButton onClick={showForm} buttonText='Add Restaurant' />
      }

      {
        isCreating &&
        <NewRestaurantForm
          newRestaurant={newRestaurant}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      }

      {
        error &&
        <Error>{error}</Error>
      }
    </Wrapper>
  )
}

export default Restaurants
