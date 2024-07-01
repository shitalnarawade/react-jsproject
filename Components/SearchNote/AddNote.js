import React, { useState, useEffect } from "react";
import "./AddNote.css";

function AddNote(props) {
  const [textInput, setTextInput] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [noteList, setNoteList] = useState([]);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNoteList(storedNotes);
  }, []);

  const handleInputChange = (event) => {
    setTextInput(event.target.value);
  };

  const handleTextareaChange = (event) => {
    setInputValue(event.target.value);
  };

  const FormSubmitHandler = (event) => {
    event.preventDefault();

    const newNote = {
      id: Math.random().toString(),
      title: textInput,
      desc: inputValue,
    };

    setNoteList((prevNoteList) => [...prevNoteList, newNote]);
    setTextInput("");
    setInputValue("");

    localStorage.setItem("notes", JSON.stringify([...noteList, newNote]));
  };
  const deleteButtonHandler = (id) => {
    const updatedNotes = noteList.filter((note) => note.id !== id);
    setNoteList(updatedNotes);

    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  return (
    <>
      <form onSubmit={FormSubmitHandler}>
        <h3>Note Title</h3>
        <div>
          <label htmlFor="textInput">Enter text:</label>
          <input
            type="text"
            id="textInput"
            value={textInput}
            onChange={handleInputChange}
          />
        </div>

        <div className="flexible-textbox-container">
          <label htmlFor="textareaInput">Note Desc: </label>
          <textarea
            id="textareaInput"
            value={inputValue}
            onChange={handleTextareaChange}
          />
        </div>

        <button type="submit">Add to Book</button>
      </form>

      <div>
        <h3>Notes List</h3>
        {noteList.length === 0 ? (
          <p>No notes added yet.</p>
        ) : (
          <ul>
            {noteList.map((note) => (
              <li key={note.id}>
                <strong>{note.title}</strong>
                <button
                  type="button"
                  onClick={() => deleteButtonHandler(note.id)}
                >
                  Delete
                </button>
                <br />
                {note.desc}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default AddNote;
