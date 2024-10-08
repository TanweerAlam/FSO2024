const Header = (props) => {
  console.log(props);
  return (
      <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  console.log(props.parts[0].name);
  return (
    <>
      <Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part part={props.parts[1].name} exercises={props.parts[1].exercises}  />
      <Part part={props.parts[2].name} exercises={props.parts[2].exercises}  />
    </>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Total = (props) => {
  console.log(props);
  return (
    <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name}/>
      {/* <Content part={[part1.name, part2.name, part3.name]} exercises={[part1.exercises, part2.exercises, part3.exercises]} /> */}
      <Content parts={course.parts} />
      {/* <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} /> */}
      <Total parts={course.parts} />
    </div>
  )
}

export default App
