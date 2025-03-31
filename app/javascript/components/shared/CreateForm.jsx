import InputField from '../shared/InputField'
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

const CreateForm = ({ handleSubmit, objectName, children }) => {
  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        {children}
        <SubmitBtn type='Submit'>Create {objectName}</SubmitBtn>
      </form>
    </FormWrapper>
  )
}

export default CreateForm
