import style from './card.module.css'



const Card = ({ image,name,plateResume,healthScore,stepByStep,myDiets }) => {

 return (
    <div className={style.cardC}>
      <h2>Nombre: {name}</h2>
      <p>Puntuación de salud: {healthScore}</p>
      <img className={style.img} src={image} alt={name} />
      {/* <p>Resumen del plato: {plateResume}</p>
      <p>{stepByStep}</p>
      <p>{myDiets}</p> */}
    </div>
  );
};





export default Card