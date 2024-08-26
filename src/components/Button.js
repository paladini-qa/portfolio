import '../App.css'

function Button({ text }) {
    return (
        <a href='/Curriculo.pdf' download='VitorPaladiniCV.pdf'><button className='Button'><h3>{text}</h3></button></a>
    )
}

export default Button;