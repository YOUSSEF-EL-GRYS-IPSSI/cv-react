import React from 'react';

const Projet = ({ nom, img, lien }) => {
    return (
        <>
            <h2>Je suis le projet : {nom}</h2>
            <img src={img} alt={nom} style={{ width: '100px'}} />
            <a href={lien} target='_blank' rel='noreferrer'>Page</a>
        </>
    );
}

export default Projet;
