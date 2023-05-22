
import '../styles/style.css'

const Applications = ({ nom, photoshop, illustrator, figma }) => {
    return (
        <>

            <h2>{nom}</h2>
            <ul>
                <li><span class="photoshop"></span><em>{photoshop}</em></li>
                <li><span class="illustrator"></span><em>{illustrator}</em></li>
                <li><span class="illustrator"></span><em>{figma}</em></li>
            </ul>

        </>
    );
}

export default Applications;


