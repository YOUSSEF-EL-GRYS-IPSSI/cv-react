import '../styles/style.css'

const Formation = ({ nom, ecole1, ecole2 }) => {
    return (
        <>

            <h2>{nom}</h2>
            <ul>
                <li><span class="html5"></span><em>{ecole1}</em></li>
                <li><span class="css3"></span><em>{ecole2}</em></li>

            </ul>

        </>
    );
}

export default Formation;
