import '../App.css';

function Header() {
  return (
    <header className='App-header'>
      <nav>
        <ul className='Nav-list'>
          <h1><a href="#Portfolio" className='Portfolio-item'>Portfolio.</a></h1>
          <ul className='Nav-items'>
            <li><a href="#About" className='Nav-item'><h3>About</h3></a></li>
            <li><a href="#Projects" className='Nav-item'><h3>Projects</h3></a></li>
            <li><a href="#Contact" className='Nav-item'><h3>Contact</h3></a></li>
          </ul>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
