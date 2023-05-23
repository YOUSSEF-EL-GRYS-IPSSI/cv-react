import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';

import Home from '../pages/home';
import About from '../pages/about';
import Contact from '../pages/contact';
import NotFound from '../router/NotFound';

function ProfilePage() {
  let { userId } = useParams();

  // Utilisez la valeur de userId pour afficher les détails du profil
  // ou effectuer d'autres opérations en fonction de cet identifiant.

  return (
    <div>
      <h2>Profile Page</h2>
      <p>User ID: {userId}</p>
    </div>
  );
}

function Routeur() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="competence">
            <Route path=":userId" element={<ProfilePage />} />
            <Route path="me" element={<div>My Profile</div>} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Routeur;
