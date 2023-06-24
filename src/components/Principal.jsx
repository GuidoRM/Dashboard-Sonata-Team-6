//Componentes
import ContenedorTarjetaTotal from "./TarjetasTotal/ContenedorTarjetaTotal";
import ContenedorTarjetaUltimoElemento from "./TarjetaUltimoElemento/ContenedorTarjetaUltimoElemento";
import ContenedorGeneros from "./Generos/ContenedorGeneros";

function Principal() {
    return (
        <>
            <ContenedorTarjetaTotal/>
            <ContenedorTarjetaUltimoElemento/>
            <ContenedorGeneros/>
        </>
    );
}

export default Principal;