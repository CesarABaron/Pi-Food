
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { clearDetail, getRecipesById } from "../../Redux/actions"
import style from "./detail.module.css"


// id,nombre,resumen del plato, health score,paso a paso, imagen tipos de dieta


const Detail = ()=> {

const dispatch = useDispatch()
const detail = useSelector((state)=> state.detailRecipe)

const {id} = useParams();

useEffect(()=>{
dispatch(getRecipesById(id));
return dispatch(clearDetail())
},[id])




return(<div className={style.contenedor}>
   
   <h3 className={style.titulo}>{detail?.name}</h3>
   <img src={detail?.image} alt="{detail?.name}"></img>
   <h2>Resumen de la receta:</h2>
   <p>{detail?.plateResume && new DOMParser().parseFromString(detail?.plateResume, 'text/html').documentElement.textContent}</p>
      <h2>healt Score:{detail?.healthScore}</h2>
      <p>{detail?.stepByStep}</p>
      <p>Tipos de dieta: {detail?.myDiets}</p>
   
</div>)

}


export default Detail