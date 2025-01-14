import '../../App.css';
import Card from '../../components/Card.js';

function Projects() {
    return (
      <section id='Projects'>
        <h2 className='Title-item'>Projects</h2>
        <div className='Card-list'>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    )
  }

export default Projects;