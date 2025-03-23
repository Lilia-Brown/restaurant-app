import Button from '@mui/material/Button'
import React from 'react'
import styled from 'styled-components'

const ButtonWrapper = styled.div`
  padding-top: 20px;
  color: #74c6e1;
`

const CustomButton = ({ onClick, buttonText }) => {
  return (
    <ButtonWrapper>
      <Button
        variant='contained'
        color='#74c6e1'
        onClick={onClick}
      >
        {buttonText}
      </Button>
    </ButtonWrapper>
  )
}

export default CustomButton
