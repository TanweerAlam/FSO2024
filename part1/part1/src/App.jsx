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

const Hello = (props) => {
  console.log(props);
  return (
    <div>
      <p>Hello {props.name}, you are {props.age || 7} years old.</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by <a href='https://github.com/mluukkai'>mluukkai</a>
    </div>
  )
}

const App = () => {

  const friends = [
    { name: 'Peter', age: 4 },
    { name: 'Maya', age: 10 },
  ]

  return (
    <>
      <h1>Greetings</h1>
      {/* <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} /> */}

      {/* <p>{friends}</p> */}

      <p>{friends[0].name} {friends[0].age}</p>
      <p>{friends[1].name} {friends[1].age}</p>

      <Footer />
    </>
  )
}

export default App;
