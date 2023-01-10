import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../auth/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/Notes.css";

const Notes = () => {
  const { notes, setNotes } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleDeleteNote = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  };

  return (
    <div className="notes-container">
      <h2>Notes</h2>
      <ul>
        {notes.length > 0 ? (
          notes.map((note, index) => (
            <li key={index}>
              {note.title} -
              <div className="description">{note.description}</div>
              <span
                onClick={() => handleDeleteNote(index)}
                className="delete-icon"
              >
                x
              </span>
            </li>
          ))
        ) : (
          <li>No Notes available</li>
        )}
      </ul>
      <button onClick={() => navigate("/AddNote")}>Go to Main Page</button>
    </div>
  );
};

export default Notes;
