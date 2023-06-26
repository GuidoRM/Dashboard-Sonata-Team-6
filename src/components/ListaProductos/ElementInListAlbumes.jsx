import "../ListaUsuarios/styles_listaUsuarios.css"
import PropTypes from 'prop-types';

function ElementoListaUsuario({id, nombre, price, coin, imagen, genre }) {
    return (
        <>
            <tr>
                <td className="ElementoListaUsuario_id">{id}</td>
                <td><img className="ElementoListaUsuario_imagen" src={"http://localhost:3030/"+imagen} alt="imagen de producto" /></td>
                <td>{nombre}</td>
                <td className="ElementoListaUsuario_email">$ {price} {coin}</td>
                <td className="ElementoListaUsuario_isComposer">{genre}</td>
            </tr>
        </>
    );
}

ElementoListaUsuario.propTypes = {
    id: PropTypes.number,
    nombre: PropTypes.string,
    price: PropTypes.number,
    coin: PropTypes.string,
    imagen: PropTypes.string,
    genre: PropTypes.string,
};

ElementoListaUsuario.defaultProps = {
    id: 0,
    nombre: "Sin registro",
    price: "Sin registro",
    coin: "Sin registro",
    genre: "Sin registro",
    imagen: "https://i.scdn.co/image/ab67616d0000b273ee2df133409d1e2cf0c07c19"
}


export default ElementoListaUsuario;