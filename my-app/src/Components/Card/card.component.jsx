import style from './card.module.css'
import { Link } from 'react-router-dom';



const Card = ({ image,name,myDiets,id }) => {

 return (
    <div className={style.cardC}>
       
      <h2>{name}</h2>
      
      <p>Tipos de dietas.: {myDiets}</p>
      <Link to={`/home/${id}`} > 
      <img className={style.img} src={image} alt={name} />
      </Link>
    </div>
  );
};





export default Card