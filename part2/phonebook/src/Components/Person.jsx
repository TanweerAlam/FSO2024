const Person = (props) => {
    // console.log(props)
    const {person, handleRemovePerson} = props

    return(
        <p>{person.name} {person.number} <button onClick={handleRemovePerson}>delete</button></p>
    )
}

export default Person
