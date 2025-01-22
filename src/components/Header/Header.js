import './Header.css';
import '../../App.css';

function Header() {
  return (
      <header className='Header'>
        <nav>
          <ul className='Nav-list'>
            <li><a href="/home" className="Nav-item"><h1 className='Portfolio-item'>Portfolio.</h1></a></li>
            <ul className="End-list">
              <li><a className="Nav-item" href="/experience"><h1>Experiences</h1></a></li>
              <li><a className="Nav-item" href="/projects"><h1 className='End-item'>Projects</h1></a></li>
            </ul>
          </ul>
        </nav>
      </header>
  );
}

export default Header;