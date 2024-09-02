import { Alert } from "react-bootstrap";
import FormCadProdutos from "./Formularios/FormCadProduto";
export default function TelaCadastroProduto(props) {
    return (
        <div>
            |<Alert className="mt-02 mb-02 success text-center" variant="success">
                <h2>
                    Cadastro de Produto
                </h2>
            </Alert>
            <FormCadProdutos />
        </div>
    );
}