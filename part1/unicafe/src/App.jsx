import { useState } from "react"

const Button = (props) => {
  return(
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const StatisticLine = ({text, value}) => {
  // console.log(text, value)
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({feedback}) => {
  const {good, neutral, bad} = feedback

  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = (good / all) * 100

  if (all){
    return (
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={positive} />
        </tbody>
      </table>
    )
  }
  console.log(feedback, all)
  return (
    <>
      No feedback available
    </>
  )
}

const App = () => {
  // const [good, setGood] = useState(0)
  // const [neutral, setNeutral] = useState(0)
  // const [bad, setBad] = useState(0)

  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  })

  const handleGood = () =>{
    const newFeedback = {
      ...feedback,
      good: feedback.good + 1,
    }
    console.log(newFeedback)
    setFeedback(newFeedback)
  }

  const handleNeutral = () => {
    const newFeedback = {
      ...feedback,
      neutral: feedback.neutral + 1
    }
    console.log(newFeedback)
    setFeedback(newFeedback)
  }

  const handleBad = () => {
    const newFeedback = {
      ...feedback,
      bad: feedback.bad + 1
    }
    console.log(newFeedback)
    setFeedback(newFeedback)
  }

  // const setToGood = () => {
  //   setGood(good + 1)
  // }
  // const setToNeutral = () => {
  //   setNeutral(neutral + 1)
  // }
  // const setToBad = () => {
  //   setBad(bad + 1)
  // }

  return (
    <>
      <h1>give feedback</h1>

      <Button handleClick={handleGood} text="good" />
      <Button handleClick={handleNeutral} text="neutral" />
      <Button handleClick={handleBad} text="bad" />


      <h1>statistics</h1>
      <Statistics feedback={feedback} />
      {/* <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive}</p>
      <Statistics text="all" value={all} />
      <Statistics text="average" value={average} />
      <Statistics text="positive" value={positive} /> */}
    </>
  )
}

export default App
