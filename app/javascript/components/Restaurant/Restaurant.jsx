import axios from 'axios'
import { Link } from 'react-router-dom'
import React, { Fragment, useState, useEffect } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  text-align: center;
  margin: 0 auto;
  max-width: 600px;
  padding: 20px;
`
const Header = styled.div`
  color: #333;
  font-size: 2rem;
  margin-top: 20px;
  margin-bottom: 20px;
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
const Table = styled.ul`
  text-align: left;
  list-style-type: none;
  padding-left: 100px;
  li {
    margin: 10px 0;
    font-size: 1rem;
  }
`

const Restaurant = () => {
  const [loaded, setLoaded] = useState(false)
  const [restaurant, setRestaurant] = useState([])

  useEffect(() => {
    const slug = window.location.pathname.split('/')[2]
    axios.get(`/api/v1/restaurants/${slug}.json`)
      .then(response => {
        setRestaurant(response.data.data.attributes)
      })
      .catch(error => {
        console.error('There was an error fetching the restaurant!', error);
      })
      .finally(setLoaded(true))
  }, [])

  return (
    <Wrapper>
      {
        loaded &&
        <Fragment>
          <Header>{restaurant.name}</Header>
          <Image>
            <img src={restaurant.img_url} alt={restaurant.name} />
          </Image>
          <Table>
            <li key='cuisine'>Cuisine:&nbsp;
              {restaurant.cuisine}
            </li>
            <li key='website'>Website:&nbsp;
              <Link to={restaurant.website} target='_blank' rel='noopener noreferrer'>
                {restaurant.website}
              </Link>
            </li>
            <li key='address'>Address:&nbsp;
              {restaurant.address}
            </li>
          </Table>
        </Fragment>
      }
    </Wrapper>
  )
}

export default Restaurant
