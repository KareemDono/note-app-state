import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { useState } from 'react';
import AuthContext from "./auth/AuthContext";
import LoginPage from "./Components/LoginPage";
import RegistrationPage from "./Components/RegistrationPage";
import AddNote from "./Components/AddNote";
import Notes from "./Components/Notes";

function App() {
  const [emailPass, setEmailPass] = useState({});
  const [notes, setNotes] = useState([]);
  return (
    <div>
      <AuthContext.Provider value={{ emailPass, setEmailPass, notes, setNotes }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} exact />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/AddNote" element={<AddNote />} exact />
            <Route path="/Notes" element={<Notes />} exact />
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
