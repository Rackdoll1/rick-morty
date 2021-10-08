import '../styles/navbar.css';
import logo from '../assets/logo.png';

const Navbar = ({func}) => {

  return (
    <div id="navbar">
      <div>
        <img src={logo} alt="Logo"></img>
        <h4>Search your favorite characters!</h4>
      </div>
      <input onChange={func} type="text" placeholder="Search..."></input>
    </div>
  )
}

export default Navbar
