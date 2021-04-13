import { useParams } from "react-router-dom";
import InfoPagina from "../componentes/InfoPagina";

const PaginaPrincipal = () => {
  const { numero } = useParams();
  return (
    <>
      <header className="cabecera">
        <InfoPagina numero={numero} />
      </header>
    </>
  );
};

export default PaginaPrincipal;
