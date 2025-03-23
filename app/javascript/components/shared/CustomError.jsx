import React, { Fragment } from 'react'
import styled from 'styled-components'

const Error = styled.div`
  width: 100%;
  color: rgb(255, 80, 44);
  border: 1px solid rgb(255, 80, 44);
  border-radius: 4px;
  margin-top: 8px;
  text-align:center;
  padding: 4px;
`

const CustomError = ({ error }) => {
  return (
    <Fragment>
      {
        error &&
        <Error>{error}</Error>
      }
    </Fragment>
  )
}

export default CustomError
