import style from './card.module.css'
import { Link } from 'react-router-dom';



const Card = ({ image,name,healthScore,id }) => {

 return (
    <div className={style.cardC}>
      <Link to={`/home/${id}`} >  
      <h2>Nombre: {name}</h2>
      
      <p>Puntuación de salud: {healthScore}</p>
      <img className={style.img} src={image} alt={name} />
      </Link>
    </div>
  );
};





export default Card