import Header from "../components/Header/Header";
import Bubble from "../components/Bubble/Bubble";
import Button from "../components/Button/Button";
import Footer from "../components/Footer/Footer";
import '../App.css';

function Home() {
    return (
        <div>
            <Header />
            <div>
                <div className="App">
                    <div className='About'>
                        <div className='Profile'>
                            <div className='Title'>
                                <h1 className='Callout'>Hello, World! It's Me</h1>
                                <h1 className='Name'>Vitor Paladini</h1>
                                <h1 className='Callout'>And I am a <span className='Highlight'>Quality Assurance Analyst</span></h1>
                            </div>
                        </div>
                        <h3 className='Text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut diam cursus, suscipit nisl et, hendrerit nisi. Suspendisse auctor eros in placerat sodales. Suspendisse ut rutrum tellus, at faucibus augue. Sed eros ligula, ultrices a porttitor ac, aliquet porttitor erat. Nulla nulla velit, aliquet non rhoncus consequat, finibus in nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed porttitor nulla sed molestie interdum. Nulla porttitor nibh leo, vitae blandit ex ullamcorper in. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                        <div className='Bubble-list'>
                            <Bubble
                                img='/images/linkedin.png'
                                title='LinkedIn'
                                link='https://www.linkedin.com/in/paladini-qa' />
                            <Bubble
                                img='/images/github.png'
                                title='GitHub'
                                link='https://github.com/paladini-qa' />
                            <Button text='Download CV' />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;