import Generos from "./Generos";
import "./styles_generos.css"
import { useState, useEffect } from "react";



function ContenedorGeneros() {

    const [albums, setAlbums] = useState([])

    useEffect(() => {
        fetch('http://localhost:3030/api/products')
        .then((response) => {
            return response.json()
        })
        .then((albums) => {
            setAlbums(albums)
            console.log(JSON.parse(albums.countByGenre))
        })
    }, [])
    return (
        <>
            <section className="contenedor_generos">
                <h1>Generos</h1>
                <Generos categoria={"Rock"}  />
                <Generos categoria={"Pop"} />
                <Generos categoria={"Clasica"} />
                <Generos categoria={"Electronica"} />
                <Generos categoria={"Rap"} />
                <Generos categoria={"Reggaeton"} />
                <Generos categoria={"Trap"} />
                <Generos categoria={"Cumbia"} />
                <Generos categoria={"Punk"} />
                <Generos categoria={"Tango"} />
            </section>
        </>
    );
}

export default ContenedorGeneros;