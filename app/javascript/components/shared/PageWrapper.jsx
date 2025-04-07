import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
  text-align: center;
  margin: 0 auto;
  max-width: 600px;
  padding: 20px;
`

const PageWrapper = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

export default PageWrapper
