//Componentes
import ListaUsuarios from "./ListaUsuarios/ListaUsuarios";
import ContenedorTarjetaTotal from "./TarjetasTotal/ContenedorTarjetaTotal";
import ContenedorTarjetaUltimoElemento from "./TarjetaUltimoElemento/ContenedorTarjetaUltimoElemento";
import ContenedorGeneros from "./Generos/ContenedorGeneros";

function Principal() {
    return (
        <>
            <ContenedorTarjetaTotal/>
            <ContenedorTarjetaUltimoElemento/>
            <ListaUsuarios></ListaUsuarios>
            <ContenedorGeneros/>
        </>
    );
}

export default Principal;