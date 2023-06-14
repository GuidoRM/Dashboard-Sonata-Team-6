//Componentes
import TarjetaTotal from "./TarjetaTotal";
import "./styles_totales.css"
import { useState, useEffect } from 'react';

function ContenedorTarjetaTotal () {

    const [albums, setAlbums] = useState([])

    useEffect(() => {
        fetch('http://localhost:3030/api/products')
        .then((response) => {
            return response.json()
        })
        .then((albums) => {
            setAlbums(albums)
        })
    }, [])

        return (
            <>
                <section className="totales_contenedor">
                    <h1>Datos del sistema</h1>
                    <TarjetaTotal nombre={"Usuarios"} icono={"fa-user"} total={30}/>
                    <TarjetaTotal nombre={"Productos"} icono={"fa-compact-disc"} total={albums.count}/>
                    <TarjetaTotal nombre={"Productos"} icono={"fa-ranking-star"} total={4}/>
                </section>
            </>
        );
    }
    

export default ContenedorTarjetaTotal;