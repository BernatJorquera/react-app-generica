export const datosReducer = (datos, action) => {
  switch (action.type) {
    case "hazAlgo":
      return datos.map(dato => {
        return { ...dato, propiedadBooleana: !dato.propiedadBooleana };
      });
    case "hazOtraCosa":
      return datos.filter(dato => dato.id === action.id);
    case "cargarDatos":
      return [...action.datos];
    default:
      return datos;
  }
};
