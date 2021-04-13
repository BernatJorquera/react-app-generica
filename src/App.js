import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import ContextoDatosProvider from "./contextos/ContextoDatosProvider";
import PaginaPrincipal from "./paginas/PaginaPrincipal";
import NotFoundPagina from "./paginas/NotFoundPagina";

function App() {
  return (
    <div className="contenedor">
      <header className="cabecera">
        <h1>React App Genérica</h1>
      </header>
      <ContextoDatosProvider>
        <Router>
          <Switch>
            <Route path="/principal/:numero" exact>
              <PaginaPrincipal />
            </Route>
            <Route path="/" exact>
              <Redirect to="*" />
            </Route>
            <Route path="*">
              <NotFoundPagina />
            </Route>
          </Switch>
        </Router>
      </ContextoDatosProvider>
    </div>
  );
}

export default App;
