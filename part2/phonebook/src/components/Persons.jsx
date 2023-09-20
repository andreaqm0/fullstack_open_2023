import React from 'react'
import Person from './Person'

const Persons = ({persons, setPersons, filter}) => {
  return (
    <div>
        {
          persons.filter(e => e.name.toUpperCase().startsWith(filter.toUpperCase()) || e.number.startsWith(filter)).map(person => (
            <Person key={person.id} person={person} persons={persons} setPersons={setPersons} />
          ))
        }
      </div>
  )
}

export default Persons