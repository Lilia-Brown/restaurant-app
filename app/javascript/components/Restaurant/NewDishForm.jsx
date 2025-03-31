import CreateForm from '../shared/CreateForm'
import InputField from '../shared/InputField'
import React from 'react'

const NewDishForm = ({newDish, handleChange, handleSubmit }) =>{
  return (
    <CreateForm
      handleSubmit={handleSubmit}
      objectName='Dish'
    >
      <InputField
        onChange={handleChange}
        type='text'
        name='name'
        placeholder='Dish Name'
        value={newDish.name}
      />
      <InputField
        onChange={handleChange}
        type='text'
        name='description'
        placeholder='Dish Description'
        value={newDish.description}
      />
      <InputField
        onChange={handleChange}
        type='text'
        name='img_url'
        placeholder='Dish Image URL'
        value={newDish.img_url}
      />
    </CreateForm>
  )
}

export default NewDishForm
