import React from 'react'
import Person from './Person'

const Persons = ({persons, filter}) => {
  return (
    <div>
        {
          persons.filter(e => e.name.toUpperCase().startsWith(filter.toUpperCase()) || e.number.startsWith(filter)).map(person => (
            <Person key={person.id} person={person} />
          ))
        }
      </div>
  )
}

export default Persons