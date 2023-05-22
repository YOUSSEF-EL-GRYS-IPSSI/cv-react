import '../styles/style.css'

const Diplome = ({ nom, dip1, dip2 }) => {
    return (
        <>

            <h2>{nom}</h2>
            <ul>
                <li><span class="html5"></span><em>{dip1}</em></li>
                <li><span class="css3"></span><em>{dip2}</em></li>

            </ul>

        </>
    );
}

export default Diplome;
