//Componentes
import ListaUsuarios from "./ListaUsuarios/ListaUsuarios";
import ContenedorTarjetaTotal from "./TarjetasTotal/ContenedorTarjetaTotal";
import ContenedorTarjetaUltimoElemento from "./TarjetaUltimoElemento/ContenedorTarjetaUltimoElemento";

function Principal() {
    return (
        <>
            <ContenedorTarjetaTotal/>
            <ContenedorTarjetaUltimoElemento/>
            <ListaUsuarios></ListaUsuarios>
        </>
    );
}

export default Principal;