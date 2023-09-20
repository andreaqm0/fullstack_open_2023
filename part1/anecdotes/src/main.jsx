import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0, 0, 0, 0, 0, 0])

  function random() { // min and max included 
    return Math.floor(Math.random() * 6)
  }

  const next = () => {
    let newNum
    while (true) {
      newNum = random()
      if (newNum !== selected) break
    }
    setSelected(newNum)
  }

  const mostVoted = () => {
    const max = Math.max(...points);
    const index = points.indexOf(max);
    return index
  }

  const vote = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }



  return (
    <>
      <h2>Anecdote of the day</h2>
      <div>{anecdotes[selected]}</div>
      <div>has {points[selected]} votes</div>
      <button onClick={vote}>vote</button>
      <button onClick={next}>next anecdote</button>

      <h2>Anecdote with most votes</h2>
      <div>{anecdotes[mostVoted()]}</div>
      <div>has {points[mostVoted()]} votes</div>

    </>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


ReactDOM.createRoot(document.getElementById('root')).render(<App anecdotes={anecdotes} />)
