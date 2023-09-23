import React from 'react'

const Message = ({msg, setMessage}) => {
  return (
    <div className={`msg ${!msg.success && !msg.text ? 'hidden' : msg.success ? 'success' : 'error'}`}>
      {msg.text}
      <button onClick={() => setMessage({succes: false, text: ''})}>x</button>
      </div>
  )
}

export default Message