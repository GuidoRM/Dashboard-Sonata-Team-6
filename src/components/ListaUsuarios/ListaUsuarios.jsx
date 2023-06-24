import "./styles_listaUsuarios.css"


import { useState, useEffect, useRef } from 'react';
import ElementoListaUsuario from "./ElementoListaUsuario";

function ListaUsuarios() {
    const [keyword, setKeyword] = useState("0");
    const [usuarioFiltro, setUsuarioFiltro] = useState([]);
    const inputTexto = useRef();
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:3030/api/users')
            .then((response) => {
                return response.json()
            })
            .then((users) => {
                setUsers(users.Users)
            })
    }, [])

    useEffect(() => {
        fetch(`http://localhost:3030/api/users/${keyword}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setUsuarioFiltro(data)

            })
    }, [keyword]);

    const filtrador = (e) => {
        e.preventDefault();
        setKeyword(inputTexto.current.value)
    }

    return (
        <>
            <section className="ListaUsuario_contenedor">
                <form className="ListaUsuario_buscador" onSubmit={(e) => filtrador(e)} method="GET">
                    <h1>Usuarios del Sistema </h1>
                    <div className="ListaUsuario_contenedorBuscador">
                        <input onChange={(e) => filtrador(e)} placeholder="Buscar por #id" className="ListaUsuario_campoBuscar" ref={inputTexto} type="text" />
                        <button className="ListaUsuario_botonBuscar"><i className="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                </form>
                {usuarioFiltro.id == 0 && keyword!="0"?<span className="ListaUsuario_respuesta">{"No se han encontrado resultados del usuario con ID "+keyword}</span>: ""}
                <table className="tablaElementoUsuario">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Imagen</th>
                            <th>Nombre</th>
                            <th className="ElementoListaUsuario_email">Email</th>
                            <th className="ElementoListaUsuario_isComposer">Tipo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            usuarioFiltro.id != 0 && usuarioFiltro.id > 0 ?
                                <ElementoListaUsuario
                                    key={usuarioFiltro.id}
                                    id={usuarioFiltro.id}
                                    email={usuarioFiltro.email}
                                    nombre={usuarioFiltro.name}
                                    imagen={usuarioFiltro.image}
                                    isComposer={usuarioFiltro.isComposer}
                                />
                                :
                                users.map((user) => {
                                    return (
                                        <ElementoListaUsuario
                                            key={user.id}
                                            id={user.id}
                                            email={user.email}
                                            nombre={user.name}
                                            imagen={user.image}
                                            isComposer={user.isComposer}
                                        />
                                    );
                                })

                        }
                    </tbody>

                </table>

            </section>
        </>
    );
}
export default ListaUsuarios;