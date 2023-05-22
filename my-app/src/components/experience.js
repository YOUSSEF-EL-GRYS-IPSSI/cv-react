import '../styles/style.css'

const Experience = ({ nom, lms, ekino}) => {
    return (
        <>

            <h2>{nom}</h2>
            <ul>
                <li><span class="html5"></span><em>{lms}</em></li>
                <li><span class="css3"></span><em>{ekino}</em></li>

            </ul>

        </>
    );
}

export default Experience;
