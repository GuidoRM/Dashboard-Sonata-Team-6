import "../ListaUsuarios/styles_listaUsuarios.css"


import { useState, useEffect, useRef } from 'react';
import ElementoListaAlbumes from "./ElementInListAlbumes";

function ListaUsuarios() {
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
                if(data.id){
                    setAlbumFilter(data)
                }
                else{
                    setAlbumFilter("")
                }
                

            })
        .catch(error =>{
            console.log("Error");
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
                    <h1>Listado de Álbumes </h1>
                    <div className="ListaUsuario_contenedorBuscador">
                        <input onChange={(e) => filtrador(e)} placeholder="Buscar por #id" className="ListaUsuario_campoBuscar" ref={inputTexto} type="text" />
                        <button className="ListaUsuario_botonBuscar"><i className="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                    <p>{albumFilter.id}</p>
                </form>
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
export default ListaUsuarios;