import { useState } from "react"
import Person from "./Components/Person"


const App = () => {
  const [persons, setPersons] = useState([{
    name: 'Arto Hellas'
  }])

  const [newName, setNewName] = useState('')
  const handleNewName = (event) => setNewName(event.target.value)

  const handleAddPerson = (event) => {
    event.preventDefault();
    // console.log("Add person form submitted")
    const newPerson = {
      name: newName
    }
    const isObjectSame = persons.some(person => sameObjects(person, newPerson))
    // console.log("Has same object ", isObjectSame)

    if (isObjectSame) {
      alert(`${newName} is already added to phonebook`)
    }
    else{
      setPersons(persons.concat(newPerson))
      setNewName('')
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

  console.log("App is working...")
  return (
    <div>
    <h2>Phonebook</h2>
    <form onSubmit={handleAddPerson}>
      <div>
        name: <input value={newName} onChange={handleNewName} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>

    {/* <div>debug: {newName}</div> */}

    <h2>Numbers</h2>
    {
      persons.map(person => <Person person={person} />)
    }
  </div>
  )
}

export default App
