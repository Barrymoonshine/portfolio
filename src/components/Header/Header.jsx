import './Header.css';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  return (
    <header>
      <HashLink to='#about'>About</HashLink>
      <HashLink to='#projects'>Projects</HashLink>
      <HashLink to='#contact'>Contact</HashLink>
    </header>
  );
};

export default Header;
