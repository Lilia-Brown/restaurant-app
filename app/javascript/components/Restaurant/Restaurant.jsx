import AddressField from '../Restaurants/AddressField'
import axios from 'axios'
import CustomButton from '../shared/CustomButton'
import CustomError from '../shared/CustomError'
import InputField from '../shared/InputField'
import { Link } from 'react-router-dom'
import React, { Fragment, useState, useEffect } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  text-align: center;
  margin: 0 auto;
  max-width: 600px;
  padding: 20px;
`
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
  const [address, setAddress] = useState('')
  const [error, setError] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [restaurant, setRestaurant] = useState([])
  const slug = window.location.pathname.split('/')[2]
  const restaurantUrl = `/api/v1/restaurants/${slug}`

  const catchError = (error) => { setError(error.message) }

  // Set restaurant
  useEffect(() => {
    const slug = window.location.pathname.split('/')[2]
    axios.get(`${restaurantUrl}.json`)
      .then(response => {
        setRestaurant(response.data.data.attributes)
      })
      .catch(catchError)
      .finally(setLoaded(true))
  }, [])

  // Update restaurant details
  const saveRestaurant = () => {
    const slug = window.location.pathname.split('/')[2]
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

  return (
    <Wrapper>
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
          <CustomError error={error} />
        </Fragment>
      }
    </Wrapper>
  )
}

export default Restaurant
