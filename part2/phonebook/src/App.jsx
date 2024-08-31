import { useState, useEffect } from "react"

import Filter from "./Components/Filter"
import PersonForm from "./Components/PersonForm"
import Persons from "./Components/Persons"
import Notification from "./Components/Notification"

import personServices from "./services/persons"


const App = () => {
  const [persons, setPersons] = useState([])

  const [filterName, setFilterName] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [message, setMessage] = useState(null)

  const fetchPersons = () => {
    personServices
      .getAll()
      .then(result => {
        console.log("fetch result ", result)
        setPersons(result)
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
        // id: String(persons.length + 1)
      }

      const presentPerson = persons.find(person => person.name === newPerson.name)
      console.log("Present person", presentPerson)
      if (presentPerson){
        const confirmationText = `${presentPerson.name} is already added to phonebook, replace the old number with new one?`

        if (window.confirm(confirmationText)){
          console.log("Proceed with updation")

          personServices
            .update(presentPerson.id, newPerson)
            .then(response => {
              console.log('Updating response', response)
              setPersons(persons.map(person => person.id !== response.id ? person : response))
              setNewName('')
              setNewNumber('')

              setMessage({message: `${response.name}'s number has been updated`, type: "success"})
              setTimeout(() => setMessage(null), 5000)
            })
            // .catch(error => alert('We got an error', error))
            .catch(error => {
              console.log("Catch body executed")

              setMessage({message: `contact '${newPerson.name}' was already deleted from server`, type: "error"})
              setTimeout(() => setMessage(null), 5000)
              setPersons(persons.filter(person => person.id !== presentPerson.id))

              console.log("Catch body completed")
            })
        }
        else {
          console.log("request cancelled")
        }
      }
      else {
        console.log("Object is not available, let's create a new object")
        personServices
          .create(newPerson)
          .then(result => {
            setPersons(persons.concat(result))
            setNewName('')
            setNewNumber('')
            console.log(result)

            setMessage({message: `Added ${result.name}`, type: "success"})
            setTimeout(() => setMessage(null), 5000)
          })
          .catch(error => {
            setMessage({message: `HTTP request error`, type: "error"})
            setTimeout(() => setMessage(null), 5000)
          })
      }

    //   const isObjectSame = persons.some(person => sameObjects(person, newPerson))
    //   // console.log("Has same object ", isObjectSame)

    //   if (isObjectSame) {
    //     const confirmationText = `${newName} is already added to phonebook, replace the old number with new one?`
    //     if (window.confirm(confirmationText)){
    //       const updatePerson = persons.find(person => person.name === newPerson.name)
    //       console.log(updatePerson.id)
    //       // update services
    //     }
    //     else {
    //       console.log("Request cancelled")
    //     }
    //   }
    //   else{
    //     personServices
    //       .create(newPerson)
    //       .then(result => {
    //         setPersons(persons.concat(result))
    //         setNewName('')
    //         setNewNumber('')
    //         console.log(result)
    //       })
    //   }
    }
    else {
      alert(`Must have 11-digits of number and a name.`)
    }
  }

  const handleRemovePerson = (id) => {
    if(window.confirm("Do you really want to delete this contact?")){
      // console.log("Remove person of ", id)
      personServices
          .deletePerson(id)
          .then(result => {
              // console.log("Result in Persons component is", result)
              // console.log("Status:- ", result.status)
              if(result.status === 200){
                  // console.log("Contact deleted ", result.data)
                  setPersons(persons.filter(person => person.id !== id))
              }
          })
          .catch(error => {
            setMessage({message: `Information of the contact has been removed from server`, type: "error"})
            setTimeout(() => setMessage(null), 5000)
          })
    }
    else console.log("Remove request cancelled.")
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
      <Notification message={message} />
      <Filter
        filterName={filterName}
        handleFilterName={handleFilterName}
      />

      <h3>Add a new</h3>
      <PersonForm
        handleAddPerson = {handleAddPerson}
        newName = {newName}
        handleNewName = {handleNewName}
        newNumber = {newNumber}
        handleNewNumber = {handleNewNumber}
      />

      {/* <div>debug: {newName}</div> */}

      <h3>Numbers</h3>
      <Persons personsToShow={personsToShow} handleRemovePerson={handleRemovePerson} />
    </div>
  )
}

export default App
