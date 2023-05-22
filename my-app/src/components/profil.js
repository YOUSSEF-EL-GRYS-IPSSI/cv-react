import '../styles/style.css'

const Profil = ({ nom, prenom, img, lien, link}) => {
    return (
        <>

        <img src={img}  style={{ width: '250px'}}/>
        
            
            
          <ul>
          <h2>Nom / Prenom</h2>
          <a href={lien}><img src={link} style={{ width: '250px'}} /></a>
            <li><span class="html5">
            <em>{nom}</em>
            </span></li>
            <li><span class="css3"><em>{prenom}</em></span></li>
           
         
          </ul>
          
        </>
    );
}

export default Profil;
