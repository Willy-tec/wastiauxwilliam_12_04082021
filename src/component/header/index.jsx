import './style.css';

function Header(props)
{
    console.log("Header", props.name)
    return (
        <div className='Header'>
            {props.name}
        </div>
        )
}

export default Header;
