import React from 'react';
import { useParams } from 'react-router-dom';

function ProfilePage() {
  let { userId } = useParams();

  // Utilisez la valeur de userId pour afficher les détails du profil
  // ou effectuer d'autres opérations en fonction de cet identifiant.

  return (
    <div>
      <h2>Profile Page</h2>
      <p>User ID: {userId}</p>
      {/* Ajoutez ici votre code spécifique à la page du profil */}
    </div>
  );
}

export default ProfilePage;
