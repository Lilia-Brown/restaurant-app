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
const Field = styled.div`
  border-radius: 4px;

  input {
    width: 96%;
    min-height:20px;
    border-radius: 4px;
    border: 1px solid #E6E6E6;
    margin: 10px 0;
    padding: 10px;
  }

  textarea {
    width: 100%;
    border-radius: 4px;
    border: 1px solid #E6E6E6;
    margin: 10px 0;
    padding: 10px;      
  }
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
const NewRestaurantForm = ({ newRestaurant, handleChange, handleSubmit }) =>{
  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <RestaurantHeadline>Want to add a new Restaurant?</RestaurantHeadline>
        <Field>
          <input
            onChange={handleChange}
            type='text'
            name='name'
            placeholder='Restaurant Name'
            value={newRestaurant.name}
          />
        </Field>
        <Field>
          <input
            onChange={handleChange}
            type='text'
            name='cuisine'
            placeholder='Restaurant Cuisine'
            value={newRestaurant.cuisine}
          />
        </Field>
        <Field>
          <input
            onChange={handleChange}
            type='text'
            name='img_url'
            placeholder='Restaurant Image URL'
            value={newRestaurant.img_url}
            />
        </Field>
        <Field>
          <input
            onChange={handleChange}
            type='text'
            name='website'
            placeholder='Restaurant Website'
            value={newRestaurant.website}
          />
        </Field>
        <SubmitBtn type='Submit'>Create Restaurant</SubmitBtn>
      </form>
    </FormWrapper>
  )
}

export default NewRestaurantForm
