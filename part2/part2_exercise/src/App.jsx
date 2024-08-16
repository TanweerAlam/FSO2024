import { useState } from "react"
import Note from "./Components/Note"

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState("a new note...")
  const [showAll, setShowAll] = useState(true)
  // console.log("props in App", notes)

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
      id: String(notes.length + 1)
    }
    setNotes(notes.concat(noteObject))
    setNewNote('')
  }

  const notesToShow = showAll ? notes : notes.filter(note => note.important)
  console.log(notesToShow)

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
        <Note key={note.id} note={note} />
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
