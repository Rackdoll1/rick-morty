import '../styles/card.css'

const Card = ({image, name, species, gender, status, origin}) => {



  return(
    <div className="card-container">
      <img src={image} alt={name}></img>
      <ul className="card-list">
        <li><h2>{name}</h2></li>
        <li>{status} - {species}</li>
        <li><p>Gender:</p> {gender}</li>
        <li><p>Location:</p>{origin}</li>
      </ul>
    </div>
  )
}

export default Card
