import React from 'react'

const Message = ({msg}) => {
  return (
    <div className={`msg ${!msg.success && !msg.text ? 'hidden' : msg.success ? 'success' : 'error'}`}>{msg.text}</div>
  )
}

export default Message