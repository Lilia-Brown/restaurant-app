import AddressField from '../Restaurants/AddressField'
import axios from 'axios'
import CustomButton from '../shared/CustomButton'
import CustomError from '../shared/CustomError'
import Dish from './Dish'
import InputField from '../shared/InputField'
import { Link } from 'react-router-dom'
import NewDishForm from './NewDishForm'
import PageWrapper from '../shared/PageWrapper'
import React, { Fragment, useState, useEffect } from 'react'
import styled from 'styled-components'

const Header = styled.div`
  color: #333;
  font-size: 2rem;
  margin-top: 20px;
  margin-bottom: 20px;
`
const Image = styled.div`
  img {
    height: 100px;
    width: 100px;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 10%;
    padding: 10px;
  }
`
const Table = styled.ul`
  text-align: left;
  list-style-type: none;
  padding-left: 100px;
  li {
    margin: 10px 0;
    font-size: 1rem;
  }
`

const Restaurant = () => {
  const defaultDish = { name: '', description: '', img_url: '' , restaurant_id: '' }

  const [address, setAddress] = useState('')
  const [dishes, setDishes] = useState([])
  const [error, setError] = useState('')
  const [isCreating, setIsCreating] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [newDish, setNewDish] = useState(defaultDish)
  const [restaurant, setRestaurant] = useState([])

  const slug = window.location.pathname.split('/')[2]
  const dishUrl = '/api/v1/dishes'
  const restaurantUrl = `/api/v1/restaurants/${slug}`

  const catchError = (error) => { setError(error.message) }

  // Set restaurant
  useEffect(() => {
    const slug = window.location.pathname.split('/')[2]
    axios.get(`${restaurantUrl}.json`)
      .then(response => {
        setRestaurant(response.data.data.attributes)
        setDishes(response.data.included)
      })
      .catch(catchError)
      .finally(setLoaded(true))
  }, [])

  // Set dishes
  let faveDishes

  if (dishes && dishes.length > 0) {
    faveDishes = dishes.map( (dish, index) => {
      return (
        <Dish
          key={index}
          id={dish.id}
          attributes={dish.attributes}
        />
      )
    })
  }

  // Update restaurant details
  const saveRestaurant = () => {
    restaurant.address = address

    axios.patch(restaurantUrl, { ...restaurant })
    .then( (resp) => {
      setRestaurant(resp.data.data.attributes)
      setError('')
    })
    .catch(catchError)
    .finally(() => setIsEditing(false))
  }

  // Show fields for Restaurant edit
  const enableEditing = () => {
    setIsEditing(true)
  }

  // Modify text in Restaurant fields
  const handleEdit = (e) => {
    setRestaurant(Object.assign({}, restaurant, {[e.target.name]: e.target.value}))
  }

  // Handle address separately
  const handleAddressChange = (place) => {
    if (place.geometry) {
      setAddress(place.formatted_address)
    }
  }

  // Show form for adding dish
  const showForm = () => {
    setIsCreating(true)
    setError('')
  }

  // Modify text in Dish fields
  const handleChange = (e) => {
    setNewDish(Object.assign({}, newDish, {[e.target.name]: e.target.value}))
  }

  // Create a dish
  const handleSubmit = (e) => {
    e.preventDefault()
    newDish.restaurant_id = restaurant.id
    
    axios.post(dishUrl, { ...newDish })
    .then( (resp) => {
      setDishes([...dishes, resp.data.data])
      setNewDish(defaultDish)
      setError('')
    })
    .catch(catchError)
    .finally(() => setIsCreating(false))
  }

  return (
    <PageWrapper>
      {
        loaded &&
        <Fragment>
          <Header>{restaurant.name}</Header>
          <Image>
            <img src={restaurant.img_url} alt={restaurant.name} />
          </Image>
          <CustomButton
            onClick={() => { isEditing ? saveRestaurant() : enableEditing() }}
            buttonText={ isEditing ? 'Save' : 'Edit' }
          />
          <Table>
            <li key='cuisine'>Cuisine:&nbsp;
              { isEditing ?
                <InputField
                  onChange={handleEdit}
                  type='text'
                  name='cuisine'
                  placeholder='Restaurant Cuisine'
                  value={restaurant.cuisine}
                /> :
                restaurant.cuisine
              }
            </li>
            <li key='website'>Website:&nbsp;
              { isEditing ?
                <InputField
                  onChange={handleEdit}
                  type='text'
                  name='website'
                  placeholder='Restaurant Website'
                  value={restaurant.website}
                /> :
                <Link to={restaurant.website} target='_blank' rel='noopener noreferrer'>
                  {restaurant.website}
                </Link>
              }
            </li>
            <li key='address'>Address:&nbsp;
              { isEditing ?
                <AddressField
                  address={address}
                  handleAddressChange={handleAddressChange}
                  defaultValue={restaurant.address}
                /> :
                restaurant.address
              }
            </li>
          </Table>

          { !isCreating &&
            <CustomButton
              onClick={() => { showForm() }}
              buttonText='Add Dish'
            />
          }

          { 
            isCreating &&
            <NewDishForm
              newDish={newDish}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          }

          <CustomError error={error} />

          <Table>
            {faveDishes}
          </Table>
        </Fragment>
      }
    </PageWrapper>
  )
}

export default Restaurant
