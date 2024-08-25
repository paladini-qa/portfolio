import './App.css';
import Header from './sections/Header';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
