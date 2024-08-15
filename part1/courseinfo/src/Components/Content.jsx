import Part from "./Part"
const Content = (props) => {
    console.log("Props in Content", props);
    return (
      <>
        {props.parts.map(part =>
          <Part part={part.name} exercises={part.exercises} />
        )}
      </>
    )
  }

  export default Content
