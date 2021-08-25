import './style.css';

function Header(props)
{
    return (
        <div className='Header'>
            <p>
                Bonjour <span className='Header_name'>{props.userInfos ? props.userInfos.firstName : ""}</span> 
            </p>
            <p className='Header_congrat'>
            Félicitation ! Vous avez explosé vos objectifs hier 👏
            </p>
            
        </div>
        )
}

export default Header;
