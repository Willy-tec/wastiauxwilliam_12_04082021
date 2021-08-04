import './style.css';
import PropTypes from 'prop-types';
import Nav from '../../component/nav';

function Home(props){
    return (
        <div className='Home'>
            <Nav />
        </div>
        )
}
Home.propTypes = {
    name: PropTypes.string
}
export default Home;
