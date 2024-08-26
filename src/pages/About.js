import '../App.css';
import ProfileImage from '../components/ProfileImage';

function About() {
    return (
      <section id='About'>
        <div>
          <h2 className='Title-item'>Hello, World! It's Me</h2>
          <h1 className='Title-name'>Vitor Paladini</h1>
          <h2 className='Title-item'>And I am a <span className='Highlight'>Computer Science Student</span></h2>
          <h3 className='Text-item'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut diam cursus, suscipit nisl et, hendrerit nisi. Suspendisse auctor eros in placerat sodales. Suspendisse ut rutrum tellus, at faucibus augue. Sed eros ligula, ultrices a porttitor ac, aliquet porttitor erat. Nulla nulla velit, aliquet non rhoncus consequat, finibus in nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed porttitor nulla sed molestie interdum. Nulla porttitor nibh leo, vitae blandit ex ullamcorper in. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
        </div>
        <ProfileImage img='/images/profile.png' />
      </section>
    )
  }

export default About;