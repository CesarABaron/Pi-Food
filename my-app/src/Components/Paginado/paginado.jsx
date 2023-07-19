import React from "react";
import style from './Paginado.module.css';

const Paginado = ({ recipesPerPage, recipes, paginado, currentPage }) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(recipes / recipesPerPage); i++) {
      pageNumbers.push(i);
    }
  
    const goToPreviousPage = () => {
      if (currentPage > 1) {
        paginado(currentPage - 1);
      }
    };
  
    const goToNextPage = () => {
      if (currentPage < pageNumbers.length) {
        paginado(currentPage + 1);
      }
    };
  
    return (
      <nav className={style.contpag}>
        <ul>
          <button
            className={`${style.button} ${style.arrow}`}
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
          >
            Anterior
          </button>
          {pageNumbers.map((number) => (
            <button
              className={`${style.button} ${currentPage === number ? style.active : ""}`}
              key={number}
              onClick={() => paginado(number)}
            >
              {number}
            </button>
          ))}
          <button
            className={`${style.button} ${style.arrow}`}
            onClick={goToNextPage}
            disabled={currentPage === pageNumbers.length}
          >
            Siguiente
          </button>
        </ul>
      </nav>
    );
  };

export default Paginado;