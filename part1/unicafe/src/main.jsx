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
      <div>
        <button onClick={() => setGood(good + 1)}>good</button>
        <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
        <button onClick={() => setBad(bad + 1)}>bad</button>
      </div>

      <h2>Statistics</h2>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {getTotal()}</div>
      <div>average {((good - bad) / (getTotal())) || 0}</div>
      <div>positive {(good / getTotal()) || 0}%</div>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
