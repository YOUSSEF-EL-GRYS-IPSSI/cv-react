import logo from '../logo.jpg'
import link from '../Linkedin.png';
import '../App.test';
import Layout from '../components/layout/layout'
import Profil from '../components/profil'
import Experience from '../components/experience'
import Formation from '../components/formation'
import Diplome from '../components/diplome'
import Front from '../components/frontend'
import Frameworks from '../components/frameworks'
import Applications from '../components/application'



const Home = () => {
  return (
    <div>

      <h1>Accueil</h1>
      <Layout>
        <Profil img={logo} link={link} lien="https://www.linkedin.com/in/youssef-el-grys-889926172/" nom="El Grys" prenom="Youssef" />
        <Experience nom="Expérience" lms="Lms Factory" ekino="Ekino" />
        <Formation nom="Formation" ecole1="Ipssi" ecole2="Webstart" />
        <Diplome nom="Diplome" dip1="Bachelors" dip2="BTS" />
        <Front nom="Front-End" html="HTML" css="CSS" javascript="Javascript" jquery="jQuery" sass="sass" />
        <Frameworks nom="Frameworks" Wordpress="Wordpress" Symfony="Symfony" Nodejs="Nodejs" Laravel="Laravel" jquery="jquery" />
        <Applications nom="Applications" photoshop="Adobe Photoshop" illustrator="Adobe Illustrator" figma="Figma" />
      </Layout>
    </div>
  );
}

export default Home;
