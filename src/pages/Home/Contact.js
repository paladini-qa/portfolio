import '../../App.css';
import Bubble from '../../components/Bubble'
import Button from '../../components/Button'
import ProfileImage from '../../components/ProfileImage';

function Contact() {
    return(
        <><div className='Bubble-list'>
            <Bubble 
            img='/images/linkedin.png' 
            title='LinkedIn' 
            link='https://www.linkedin.com/in/paladini-qa'/>
            <Bubble 
            img='/images/github.png' 
            title='GitHub' 
            link='https://github.com/paladini-qa' />
            <Button text='Download CV' />
        </div></>
    )
}

export default Contact;