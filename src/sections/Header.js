import '../App.css';

function Header() {
    return (
      <header className='App-header'>
        <nav>
          <ul className='Nav-list'>
            <li><a href="#About" className='Nav-item'>About</a></li>
            <li><a href="#Projects" className='Nav-item'>Projects</a></li>
            <li><a href="#Contact" className='Nav-item'>Contact</a></li>
          </ul>
        </nav>
      </header>
    )
  }

export default Header;