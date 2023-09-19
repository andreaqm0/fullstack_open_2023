import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const getTotal = () => good + neutral + bad

  return (
    <>
      <h1>Give Feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      {
        getTotal() > 0 
          ? <Statistics good={good} neutral={neutral} bad={bad} total={getTotal()} />
          : <p>No feedback given</p>
      }
    </>
  )
}

const Statistics = ({ good, neutral, bad, total }) => {
  return (
    <>
      <h2>Statistics</h2>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {total}</div>
      <div>average {((good - bad) / (total)) || 0}</div>
      <div>positive {(good / total) || 0}%</div>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
