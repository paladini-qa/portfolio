import './App.css';
import Header from './sections/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './sections/Footer';
import ProfileImage from './components/ProfileImage';

function App() {
  return (
    <div>
      <Header />
      <div className="line">
        <div className="App">
          <About />
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
