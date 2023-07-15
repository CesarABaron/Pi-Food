import Cards from "../Cards/cards.component"
import styles from "./home.module.css"
import { useDispatch,useSelector } from "react-redux"
import { getallrecipes } from "../../Redux/actions"
import { useEffect } from "react"

const Home = () =>{

    const dispatch = useDispatch()
    const recipes = useSelector(state => state.recipes);



    useEffect(()=>{
        dispatch(getallrecipes())
    },[dispatch])

    // return(()=>{
    //     clearDetail()
    // })

    return (
    <div className={styles.home}>
        <Cards recipes={recipes}/>
    </div>)
    
    
    }
    
    
    
    export default Home