//Componentes
import ContenedorTarjetaTotal from "./TarjetasTotal/ContenedorTarjetaTotal";
import ContenedorTarjetaUltimoElemento from "./TarjetaUltimoElemento/ContenedorTarjetaUltimoElemento";

function Principal() {
    return (
        <>
            <ContenedorTarjetaTotal/>
            <ContenedorTarjetaUltimoElemento/>
        </>
    );
}

export default Principal;