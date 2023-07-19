import { useState } from "react";
import styles from "../NavBar/navBar.module.css";
import { useDispatch } from "react-redux";
import { getRecipesByname } from "../../Redux/actions";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getRecipesByname(name));
  };

  const isHomePage = location.pathname === "/home";
  const isCreatePage = location.pathname === "/create";

  return (
    <div className={styles.barra}>
      {!isCreatePage && (
        <>
          <input
          className={styles.input}
            onChange={handleChange}
            value={name}
            placeholder="   Busqueda de receta"
            type="search"
          />
          <button className={styles.buscar}type="submit" onClick={handleSubmit}>
            buscar
          </button>
        </>
      )}

      {!isHomePage && (
        <Link className={styles.link} to="/home">
          <button className={styles.buscar}>Regresar</button>
        </Link>
      )}
      {!isCreatePage && (
        <Link to="/create">
          <button className={styles.buscar}>Crear Receta</button>
        </Link>
      )}
    </div>
  );
};

export default NavBar;
