import '../styles/style.css'

const Front = ({ nom, html, css, javascript, jquery, sass }) => {
    return (
        <>

            <h2>{nom}</h2>
            <ul>
                <li><span class="html5"></span><em>{html}</em></li>
                <li><span class="css3"></span><em>{css}</em></li>
                <li><span class="js"></span><em>{javascript}</em></li>
                <li><span class="jquery"></span><em>{jquery}</em></li>
                <li><span class="jquery"></span><em>{sass}</em></li>
            </ul>

        </>
    );
}

export default Front;
