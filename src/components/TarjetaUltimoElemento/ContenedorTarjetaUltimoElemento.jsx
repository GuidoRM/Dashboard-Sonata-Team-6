//Componentes
import TarjetaUltimoElemento from "./TarjetaUltimoElemento"
import { useState, useEffect } from 'react';

function ContenedorTarjetaUltimoElemento() {
    const [ultimoAlbum, setUltimoAlbum] = useState([])
    const [ultimoUsuario, setUltimoUsuario] = useState([])

    useEffect(() => {
        fetch('http://localhost:3030/api/products')
        .then((response) => {
            return response.json()
        })
        .then((albums) => {
            setUltimoAlbum(albums.albums[albums.albums.length -1])
        })

        fetch('http://localhost:3030/api/users')
        .then((response) => {
            return response.json()
        })
        .then((users) => {
            console.log(users)
            setUltimoUsuario(users.Users[users.Users.length -1])
        })

    }, [])

    return (
        <>
            <section className="ContenedorTarjetaUltimoElemento">
                <h2 className="ContenedorTarjetaUltimoElemento_titulo">Últimas adiciones</h2>
                <TarjetaUltimoElemento tipo={"Producto"} nombre={ultimoAlbum.name} imagen={ultimoAlbum.image}/>
                <TarjetaUltimoElemento tipo={"Usuario"} nombre={ultimoUsuario.name} imagen={ultimoUsuario.image}/>
            </section>
        </>
    );
}

export default ContenedorTarjetaUltimoElemento;