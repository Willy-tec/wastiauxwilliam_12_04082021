import './style.css';
import PropTypes from 'prop-types';
/**
 * Format the header section containing the greetings
 * @param {Object} props
 * @returns Component
 */
function Header(props) {
    return (
        <div className="Header">
            <p>
                Bonjour{' '}
                <span className="Header_name">
                    {props.userInfos?.firstName}
                </span>
            </p>
            <p className="Header_congrat">
                Félicitation ! Vous avez explosé vos objectifs hier 👏
            </p>
        </div>
    );
}
Header.propTypes = {
    userInfos: PropTypes.object,
};
export default Header;
