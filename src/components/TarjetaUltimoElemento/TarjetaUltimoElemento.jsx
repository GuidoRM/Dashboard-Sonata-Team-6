import "./styles_tarjetaUltimoElemento.css"

function ContenedorTarjetaTotal() {
    return (
        <>
            <section className="tarjetaUltimoElemento_contenedor">
                <img className="tarjetaUltimoElemento_imagen" src="https://i.scdn.co/image/ab67616d0000b273ee2df133409d1e2cf0c07c19" alt="Ultimo Producto"/>
                <section className="tarjetaUltimoElemento_informacion">
                    <h1 className="tarjetaUltimoElemento_titulo">Ejemplo Titulo</h1>
                    <p className="tarjetaUltimoElemento_descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptatibus. Accusamus aliquam, numquam reprehenderit praesentium cumque sunt est illum repellendus.</p>
                    <span className="tarjetaUltimoElemento_boton">Ver más</span>
                </section>
                
            </section>
        </>
    );
}

export default ContenedorTarjetaTotal;