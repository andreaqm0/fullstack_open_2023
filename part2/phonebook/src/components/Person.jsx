import React from 'react'
import personsServ from '../services/persons'

const Person = ({ person, persons, setPersons }) => {
  function removeObjectWithId(id) {
    const arr = [...persons]
    const objWithIdIndex = arr.findIndex((obj) => obj.id === id);
    if (objWithIdIndex > -1) {
      arr.splice(objWithIdIndex, 1);
    }
    return arr;
  }

  function del() {
    personsServ.del(person.id).then(() => {
      setPersons(removeObjectWithId(person.id))
    })
  }

  function warning() {
    if (window.confirm(`Delete ${person.name}?`)) {
      del()
    }
  }
  return (
    <div>
      <span>{person.name} 📞 {person.number} </span>
      <button onClick={warning}>delete</button>
    </div>

  )
}

export default Person