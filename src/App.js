import TelaCadastroProduto from "./componentes/Telas/TelaCadastroProduto";
import TelaCadastroCategoria from "./componentes/Telas/TelaCadastroCategoria";
import TelaCadastroUsuario from "./componentes/Telas/TelaCadastroUsuario";
import TelaMenu from "./componentes/Telas/TelaMenu";
import Tela404 from "./componentes/Telas/Tela404";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TelaCadastroEntregador from "./componentes/Telas/TelaCadastroEntregadores";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        { //A ordem das rotas é importante 
        }
        <Routes>
          <Route path="/produto" element={<TelaCadastroProduto />} />
          <Route path="/categoria" element={<TelaCadastroCategoria />} />
          <Route path="/usuario" element={<TelaCadastroUsuario/>}/>
          <Route path="/entregadores" element={<TelaCadastroEntregador/>}/>
          <Route path="/" element={<TelaMenu />} />
          <Route path="*" element={<Tela404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
