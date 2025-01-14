import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
  const navigate = useNavigate();

  const handleClick = (page) => {
    navigate(page);
  };

  return (
      <header className='App-header'>
        <nav>
          <ul className='Nav-list'>
            <h1><button onClick={() => handleClick('/home')} className="Portfolio-item">Portfolio.</button></h1>
            <ul className="Nav-items">
              <li><button onClick={() => handleClick('/experience')} className="Nav-item"><h3>Experiences</h3></button></li>
              <li><button onClick={() => handleClick('/projects')} className="Nav-item"><h3>Projects</h3></button></li>
            </ul>
          </ul>
        </nav>
      </header>
  );
}

export default Header;