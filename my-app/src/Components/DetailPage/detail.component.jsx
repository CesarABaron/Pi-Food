
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getRecipesById } from "../../Redux/actions"


// id,nombre,resumen del plato, health score,paso a paso, imagen tipos de dieta


const Detail = ()=> {

const dispatch = useDispatch()
const detail = useSelector((state)=> state.detailRecipe)

const {id} = useParams()

useEffect(()=>{
dispatch(getRecipesById(id))
},[dispatch])



return(<div>
   <h3>{detail?.name}</h3>


   
</div>)

}


export default Detail