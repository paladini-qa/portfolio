import '../App.css';
import Timeline from '../components/Timeline/Timeline';
import Header from '../components/Header/Header';
import Footer from "../components/Footer/Footer";

function Experience() {
    const events = [
        {
            date: 'October 2024 - Present',
            title: 'Internship - Quality Assurance',
            description: 'Manual testing on web/mobile platforms, documentation creation, and requirements analysis',
            location: 'Grupo Arcca - Rio de Janeiro, Brazil'
        },
        {
            date: 'September 2023 - September 2024',
            title: 'Internship - Quality Assurance',
            description: 'Automated and manual testing, requirements gathering, technical documentation',
            location: 'SMT Technology Solutions - São Paulo, Brazil'
        },
        {
            date: 'February 2024 - September 2024',
            title: 'Quality Assurance',
            description: 'Test automation, manual web testing, technical documentation',
            location: 'PlaybookUX - New York, USA'
        },
        {
            date: 'October 2022 - August 2023',
            title: 'Support Analyst at Jacad',
            description: 'Customer service, technical support, and documentation management',
            location: 'Jacad - Medianeira, Paraná, Brazil'
        }
    ];
    return (
        <>
            <Header/>
            <h1 className='Title'>Experiences</h1>
            <div className="experience">
                <Timeline events={events}/>
            </div>
            <Footer/>
        </>
    );
}

export default Experience;
