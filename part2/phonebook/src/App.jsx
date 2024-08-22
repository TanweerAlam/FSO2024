import { useState } from "react"
import Person from "./Components/Person"
import Filter from "./Components/Filter"
import PersonForm from "./Components/PersonForm"
import Persons from "./Components/Persons"
import axios from "axios"
import { useEffect } from "react"


const App = () => {
  const [persons, setPersons] = useState([])

  const [filterName, setFilterName] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const fetchPersons = () => {
    axios
    .get("http://localhost:3001/persons")
    .then(response => {
      setPersons(response.data)
      console.log("Fetching persons:", response.data)
    })

  }

  useEffect(fetchPersons, []);

  const handleNewName = (event) => setNewName(event.target.value)
  const handleNewNumber = (event) => setNewNumber(event.target.value)

  const handleFilterName = (event) => {
    setFilterName(event.target.value)
  }

  const personsToShow = !filterName ? persons : persons.filter(person => {
    const insensitiveName = person.name.toLowerCase()
    const insensitiveFilter = filterName.toLowerCase()

    return insensitiveName.includes(insensitiveFilter)
})

  const handleAddPerson = (event) => {
    event.preventDefault();
    // console.log("Add person form submitted")
    if (newName && newNumber.length === 11){
      const newPerson = {
        name: newName,
        number: newNumber,
        id: String(persons.length + 1)
      }
      const isObjectSame = persons.some(person => sameObjects(person, newPerson))
      // console.log("Has same object ", isObjectSame)

      if (isObjectSame) {
        alert(`${newName} is already added to phonebook`)
      }
      else{
        setPersons(persons.concat(newPerson))
        setNewName('')
        setNewNumber('')
      }
    }
    else {
      alert(`Must have 11-digits of number and a name.`)
    }
  }

  const sameObjects = (first, second) => {
    "use strict";

    if (
      first === null ||
      first === undefined ||
      second === null ||
      second === undefined
    ) {
      return first === second;
    }

    if (first.constructor !== second.constructor) {
      return false;
    }

    if (first instanceof Function || first instanceof RegExp) {
      return first === second;
    }

    if (first === second || first.valueOf() === second.valueOf()) {
      return true;
    }

    if (first instanceof Date) return false;

    if (Array.isArray(first) && first.length !== second.length) {
      return false;
    }

    if (!(first instanceof Object) || !(second instanceof Object)) {
      return false;
    }

    const firstKeys = Object.keys(first);

    const allKeysExist = Object.keys(second).every(
      (i) => firstKeys.indexOf(i) !== -1
    );

    const allKeyValuesMatch = firstKeys.every((i) =>
      sameObjects(first[i], second[i])
    );

    return allKeysExist && allKeyValuesMatch;
  }

  // console.log("App is working...")
  return (
    <div>

      <h2>Phonebook</h2>
      <Filter
        filterName={filterName}
        handleFilterName={handleFilterName}
      />

      <h3>Add a new</h3>
      <PersonForm
        handleAddPerson={handleAddPerson}
        newName={newName}
        handleNewName={handleNewName}
        newNumber={newNumber}
        handleNewNumber={handleNewNumber}
      />

      {/* <div>debug: {newName}</div> */}

      <h3>Numbers</h3>
      <Persons personsToShow={personsToShow} />
    </div>
  )
}

export default App
