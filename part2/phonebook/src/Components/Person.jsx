const Person = (props) => {
    // console.log(props)
    const {person} = props

    return(
        <p>{person.name}</p>
    )
}

export default Person
