import { NavLink } from 'react-router-dom';
import Wrapper from '../wrappers/Navbar';
import ThemeToggle from '../../pages/ThemeToggle';

const Navbar = () => {
  return (
    <Wrapper>
      <div className='nav-center'>
        <span className='logo'>Fusionizer</span>
        <div className='nav-links'>
          <NavLink to='/' className='nav-link'>
            Home
          </NavLink>
          <NavLink to='/about' className='nav-link'>
            About
          </NavLink>
          <NavLink to='/newsletter' className='nav-link'>
            Newsletter
          </NavLink>
        </div>
        <div>
          <ThemeToggle />
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
