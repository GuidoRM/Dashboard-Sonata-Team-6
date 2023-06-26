//Componentes
import ListaUsuarios from "./ListaUsuarios/ListaUsuarios";
import ContenedorTarjetaTotal from "./TarjetasTotal/ContenedorTarjetaTotal";
import ContenedorTarjetaUltimoElemento from "./TarjetaUltimoElemento/ContenedorTarjetaUltimoElemento";
import ContenedorGeneros from "./Generos/ContenedorGeneros";
import ListaProductos from "./ListaProductos/ListaProductos";

function Principal() {
    return (
        <>
            <ContenedorTarjetaTotal/>
            <ContenedorTarjetaUltimoElemento/>
            <ContenedorGeneros/>
            <ListaProductos></ListaProductos>
            <ListaUsuarios></ListaUsuarios>
        </>
    );
}

export default Principal;