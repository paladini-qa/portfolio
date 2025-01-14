import '../App.css';
import Timeline from '../components/Timeline/Timeline';
import Header from '../components/Header/Header';
import Footer from "../components/Footer/Footer";

function Experience() {
    const events = [
        {
            date: 'October 2024 - Present',
            title: 'Internship - Quality Assurance at Grupo Arcca',
            description: 'Manual testing on web/mobile platforms, documentation creation, and requirements analysis'
        },
        {
            date: 'September 2023 - September 2024',
            title: 'Internship - Quality Assurance at SMT Technology Solutions',
            description: 'Automated and manual testing, requirements gathering, technical documentation'
        },
        {
            date: 'February 2024 - September 2024',
            title: 'Quality Assurance at PlaybookUX',
            description: 'Test automation, manual web testing, technical documentation'
        },
        {
            date: 'October 2022 - August 2023',
            title: 'Support Analyst at Jacad',
            description: 'Customer service, technical support, and documentation management'
        }
    ];
    return (
        <>
            <Header/>
            <h1 className='title'>Experiences</h1>
            <div className="experience">
                <Timeline events={events}/>
            </div>
            <Footer/>
        </>
    );
}

export default Experience;
