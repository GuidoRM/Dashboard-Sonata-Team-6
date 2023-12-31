import "./styles_tarjetaUltimoElemento.css"
import PropTypes from 'prop-types';

function ContenedorTarjetaTotal({nombre, tipo, imagen}) {
    return (
        <>
            <section className="tarjetaUltimoElemento_contenedor">

                <div className="tarjetaUltimoElemento_categoria">
                    Último {tipo}
                </div>

                <img className="tarjetaUltimoElemento_imagen" src={"http://localhost:3030/"+imagen} alt="Ultimo Producto"/>

                <section className="tarjetaUltimoElemento_informacion">
                    <h1 className="tarjetaUltimoElemento_titulo">{nombre}</h1>
                    <span className="tarjetaUltimoElemento_boton">Ver más</span>
                </section>
                
            </section>
        </>
    );
}

ContenedorTarjetaTotal.propTypes = {
    nombre: PropTypes.string,
    descripcion: PropTypes.string,
    tipo: PropTypes.string,
    imagen: PropTypes.string,
};

ContenedorTarjetaTotal.defaultProps = {
    nombre: "Nombre Elemento",
    tipo: "Elemento",
    imagen: "https://i.scdn.co/image/ab67616d0000b273ee2df133409d1e2cf0c07c19"
}


export default ContenedorTarjetaTotal;