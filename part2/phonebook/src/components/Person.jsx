import React from 'react'

const Person = ({person}) => {
  return (
    <div>{person.name} 📞 {person.number}</div>
  )
}

export default Person