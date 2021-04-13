import { useContext } from "react";
import PropTypes from "prop-types";
import { ContextoDatos } from "../contextos/ContextoDatos";

const InfoPagina = props => {
  const { numero } = props;
  const { getDatos } = useContext(ContextoDatos);
  const datos = getDatos.datos;
  return (
    <>
      <h2>Número pasado por las props: {numero}</h2>
      <ul>
        {
          datos.filter(dato => dato.tipo === "opcion2").map(dato =>
            <li key={dato.id}><strong>Mensaje de los datos que pueden hablar:</strong> {dato.mensaje}</li>
          )
        }
      </ul>
    </>
  );
};

InfoPagina.propTypes = {
  numero: PropTypes.string.isRequired
};

export default InfoPagina;
