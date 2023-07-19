import Cards from "../Cards/cards.component";
import styles from "./home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getallrecipes } from "../../Redux/actions";
import { useEffect, useState } from "react";
import Paginado from "../Paginado/paginado";
import style from "../Paginado/paginado.module.css";
import { setSortType } from "../../Redux/actions";

const Home = () => {
  const dispatch = useDispatch();
  const { recipes, sortType } = useSelector((state) => state); // Acceder al estado global de Redux

  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(9);

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;




  
  const sortRecipes = () => {
    if (sortType === "all") {
      return recipes;
    } else if (sortType === "created") {
      return recipes.filter((recipe) => recipe.createdInDb);
    } else {
      return recipes.filter((recipe) => !recipe.createdInDb);
    }
  };

  const currentRecipes = sortRecipes().slice(indexOfFirstRecipe, indexOfLastRecipe);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getallrecipes());
  }, [dispatch]);

  const handleSortTypeChange = (e) => {
    dispatch(setSortType(e.target.value));
  };

  return (
    <div className={styles.home}>
      <div className={style.paginado}>
        <Paginado
          recipesPerPage={recipesPerPage}
          recipes={sortRecipes().length}
          paginado={paginado}
          currentPage={currentPage}
        />
      </div>
      <div className={styles.filter}>
        <label htmlFor="sortType">Ordenar por:</label>
        <select
          id="sortType"
          value={sortType}
          onChange={handleSortTypeChange}
        >
          <option value="all">Todos</option>
          <option value="created">Creados en la BD</option>
          <option value="not-created">No creados en la BD</option>
        </select>

        
      </div>
      <Cards recipes={currentRecipes} />
    </div>
  );
};

export default Home;