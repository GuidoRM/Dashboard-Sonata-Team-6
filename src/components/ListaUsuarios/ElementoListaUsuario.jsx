import "./styles_listaUsuarios.css"
import PropTypes from 'prop-types';

function ElementoListaUsuario({id, nombre, email, imagen, isComposer }) {
    return (
        <>
            <tr>
                <td className="ElementoListaUsuario_id">{id}</td>
                <td><img className="ElementoListaUsuario_imagen" src={"http://localhost:3030/"+imagen} alt="" /></td>
                <td>{nombre}</td>
                <td className="ElementoListaUsuario_email">{email}</td>
                <td className="ElementoListaUsuario_isComposer">{isComposer==1?"Compositor":"Cliente"}</td>
            </tr>
        </>
    );
}

ElementoListaUsuario.propTypes = {
    id: PropTypes.number,
    nombre: PropTypes.string,
    email: PropTypes.string,
    imagen: PropTypes.string,
    isComposer: PropTypes.number,
};

ElementoListaUsuario.defaultProps = {
    id: 0,
    nombre: "Sin registro",
    email: "Sin registro",
    imagen: "https://i.scdn.co/image/ab67616d0000b273ee2df133409d1e2cf0c07c19",
    isComposer: 0
}


export default ElementoListaUsuario;