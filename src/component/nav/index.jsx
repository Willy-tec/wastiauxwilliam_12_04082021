import './style.css';
import img_meditation from '../../asset/meditation.svg';
import img_natation from '../../asset/natation.svg';
import img_velo from '../../asset/velo.svg';
import img_altere from '../../asset/altere.svg';
import img_logo from '../../asset/logo.svg';

function Nav() {
    return (
        <div className="Nav">
            <nav className="Nav_horizon">
                <div className="Nav_horizon_logoContainer">
                    <img src={img_logo} alt="" />
                    <p>SportSee</p>
                </div>
                <ul>
                    <a href="/">
                        <li>Accueil</li>
                    </a>
                    <a href="/">
                        <li>Profil</li>
                    </a>
                    <a href="/">
                        <li>Réglage</li>
                    </a>
                    <a href="/">
                        <li>Communauté</li>
                    </a>
                </ul>
            </nav>
            <div className="Nav_vertical">
                <div className="Nav_vertical_imgContainer">
                    <img
                        src={img_meditation}
                        alt="Un petit personnage médite"
                    />
                    <img src={img_natation} alt="Un petit personnage nage" />
                    <img src={img_velo} alt="Un personnage sur un vélo" />
                    <img src={img_altere} alt="Un haltere" />
                </div>
                <div className="Nav_vertical_texte">
                    Copiryght, SportSee 2020
                </div>
            </div>
        </div>
    );
}

export default Nav;
