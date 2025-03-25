
import axios from 'axios'
import Autocomplete from 'react-google-autocomplete'
import React, { Fragment, useEffect, useState } from 'react'
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

const AddressField = ({ address, handleAddressChange }) => {
  const [environmentVars, setEnvironmentVars] = useState(null)
  const [loaded, setLoaded] = useState(false)
  
  useEffect(() => {
    axios.get('/api/v1/environment').then((response) => { 
      setEnvironmentVars(response.data.public_env_vars)
      setLoaded(true)
    })
  }, [])
  
  return (
    <Fragment>
      {
        loaded &&
        <Field>
          <label htmlFor="address"></label>
          <Autocomplete
            apiKey={environmentVars.google_maps_api_key}
            onPlaceSelected={handleAddressChange}
            options={{
              types: ['address'],
              componentRestrictions: { country: 'us' },
            }}
            id="address"
            placeholder="Restaurant Address"
              defaultValue={address}
            />
          </Field>
      }
    </Fragment>
  )
}

export default AddressField
