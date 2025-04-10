import axios from 'axios'
import CustomButton from '../shared/CustomButton'
import CustomError from '../shared/CustomError'
import NewRestaurantForm from './NewRestaurantForm'
import PageWrapper from '../shared/PageWrapper'
import React, { useState, useEffect } from 'react'
import RestaurantItem from './RestaurantItem'
import styled from 'styled-components'

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

const Restaurants = () => {
  const [address, setAddress] = useState('')
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

  // Handle address separately
  const handleAddressChange = (place) => {
    if (place.geometry) {
      setAddress(place.formatted_address)
    }
  }

  // Create a new restaurant
  const handleSubmit = (e) => {
    e.preventDefault()
    newRestaurant.address = address

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
    <PageWrapper>
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
          handleAddressChange={handleAddressChange}
        />
      }

      <CustomError error={error} />
    </PageWrapper>
  )
}

export default Restaurants
