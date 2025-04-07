import axios from 'axios'
import CustomError from '../shared/CustomError'
import PageWrapper from '../shared/PageWrapper'
import React, { Fragment, useState, useEffect } from 'react'
import styled from 'styled-components'

const Table = styled.ul`
  text-align: left;
  list-style-type: none;
  padding-left: 100px;
  li {
    margin: 10px 0;
    font-size: 1rem;
  }
`

const Dishes = () => {
  const [dishes, setDishes] = useState([])
  const [error, setError] = useState('')
  const [loaded, setLoaded] = useState(false)
  const [tags, setTags] = useState([])

  const dishUrl = '/api/v1/dishes'

  const catchError = (error) => { setError(error.message) }

  // Set Dishes and Tags
  useEffect(() => {
    axios.get(`${dishUrl}.json`)
      .then(response => {
        setDishes(response.data.data)
        setTags(response.data.included)
      })
      .catch(catchError)
      .finally(setLoaded(true))
  }, [])

  // Set dishes
  let allDishes

  if (dishes && dishes.length > 0) {
    allDishes = dishes.map( (dish) => {
      <div>{dish.attributes.name}</div>
      return (
        <li key={dish.attributes.id}>
          <h3>{dish.attributes.name}</h3>
          <p>{dish.attributes.description}</p>
          <img src={dish.attributes.img_url} alt={dish.attributes.name} width="200" />
          <p>
            Tags: {
              dish.relationships.tags.data.map((tag) => {
                const tagObj = tags.find((t) => t.id === tag.id)
                return (
                  <span key={tag.id}>
                    {tagObj.attributes.name}
                    {dish.relationships.tags.data.length > 1 && ', '}
                  </span>
                )
              })
            }
          </p>
        </li>
      )
    })
  }

  return (
    <PageWrapper>
      {
        loaded &&
        <Fragment>
          <CustomError error={error} />

          <Table>
            <ul>
              {allDishes}
            </ul>
          </Table>
        </Fragment>
      }
    </PageWrapper>
  )
}

export default Dishes
