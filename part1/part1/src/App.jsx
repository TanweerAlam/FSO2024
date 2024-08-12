// ***************eg. 1*************

import { useState } from "react";

// const App = () => {
//   console.log("Hello from component")
//   return (
//     <div>
//       <p>Hello world</p>
//     </div>
//   )
// };

// const App = () => {
//   const now = new Date()
//   const a = 10
//   const b = 20
//   console.log(now, a + b);

//   return (
//     <div>
//       <p>Hello world! It is {now.toString()}.</p>
//       <p>
//         {a} plus {b} is {a + b}
//       </p>
//     </div>
//   )
// };

// *****************eg. 2*******************

// const Hello = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <p>Hello {props.name}, you are {props.age || 7} years old.</p>
//     </div>
//   )
// }

// const Footer = () => {
//   return (
//     <div>
//       greeting app created by <a href='https://github.com/mluukkai'>mluukkai</a>
//     </div>
//   )
// }

// const App = () => {

//   const friends = [
//     { name: 'Peter', age: 4 },
//     { name: 'Maya', age: 10 },
//   ]

//   return (
//     <>
//       <h1>Greetings</h1>
//       {/* <Hello name="Maya" age={26 + 10} />
//       <Hello name={name} age={age} /> */}

//       {/* <p>{friends}</p> */}

//       <p>{friends[0].name} {friends[0].age}</p>
//       <p>{friends[1].name} {friends[1].age}</p>

//       <Footer />
//     </>
//   )
// }

// ************************eg. 3*********************

// const Hello = ({name, age}) => {
//   // const bornYear = () => {
//   //   const yearNow = new Date().getFullYear();
//   //   return yearNow - props.age;
//   // }

//   // const {name, age} = props

//   const bornYear = () => new Date().getFullYear() - age;

//   return (
//     <div>
//       <p>
//         Hello {props.name}, you are {props.age} years old.
//       </p>
//       <p>
//         So you were probably born in {bornYear()}.
//       </p>
//     </div>
//   )
// }

// const App = () => {
//   const name = "Peter"
//   const age = 10

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26 + 10} />
//       <Hello name={name} age={age} />
//     </div>
//   )
// }

// *****************eg. 4*******************

// const App = (props) => {
//   console.log(props)
//   const {counter} = props
//   return(
//     <div>{counter}</div>
//   )
// }

// *******************eg. 5********************

// import { useState } from "react";

// const Display = ({counter}) => <div>{counter}</div>


// const Button = ({onClick, text}) => {
//   return (
//     <button onClick={onClick}>
//       {text}
//     </button>
//   )
// }


// const App = () => {
//   const [counter, setCounter] = useState(0)
//   console.log('rendering with counter value', counter)
//   // setTimeout(() => setCounter(counter + 1), 1000)

//   const increaseByOne = () => {
//     console.log('increasing, value before', counter)
//     setCounter(counter + 1)
//   }

//   const decreaseByOne = () => {
//     console.log('decreasing, value before', counter)
//     setCounter(counter - 1)
//   }

//   const setToZero = () => {
//     console.log('resetting to zero, value before', counter)
//     setCounter(0)
//   }

//   return (
//     <div>
//       <Display counter={counter} />
//       <Button text="Plus" onClick={increaseByOne} />
//       <Button text="Zero" onClick={setToZero} />
//       <Button text="Minus" onClick={decreaseByOne} />
//     </div>
//   )
// }

// ************************eg. 6************************

// const History = (props) => {

//   if (props.allClicks.length === 0){
//     return (
//       <div>
//         the app is used by pressing the buttons
//       </div>
//     )
//   }

//   return (
//     <div>
//       button press history: {props.allClicks.join(' ')}
//     </div>
//   )
// }

// const Button = (props) => {
//   return (
//     <button onClick={props.handleClick}>
//       {props.text}
//     </button>
//   )
// }

// const App = () => {
//   // const [clicks, setClicks] = useState({
//   //   left : 0,
//   //   right : 0
//   // })

//   // const handleLeftClick = () => {
//   //   const newClicks = {
//   //     ...clicks,
//   //     left: clicks.left + 1,
//   //   }
//   //   setClicks(newClicks)
//   // }

//   // const handleRightClick = () => {
//   //   const newClicks = {
//   //     ...clicks,
//   //     right: clicks.right + 1
//   //   }
//   //   setClicks(newClicks)
//   // }

//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([])
//   const [total, setTotal] = useState(0)

//   const handleLeftClick = () => {
//     setAll(allClicks.concat("L"))
//     const updatedLeft = left + 1
//     setLeft(updatedLeft)
//     setTotal(updatedLeft + right)
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat("R"))
//     const updatedRight = right + 1
//     setRight(updatedRight)
//     setTotal(left + updatedRight)
//   }

//   return (
//     <div>
//       {left}
//       <Button handleClick={handleLeftClick} text="left" />
//       <Button handleClick={handleRightClick} text="right" />
//       {right}
//       <History allClicks={allClicks} />
//       <p>total {total}</p>
//     </div>
//   )
// }

// ****************eg. 8******************

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const Display = (props) => <div>{props.value}</div>

const App = () => {
  const [value, setValue] = useState(10)

  // const hello = (str) =>
  // () => {
  //   console.log("Hello ", str);
  // }

  const setToValue = (value) => {
    console.log(value)
    setValue(value)
  }

  return (
    <div>
      <Display value={value} />
      <Button text="Thousand" handleClick={() => setToValue(1000)} />
      <Button text="Reset" handleClick={() => setToValue(0)} />
      <Button text="Increment" handleClick={() => setToValue(value + 1)} />
    </div>
  )
}

export default App;
