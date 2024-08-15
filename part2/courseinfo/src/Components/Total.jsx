const Total = (props) => {
    console.log("props in Total", props);

    const total = props.parts.reduce((acc, next) => {
      acc += next.exercises
      // console.log("what's happening ", acc, next)
      return acc
    }, 0)
    console.log(total)

    return (
      <p><b>total of {total} exercises</b></p>
    )
  }

  export default Total
