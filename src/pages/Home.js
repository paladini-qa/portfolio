import Header from "../components/Header/Header";
import Bubble from "../components/Bubble/Bubble";
import Button from "../components/Button/Button";
import Footer from "../components/Footer/Footer";
import '../App.css';

function Home() {
    return (
        <div>
            <Header />
            <div className="About">  
                        <div className='Profile'>
                            <div className='Title'>
                                <h1 className='Callout'>Hello, World! It's Me</h1>
                                <h1 className='Name'>Vitor Paladini</h1>
                                <h1 className='Callout'>And I am a <span>Quality Assurance Analyst</span></h1>
                            </div>
                        </div>
                        <h3 className='Text'>Professional with experience in Software Quality Assurance, working for over a year in integration, system, and acceptance testing. I am proficient in using Cypress and Appium for web and mobile automation, as well as Postman and JMeter for API and performance testing. I also apply QA methodologies such as BDD and shift-left testing and have expertise in JavaScript, TypeScript, Python, HTML/CSS, among other web development technologies and frameworks. Skilled with SQL, DynamoDB, and PostgreSQL databases, I excel at identifying inconsistencies and producing accurate reports. I work in an interdisciplinary manner to deliver products aligned with industry best practices. Focused on continuous improvement, I offer solutions to optimize the end-user experience by integrating GitHub Actions into CI/CD pipelines for greater agility and reliability in deliveries.</h3>
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
            <Footer />
        </div>
    );
}

export default Home;