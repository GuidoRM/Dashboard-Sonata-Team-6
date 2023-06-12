//Componentes
import TarjetaTotal from "./TarjetaTotal";
import "./styles_totales.css"

function ContenedorTarjetaTotal() {
    return (
        <>
            <section className="totales_contenedor">
                <h1>Totales de Datos</h1>
                <TarjetaTotal nombre={"Usuarios"} icono={"fa-user"} total={30}/>
                <TarjetaTotal nombre={"Productos"} icono={"fa-compact-disc"} total={100}/>
                <TarjetaTotal nombre={"Productos"} icono={"fa-ranking-star"} total={4}/>
            </section>
        </>
    );
}

export default ContenedorTarjetaTotal;