import Header from "../components/Header/Header";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import '../App.css';

function Home() {
    return (
        <div>
            <Header/>
            <div>
                <div className="App">
                    <About/>
                    <Contact/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;