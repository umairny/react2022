import logoImg from '../../images/world.png'

export default function Header () {
    return (
        <nav>
            <img className='logo' src={logoImg} alt="world" />
            <h3 className='head--title'>my travel journal.</h3>
        </nav>
    )
}