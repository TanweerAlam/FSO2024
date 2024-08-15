const Header = (props) => {
    console.log("props in Header", props);
    return (
        <h1>{props.course}</h1>
    )
  }

  export default Header
