import { useState } from 'react'

const Button = ({text, handleClick}) => {
  return  <button onClick={handleClick}>{text}</button>
}

const Anecdote = (props) => {
  return(
    <>
      <h1>{props.headline}</h1>
      <p>
        {props.anecdote}
        <br />
        {'has ' + props.votes + ' votes'}
      </p>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [points, setPoints] = useState(new Uint8Array(anecdotes.length))

  // const [vote, setVote] = useState({})

  const [selected, setSelected] = useState(0)

  const handleNext = () => {
    const len = anecdotes.length
    const random = Math.floor(Math.random() * len)
    setSelected(random)
    // console.log(selected)
  }

  const handleVote = () => {
    const newPoint = [...points]
    newPoint[selected] += 1
    setPoints(newPoint)
    // console.log(points)
  }

  const indexOfMax = (arr) => {
    if (arr.length === 0) return -1
    else {
      let max = arr[0]
      let maxIndex = 0

      for(let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
          maxIndex = i
          max = arr[i]
        }
      }
      return maxIndex
    }
  }

  // const handleVote = () => {
  //   let newVote = {...vote}
  //   if (newVote[selected]) {
  //   newVote[selected] = newVote[selected] + 1
  //   }
  //   else {
  //     newVote[selected] = 1
  //   }

  //   setVote(newVote)
  //   console.log(vote)
  // }


  return (
    <div>
      <Anecdote headline="Anecdote of the day"  anecdote={anecdotes[selected]} votes={points[selected]} />
      <Button handleClick={handleVote} text="vote" />
      <Button handleClick={handleNext} text="next anecdote" />
      <Anecdote headline="Anecdote with most views" anecdote={anecdotes[indexOfMax(points)]} votes={points[indexOfMax(points)]} />
    </div>
  )
}

export default App
