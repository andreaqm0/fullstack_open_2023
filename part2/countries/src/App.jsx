import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Countries from './components/Countries'
import Country from './components/Country'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  const changeHandler = e => setFilter(e.target.value)

  const FilteredCountries = countries.filter(c => c.name.common.toUpperCase().startsWith(filter.toUpperCase()))

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(res => res.data)
      .then(data => setCountries(data))
  }, [])

  return (
    <>
      <div>
        find countries <input type="text" value={filter} onChange={changeHandler} />
      </div>
      <div>
        {
          FilteredCountries.length > 10
            ? <span>Too many matches, specify another filter</span>
            : FilteredCountries.length > 1
              ? <Countries countries={FilteredCountries} setFilter={setFilter} />
              : FilteredCountries.length > 0 
                ? <Country country={FilteredCountries[0]} />
                : <span>No matches found</span>

        }
      </div>
    </>
  )
}

export default App