const Person = (props) => {
    console.log(props)
    const {person} = props

    return(
        <p>{person.name} {person.number}</p>
    )
}

export default Person
