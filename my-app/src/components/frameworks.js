import '../styles/style.css'

const Frameworks = ({ nom, Wordpress, Symfony, Nodejs, jquery, Laravel }) => {
    return (
        <>

            <h2>{nom}</h2>
            <ul>
                <li><span class="wordpress"></span><em>{nom}</em></li>
                <li><span class="magento"></span><em>{Wordpress}</em></li>
                <li><span class="magento"></span><em>{Symfony}</em></li>
                <li><span class="magento"></span><em>{Nodejs}</em></li>
                <li><span class="magento"></span><em>{jquery}</em></li>
                <li><span class="magento"></span><em>{Laravel}</em></li>
            </ul>

        </>
    );
}

export default Frameworks;
