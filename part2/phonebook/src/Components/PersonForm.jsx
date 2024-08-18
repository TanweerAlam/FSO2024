const PersonForm = (props) => {
    console.log(props)
    const {handleAddPerson, newName, handleNewName, newNumber, handleNewNumber} = props

    return(
        <form onSubmit={handleAddPerson}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNewNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default PersonForm
