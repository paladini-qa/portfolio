import './Button.css';

function Button({ text, link, download }) {
    return (
        <a href={link} download='{download}'>
            <button className='HighlightedButton'>
                <h3 className='ButtonText'>{text}</h3>
            </button>
        </a>
    );
}

export default Button;