import { useState } from "react"
import styles from "../NavBar/navBar.module.css"
import { useDispatch } from "react-redux"
import { getRecipesByname } from "../../Redux/actions"

const NavBar = () =>{

const dispatch = useDispatch()

    const [name,setName] = useState("")

    const handleChange = (e)=>{
        e.preventDefault()
    setName(e.target.value)
    }


const handleSubmit  = (e) =>{
    e.preventDefault()
    dispatch(getRecipesByname(name))
}

    return (
    <div className={styles.barra}>
      
        
        <input onChange={handleChange} value={name} placeholder="Busqueda" type="search"></input>
        <button type="submit" onClick={handleSubmit}>buscar</button>
       
        
    </div>)
    
    
    }
    
    
    
    export default NavBar