import Header from "../components/Header/Header";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

function Home() {
    return (
        <div>
            <Header/>
            <div className="line">
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