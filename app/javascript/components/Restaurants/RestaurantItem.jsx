import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Card = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin: 10px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
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
const LinkWrapper = styled.div`
  margin: 30px 0 30px 0;
  a {
    color: #fff;
    background-color: #74c6e1;
    border-radius: 4px;
    padding: 10px 50px;
    cursor: pointer;
    border-radius: 3px;
    border: 1px solid #74c6e1;
    text-align: center;
    line-height: 20px;
    min-height: 40px;
    margin: 7px;
    font-weight: 600;
    text-decoration: none;
    width: 100%;
    transition: ease-in-out 0.1s;

    &:hover{
      border-color: #74c6e1;
      background: #74c6e1;
    }
`

const RestaurantItem = (props) => {
  return(
    <Card>
      <Image>
        <img src={props.attributes.img_url} alt={props.attributes.name} />
      </Image>
      <LinkWrapper key={props.attributes.id}>
        <Link to={`/restaurants/${props.attributes.slug}`}>
          {props.attributes.name}
        </Link>
      </LinkWrapper>
    </Card>
  )
}

export default RestaurantItem
