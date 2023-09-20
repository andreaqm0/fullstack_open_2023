import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const getTotal = () => good + neutral + bad
  const addGoodFeedback = () => setGood(good + 1)
  const addNeutralFeedback = () => setNeutral(neutral + 1)
  const addBadFeedback = () => setBad(bad + 1)

  return (
    <>
      <h1>Give Feedback</h1>
      <Button action={addGoodFeedback} text="good" />
      <Button action={addNeutralFeedback} text="neutral" />
      <Button action={addBadFeedback} text="bad" />
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
      <table>
        <tbody>
          <StatisticRow text="good" value={good} />
          <StatisticRow text="neutral" value={neutral} />
          <StatisticRow text="bad" value={bad} />
          <StatisticRow text="all" value={total} />
          <StatisticRow text="average" value={((good - bad) / (total)) || 0} />
          <StatisticRow text="positive" value={((good / total) || 0) + '%'} />
        </tbody>
      </table>
    </>
  )
}

const Button = ({ text, action }) => {
  return (
    <button onClick={action}>{text}</button>
  )
}

const StatisticRow = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)
root.render(<App />)
