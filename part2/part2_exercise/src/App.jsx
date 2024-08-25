import { useState, useEffect } from "react"
import axios from 'axios'
import Note from "./Components/Note"
import noteServices from './services/notes'

const App = (props) => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState("a new note...")
  const [showAll, setShowAll] = useState(true)
  // console.log("props in App", notes)

  useEffect(() => {
    console.log("effect")
    // axios
    //   .get('http://localhost:3001/notes')
    //   .then(response => {
    //     console.log("promise fullfilled")
    //     setNotes(response.data)
    //   })

    noteServices
      .getAll()
      .then(returnedNotes => setNotes(returnedNotes))
  }, [])
  console.log("render", notes.length, "notes")

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const addNote = (event) => {
    event.preventDefault()
    console.log("button clicked ", event.target)
    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5,
    }
    // axios
    //   .post('http://localhost:3001/notes', noteObject)
    //   .then(response => {
    //     setNotes(notes.concat(noteObject))
    //     setNewNote('')
    //     })
    noteServices
      .create(noteObject)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
        setNewNote('')
      })
  }

  const notesToShow = showAll ? notes : notes.filter(note => note.important)
  console.log(notesToShow)

  const toggleImportanceOf = (id) => {
    const url = `http://localhost:3001/notes/${id}`
    const note = notes.find(note => note.id === id)
    const changedNote = {...note, important: !note.important}

    // axios
    //   .put(url, changedNote)
    //   .then(response => {
    //     setNotes(notes.map(note => note.id !== id ? note : response.data))
    //   })
    noteServices
      .update(id, changedNote)
      .then(response => setNotes(notes.map(note => note.id !== id ? note : response )))
      .catch(error => {
        alert(
          `the note '${note.content}' was already deleted from server`
        )
        setNotes(notes.filter(note => note.id !== id))
      })
  }

  return (
    <div>

    <h1>Notes</h1>
    <div>
      <button onClick={() => setShowAll(!showAll)}>
        show {showAll ? 'important' : 'all'}
      </button>
    </div>

    <ul>
      {notesToShow.map(note =>
        <Note
         key={note.id}
         note={note}
         toggleImportance={() => toggleImportanceOf(note.id)}
        />
      )}
    </ul>

    <form onSubmit={addNote}>
      <input value={newNote} onChange={handleNoteChange} />
      <button type="submit">save</button>
    </form>

  </div>
  )
}

export default App
