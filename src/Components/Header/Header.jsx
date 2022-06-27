//importing react libraries

// import components

//import assets
import Mini_logo_DM from '../../Assets/Images/Mini_logo_DM.png'
import Mini_logo_LM from '../../Assets/Images/Mini_logo_LM.png'
// import CSS file
import './Header.css'


export default function Header ({darkMode}) {
    let miniLogo = darkMode ? Mini_logo_DM : Mini_logo_LM

    return (
        <div className="header">
        <img className="mini-logo" 
        src={miniLogo}
        alt="Mini logo for Dark Mode" />
        <h1>Welcome UserName</h1>
        </div>
    )
}