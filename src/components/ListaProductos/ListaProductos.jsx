import "../ListaUsuarios/styles_listaUsuarios.css"


import { useState, useEffect, useRef } from 'react';
import ElementoListaAlbumes from "./ElementInListAlbumes";

function ListaProductos() {
    const [keyword, setKeyword] = useState("0");
    const [albumFilter, setAlbumFilter] = useState([]);
    const inputTexto = useRef();
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:3030/api/products')
            .then((response) => {
                return response.json()
            })
            .then((albumes) => {
                setUsers(albumes.albums)
            })
    }, [])

    useEffect(() => {
        fetch(`http://localhost:3030/api/products/${keyword}`)
            .then(response => response.json())
            .then(data => {
                setAlbumFilter(data)
            })
    }, [keyword]);

    const filtrador = (e) => {
        e.preventDefault();
        console.log(albumFilter.id)
        setKeyword(inputTexto.current.value)
        if(!inputTexto.current.value){
            setKeyword("0")
        }
    }

    return (
        <>
            <section className="ListaUsuario_contenedor">
                <form className="ListaUsuario_buscador" onSubmit={(e) => filtrador(e)} method="GET">
                    <h1> <i className="fa-solid fa-compact-disc"></i> Productos del sistema</h1>
                    <div className="ListaUsuario_contenedorBuscador">
                        <input onChange={(e) => filtrador(e)} placeholder="Buscar por #id" className="ListaUsuario_campoBuscar" ref={inputTexto} type="text" />
                        <button className="ListaUsuario_botonBuscar"><i className="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                </form>

                {!albumFilter.id && keyword!="0" ?<span className="ListaUsuario_respuesta">{"No se han encontrado resultados del usuario con ID "+keyword}</span>: ""}
    
                <table className="tablaElementoUsuario">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Imagen</th>
                            <th>Nombre</th>
                            <th className="ElementoListaUsuario_email">Precio</th>
                            <th className="ElementoListaUsuario_isComposer">Género</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            albumFilter.id != 0 && albumFilter.id > 0 ?
                                <ElementoListaAlbumes
                                    key={albumFilter.id}
                                    id={albumFilter.id}
                                    nombre={albumFilter.name}
                                    price={parseFloat(albumFilter.price)}
                                    coin={albumFilter.coin}
                                    imagen={albumFilter.image}
                                    genre={albumFilter.genreAlbum.name}
                                />
                                :
                                users.map((user) => {
                                    return (
                                        <ElementoListaAlbumes
                                            key={user.id}
                                            id={user.id}
                                            nombre={user.name}
                                            price={parseFloat(user.price)}
                                            coin={user.coin}
                                            imagen={user.image}
                                            genre={user.genreAlbum.name}
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
export default ListaProductos;