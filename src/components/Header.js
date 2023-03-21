import logo from '../images/logo.png';

const Header = () => {
    return (
    <header className='header'>
    <img src={logo} alt="Logo Harry Potter" className='header__logo'/>
  </header>
  );
};
export default Header;