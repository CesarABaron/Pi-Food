import styles from "../LandingPage/landingPage.module.css"
import {Link} from "react-router-dom"


const LandingPage = () => {
  return (
    <div className={styles.container}>
      
      <Link to={"/home"} >
      <button className={styles.title} >Entrar</button>
      </Link>
    </div>
  );
};

export default LandingPage;
