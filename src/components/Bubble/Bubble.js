import './Bubble.css';

function Bubble({ img, title, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="Bubble-link">
      <div className="Bubble">
        <img src={img} alt={title} className="Bubble-img" />
        <div className="Bubble-content">
        </div>
      </div>
    </a>
  );
}

export default Bubble;
