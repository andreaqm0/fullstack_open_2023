import React from 'react'

const Filter = ({filter, changeHandler}) => {
  return (
    <div>
        filter shown with <input type="text" value={filter} onChange={changeHandler} />
      </div>
  )
}

export default Filter