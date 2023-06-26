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
            .then((albumss) => {
                setAlbums(albumss.countByGenre)
                console.log(albumss.countByGenre)
            })
    }, [])
    return (
        <>
            <section className="contenedor_generos">
                <h1>Generos</h1>
                {albums.map(album => {
                    return (<Generos key={album.name} categoria={album.name} cantidad={album.count}/>)
                })
                }


            </section>
        </>
    );
}

export default ContenedorGeneros;