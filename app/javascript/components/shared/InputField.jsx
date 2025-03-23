import React from 'react'
import styled from 'styled-components'

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

const InputField = ({ onChange, type, name, placeholder, value }) => {
  return (
    <Field>
      <input
        onChange={onChange}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
      />
    </Field>
  )
}

export default InputField
