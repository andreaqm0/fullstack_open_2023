import React, { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personsServ from './services/persons'

import './App.css'
import Message from './components/Message'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')
  const [messagge, setMessage] = useState({succes: false, text: ''})

  const changeHandler = (e) => {
    setFilter(e.target.value)
  }

  useEffect(() => {
    personsServ
      .getAll()
      .then(data => setPersons(data))
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Message msg={messagge} setMessage={setMessage} />
      <Filter filter={filter} changeHandler={changeHandler} />
      <h2>add a new</h2>
      <PersonForm persons={persons} setPersons={setPersons} setMessage={setMessage} />
      <h2>Numbers</h2>
      <Persons persons={persons} setPersons={setPersons} filter={filter} />
    </div>
  )
}

export default App