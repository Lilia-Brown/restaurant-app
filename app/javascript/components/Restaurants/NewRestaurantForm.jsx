import AddressField from './AddressField'
import CreateForm from '../shared/CreateForm'
import InputField from '../shared/InputField'
import React from 'react'
import styled from 'styled-components'

const RestaurantHeadline = styled.div`
  font-size:20px;
  padding: 15px 0;
  font-weight: bold;
`

const NewRestaurantForm = ({ newRestaurant, handleChange, handleSubmit, handleAddressChange }) => {
  return (
    <CreateForm
      handleSubmit={handleSubmit}
      objectName='Restaurant'
    >
      <RestaurantHeadline>Want to add a new Restaurant?</RestaurantHeadline>
      <InputField
        onChange={handleChange}
        type='text'
        name='name'
        placeholder='Restaurant Name'
        value={newRestaurant.name}
      />
      <InputField
        onChange={handleChange}
        type='text'
        name='cuisine'
        placeholder='Restaurant Cuisine'
        value={newRestaurant.cuisine}
      />
      <InputField
        onChange={handleChange}
        type='text'
        name='img_url'
        placeholder='Restaurant Image URL'
        value={newRestaurant.img_url}
      />
      <InputField
        onChange={handleChange}
        type='text'
        name='website'
        placeholder='Restaurant Website'
        value={newRestaurant.website}
      />
      <AddressField
        address={newRestaurant.address}
        handleAddressChange={handleAddressChange}
      />
    </CreateForm>
  )
}

export default NewRestaurantForm
