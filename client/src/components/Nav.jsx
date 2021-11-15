import { Link } from 'react-router-dom';
import githubLogo from '../assets/GitHub-Mark/PNG/GitHub-Mark-32px.png'
import linkedInLogo from '../assets/LinkedIn-Logos/LI-In-Bug.png'

const Nav = () => {
  return (
    <nav>
      <Link to='/'>rachelperez<span>dev</span></Link>
      {window.location.href === 'https://rachelperez.dev/' ? <Link to='/about-me' className='nav-link'>About Me</Link> : <Link to='/#projects' className='nav-link'>Projects</Link>}
      <Link to='https://github.com/raebaeb'><img src={githubLogo} alt='Link to my GitHub profile'/></Link>
      <Link to='https://www.linkedin.com/in/rachel-l-perez/'><img src={linkedInLogo} alt='Link to my LinkedIn profile' /></Link>
    </nav>
  );
};

export default Nav;