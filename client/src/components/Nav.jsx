import { Link, useLocation } from "react-router-dom";
import githubLogo from "../assets/GitHub-Mark/PNG/GitHub-Mark-32px.png";
import linkedInLogo from "../assets/LinkedIn-Logos/LI-In-Bug.png";

const Nav = () => {
  const location = useLocation();
  const navClass = location.pathname === '/about-me' ? 'about-nav' : 'home-nav'

  return (
    <nav className={navClass}>
      <Link to="/">
        rachelperez<span id="dev">dev</span>
      </Link>
      {navClass === 'about-nav' ? (
        <Link to="/#projects" className="nav-link">
          Projects
        </Link>
      ) : (
        <Link to="/about-me" className="nav-link">
          About Me
        </Link>
      )}
      <a href="https://github.com/raebaeb">
        <img src={githubLogo} alt="Link to my GitHub profile" />
      </a>
      <a href="https://www.linkedin.com/in/rachel-l-perez/">
        <img src={linkedInLogo} alt="Link to my LinkedIn profile" />
      </a>
    </nav>
  );
};

export default Nav;
