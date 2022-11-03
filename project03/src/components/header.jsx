import logoImg from '../../images/airbnb.png'

export default function Header() {
  return (
  <nav className='nav'>
    <img className='nav-logo' src={logoImg} alt="AirBnB" /> 
  </nav>
  )
}


