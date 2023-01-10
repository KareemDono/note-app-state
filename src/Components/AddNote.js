import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../auth/AuthContext';
import '../css/AddNote.css';

const AddNote = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { notes } = useContext(AuthContext);
  const { emailPass, setNotes } = useContext(AuthContext);


  const navigate = useNavigate();

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

const handleAddNote = (event) => {
    event.preventDefault();
    setNotes([...notes, { email: emailPass.email, title, description }]);
    alert(`Note "${title}" added!`);
    setTitle("");
    setDescription("");
  };


  const handleGoToNotes = () => {
    navigate("/notes")
  }

  return (
    <div className="addnote-container">
      <h2>Add Note</h2>
      <form onSubmit={handleAddNote}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            value={description}
            onChange={handleDescriptionChange}
            required
          />
        </label>
        <br />
        <button type="submit">Add Note</button>
      </form>
      <button onClick={handleGoToNotes}>Go to Notes</button>
    </div>
  );
};

export default AddNote;
