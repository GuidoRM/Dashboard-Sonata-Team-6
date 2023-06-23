import "./styles_listaUsuarios.css"
import PropTypes from 'prop-types';

function ListaUsuarios({nombre, tipo, imagen}) {
    return (
        <>
            <section className="elementoListaUsuario_contenedor">

                

                <img className="tarjetaUltimoElemento_imagen" src={"http://localhost:3030/"+imagen} alt="Ultimo Producto"/>

                <section className="tarjetaUltimoElemento_informacion">
                    <h1 className="tarjetaUltimoElemento_titulo">{nombre}</h1>
                    <span className="tarjetaUltimoElemento_boton">Ver más</span>
                </section>
                
            </section>
        </>
    );
}

ListaUsuarios.propTypes = {
    nombre: PropTypes.string,
    tipo: PropTypes.string,
    imagen: PropTypes.string,
};

ListaUsuarios.defaultProps = {
    nombre: "Nombre Elemento",
    tipo: "Elemento",
    imagen: "https://i.scdn.co/image/ab67616d0000b273ee2df133409d1e2cf0c07c19"
}


export default ListaUsuarios;