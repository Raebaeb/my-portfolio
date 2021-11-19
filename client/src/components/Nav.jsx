import { Link, useLocation } from "react-router-dom";
import githubLogoDark from "../assets/GitHub-Mark/dark.png";
import linkedInLogoDark from "../assets/LinkedIn-Logos/dark.png";
import githubLogoLight from "../assets/GitHub-Mark/white.png";
import linkedInLogoLight from "../assets/LinkedIn-Logos/white.png";

const Nav = () => {
  const location = useLocation();
  const navClass = location.pathname === '/about-me' ? 'about-nav' : 'home-nav';

  return (
    <nav className={navClass}>
      <Link to="/" className='logo-link'>
        <text id='rachelperez'>rachelperez<span id="dev">dev</span></text>
      </Link>
      {navClass === 'about-nav' ? (
        <a href='http://rachelperez.dev/#projects' className="nav-link">
          Projects
        </a>
      ) : (
        <Link to="/about-me" className="nav-link">
          About Me
        </Link>
      )}
      <a href="https://github.com/raebaeb" className='github'>
        <img src={navClass === 'about-nav' ? githubLogoLight : githubLogoDark} alt="Link to my GitHub profile" />
      </a>
      <a href="https://www.linkedin.com/in/rachel-l-perez/" className='linkedin'>
        <img src={navClass === "about-nav" ? linkedInLogoLight : linkedInLogoDark} alt="Link to my LinkedIn profile" />
      </a>
    </nav>
  );
};

export default Nav;
