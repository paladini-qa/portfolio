import './Card.css';

function Card({ title, description, imageUrl, link }) {
  return (
    <a href={link} className="card">
      <img src={imageUrl} alt={description} className="card-img" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
      </div>
    </a>
  );
}

export default Card;