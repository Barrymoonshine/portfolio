import './Header.css';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  return (
    <header>
      <HashLink style={{ textDecoration: 'none' }} to='#about'>
        About
      </HashLink>
      <HashLink style={{ textDecoration: 'none' }} to='#projects'>
        Projects
      </HashLink>
      <HashLink style={{ textDecoration: 'none' }} to='#contact'>
        Contact
      </HashLink>
    </header>
  );
};

export default Header;
