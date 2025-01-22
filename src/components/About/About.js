import './About.css';
import '../../App.css';
import ProfileImage from '../ProfileImage/ProfileImage';

function About() {
    return (
      <div className='About'>
        <div className='Profile'>
          <h1 className='Callout'>Hello, World! It's Me</h1>
          <h1 className='Name'>Vitor Paladini</h1>
          <h1 className='Callout'>And I am a <span className='Highlight'>Computer Science Student</span></h1>
          <h3 className='Text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut diam cursus, suscipit nisl et, hendrerit nisi. Suspendisse auctor eros in placerat sodales. Suspendisse ut rutrum tellus, at faucibus augue. Sed eros ligula, ultrices a porttitor ac, aliquet porttitor erat. Nulla nulla velit, aliquet non rhoncus consequat, finibus in nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed porttitor nulla sed molestie interdum. Nulla porttitor nibh leo, vitae blandit ex ullamcorper in. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
        </div>
      </div>
    )
  }

export default About;