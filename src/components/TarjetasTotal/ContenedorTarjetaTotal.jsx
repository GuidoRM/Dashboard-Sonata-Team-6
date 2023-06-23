//Componentes
import TarjetaTotal from "./TarjetaTotal";
import "./styles_totales.css"
import { useState, useEffect } from 'react';

function ContenedorTarjetaTotal () {

    const [albums, setAlbums] = useState([])
    const [countByGenres, setCountByGenres] = useState(0)
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:3030/api/products')
        .then((response) => {
            return response.json()
        })
        .then((albums) => {
            setCountByGenres( Object.keys(albums.countByGenre).length)
            setAlbums(albums)
        })

        fetch('http://localhost:3030/api/users')
        .then((response) => {
            return response.json()
        })
        .then((users) => {
            setUsers(users)
        })

    }, [])

        return (
            <>
                <section className="totales_contenedor">
                    <h1>Datos del sistema</h1>
                    <TarjetaTotal nombre={"Usuarios"} icono={"fa-user"} total={users.count}/>
                    <TarjetaTotal nombre={"Productos"} icono={"fa-compact-disc"} total={albums.count}/>
                    <TarjetaTotal nombre={"Categorias"} icono={"fa-ranking-star"} total={countByGenres}/>
                </section>
            </>
        );
    }
    

export default ContenedorTarjetaTotal;