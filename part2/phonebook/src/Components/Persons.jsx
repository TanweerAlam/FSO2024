import Person from "./Person"
import personServices from '../services/persons'
import persons from "../services/persons"

const Persons = (props) => {
    const {personsToShow, handleRemovePerson} = props
    console.log("props in Persons ", props)

    return(
        <>
            {
                personsToShow.map(person =>
                    <Person key={person.id}
                        person={person}
                        handleRemovePerson={() => handleRemovePerson(person.id)}
                    />
                )
            }
        </>
    )
}

export default Persons
