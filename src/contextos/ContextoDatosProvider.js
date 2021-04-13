import { useEffect, useReducer } from "react";
import { ContextoDatos } from "./ContextoDatos";
import { datosReducer } from "../utils/reducers/datosReducer";
import datosJSON from "../datos.json";

const ContextoDatosProvider = props => {
  const { children } = props;
  const [datos, dispatch] = useReducer(datosReducer, []);
  const getDatos = {
    total: datos.length,
    datos
  };
  useEffect(() => {
    dispatch({
      type: "cargarDatos",
      datos: datosJSON.datos
    });
  }, []);
  return (
    <ContextoDatos.Provider value={{ dispatch, getDatos }}>
      { children}
    </ContextoDatos.Provider>
  );
};

export default ContextoDatosProvider;
