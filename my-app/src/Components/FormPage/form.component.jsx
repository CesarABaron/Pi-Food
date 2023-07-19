import { useState } from "react";
import styles from "./form.module.css";
import { useDispatch } from "react-redux";
import { recipeCreate } from "../../Redux/actions";
import React from "react";

const Form = () => {
  const dispatch = useDispatch();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [selectedDiets, setSelectedDiets] = useState([]);

  const handleDietSelection = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedDiets((prevSelectedDiets) => [...prevSelectedDiets, value]);
    } else {
      setSelectedDiets((prevSelectedDiets) =>
        prevSelectedDiets.filter((diet) => diet !== value)
      );
    }
  };

  const [input, setInput] = useState({
    name: "",
    plateResume: "",
    healthScore: "",
    stepByStep: "",
    image: "",
    myDiets: [],
  });

  const [errors, setErrors] = useState({
    name: "",
    plateResume: "",
    healthScore: "",
    stepByStep: "",
    image: "",
    myDiets: "",
  });

  const validate = (input) => {
    const { name, plateResume, healthScore, stepByStep, myDiets, image } = input;
    let errors = {};

    if (!name.trim()) {
      errors.name = "El nombre es obligatorio";
    }

    if (!plateResume.trim()) {
      errors.plateResume = "La descripción breve es obligatoria";
    }

    if (!healthScore.trim()) {
      errors.healthScore = "El puntaje de salud es obligatorio";
    } else {
      const healthScoreNumber = Number(healthScore);
      if (isNaN(healthScoreNumber) || healthScoreNumber < 1 || healthScoreNumber > 100) {
        errors.healthScore = "El puntaje de salud debe ser un número entre 1 y 100";
      }
    }

    if (!stepByStep.trim() || stepByStep.trim().length < 5) {
      errors.stepByStep = "Debe agregar el paso a paso de la receta y tener al menos 5 caracteres";
    }

  

    if (!image) {
      errors.image = "La imagen es obligatoria";
    } else {
      const urlRegex =
        /^(http(s)?:\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/;
      if (!urlRegex.test(image)) {
        errors.image = "La URL de la imagen no es válida";
      }
    }

    return errors;
  };

  function handleSubmit(e) {
    e.preventDefault();
    setIsFormSubmitted(true);

    const validationErrors = validate(input);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0 && selectedDiets.length > 0) {
      const formattedInput = {
        ...input,
        stepByStep: [input.stepByStep],
        myDiets: selectedDiets,
      };
      dispatch(recipeCreate(formattedInput));
      console.log(formattedInput);
    }
  }

  function handleChange(e) {
    const { name, value, type } = e.target;
    const newValue = type === "checkbox" ? e.target.checked : value;

    if (name === "myDiets") {
      setSelectedDiets((prevSelectedDiets) =>
        newValue ? [...prevSelectedDiets, value] : prevSelectedDiets.filter((diet) => diet !== value)
      );
    } else {
      setInput((prevInput) => ({
        ...prevInput,
        [name]: newValue,
      }));
    }
  }

  return (
    <div className={styles.contenedor}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1>Creación de receta</h1>

        <div className={styles.inputContainer}>
          <input
            placeholder="Nombre de la receta"
            value={input.name}
            onChange={handleChange}
            name="name"
            type="text"
          />
        </div>
        <div className={styles.inputContainer}>
          <input
            placeholder="Resumen del plato"
            value={input.plateResume}
            onChange={handleChange}
            name="plateResume"
            type="text"
          />
        </div>
        <div className={styles.inputContainer}>
          <input
            placeholder="Puntuación de saludable"
            value={input.healthScore}
            onChange={handleChange}
            name="healthScore"
            type="text"
          />
        </div>
        <div className={styles.inputContainer}>
          <textarea
            placeholder="Paso a paso"
            value={input.stepByStep}
            onChange={handleChange}
            name="stepByStep"
          />
        </div>
        <div className={styles.inputContainer}>
          <input
            type="url"
            value={input.image}
            onChange={handleChange}
            name="image"
            placeholder="Introduce la URL de la receta"
          />
        </div>
        <div>Selecciona los tipos de dieta</div>
        <br />
        <div className={styles.selectContainer}>
          <div className={styles.selectContainer}>
            <label>
              <input
                type="checkbox"
                checked={selectedDiets.includes("gluten free")}
                value="gluten free"
                onChange={handleDietSelection}
              />
              gluten free
            </label>
            <label>
              <input
                type="checkbox"
                checked={selectedDiets.includes("dairy free")}
                value="dairy free"
                onChange={handleDietSelection}
              />
              dairy free
            </label>
            <label>
              <input
                type="checkbox"
                checked={selectedDiets.includes("lacto ovo vegetarian")}
                value="lacto ovo vegetarian"
                onChange={handleDietSelection}
              />
              lacto ovo vegetarian
            </label>
            <label>
              <input
                type="checkbox"
                checked={selectedDiets.includes("vegan")}
                value="vegan"
                onChange={handleDietSelection}
              />
              vegan
            </label>
            <label>
              <input
                type="checkbox"
                checked={selectedDiets.includes("paleolithic")}
                value="paleolithic"
                onChange={handleDietSelection}
              />
              paleolithic
            </label>
            <label>
              <input
                type="checkbox"
                checked={selectedDiets.includes("primal")}
                value="primal"
                onChange={handleDietSelection}
              />
              primal
            </label>
            <label>
              <input
                type="checkbox"
                checked={selectedDiets.includes("whole 30")}
                value="whole 30"
                onChange={handleDietSelection}
              />
              whole 30
            </label>
            <label>
              <input
                type="checkbox"
                checked={selectedDiets.includes("pescatarian")}
                value="pescatarian"
                onChange={handleDietSelection}
              />
              pescatarian
            </label>
            <label>
              <input
                type="checkbox"
                checked={selectedDiets.includes("ketogenic")}
                value="ketogenic"
                onChange={handleDietSelection}
              />
              ketogenic
            </label>
            <label>
              <input
                type="checkbox"
                checked={selectedDiets.includes("fodmap friendly")}
                value="fodmap friendly"
                onChange={handleDietSelection}
              />
              fodmap friendly
            </label>
          </div>
        </div>
        {isFormSubmitted && Object.keys(errors).length !== 0 && (
          <div>
            {Object.entries(errors).map(([key, value]) => (
              <p key={key} className={styles.error}>
                {value}
              </p>
            ))}
          </div>
        )}
        <br />
        <button className={styles.boton} type="submit">Crear Receta</button>
      </form>
    </div>
  );
};

export default Form;

