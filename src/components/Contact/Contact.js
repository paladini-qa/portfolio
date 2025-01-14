import './Contact.css';
import Bubble from '../Bubble/Bubble';
import Button from '../Button/Button';

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