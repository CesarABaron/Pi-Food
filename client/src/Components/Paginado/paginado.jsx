import React from "react";
import style from './Paginado.module.css';

const Paginado = ({recipesPerPage, recipes, paginado, currentPage}) => {
    const pageNumbers = []   
    
    for(let i = 1; i <= Math.ceil(recipes/recipesPerPage); i++){
        pageNumbers.push(i)
    }

    return  (
        <nav className= {style.contpag}>
            <ul>
                {pageNumbers && pageNumbers.map(number => (
                    <button 
                        className = {`${style.button} ${currentPage === number ? style.active : ''}`}
                        key={number}
                        onClick = {() => paginado(number)}>
                            {number}
                    </button>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Paginado;