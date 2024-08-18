import Person from "./Person"

const Persons = (props) => {
    const {personsToShow} = props
    console.log("props in Persons ", props)

    return(
        <>
            {
                personsToShow.map(person => <Person key={person.id} person={person} />)
            }
        </>
    )
}

export default Persons
