import InputField from '../shared/InputField'
import AddressField from './AddressField'
import React from 'react'
import styled from 'styled-components'

const FormWrapper = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin: 10px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
`
const RestaurantHeadline = styled.div`
  font-size:20px;
  padding: 15px 0;
  font-weight: bold;
`
const SubmitBtn = styled.button`
  color: #fff;
  background-color: #74c6e1;
  border-radius: 4px;   
  padding:12px 12px;  
  border: 1px solid #74c6e1;
  width:100%;
  font-size:18px;
  cursor: pointer;
  transition: ease-in-out 0.2s;
  &:hover {
    background: #74c6e1;
    border-color: #74c6e1;
  }
`
const NewRestaurantForm = ({ newRestaurant, handleChange, handleSubmit, handleAddressChange }) => {
  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
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
        <SubmitBtn type='Submit'>Create Restaurant</SubmitBtn>
      </form>
    </FormWrapper>
  )
}

export default NewRestaurantForm
