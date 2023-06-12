//React Router Dom -> Switch = Routes
import { Link, Route, Routes } from 'react-router-dom'

//Estilos
import "./styles_sidebar.css"

//Ruta logo
import logoSonata from './logo_sonata.png';

//Componentes
import NotFound from '../NotFound';
import Principal from '../Principal'
import ContenedorTarjetaTotal from "../TarjetasTotal/ContenedorTarjetaTotal";


function SideBar() {
    return (
        <>
            <section className="sidebar_contenedor">
                <section className='sidebar_contenedor_imagen'>
                    <img className="sidebar_imagen" src={logoSonata} alt="Logo Sonata" />
                </section>

                <section className="sidebar_botonDashboard">
                    <Link to="/">Dashboard - Sonata</Link>
                </section>

                <section className="sidebar_botones">
                    <Link to="/totales">Totales</Link>
                    <Link to="/ultimoProducto">Ultimo Producto</Link>
                    <Link to="/categorias">Categorias</Link>
                    <Link to="/productos">Productos</Link>
                </section>

            </section>

            <section className='contenedor_contenido'>
                
                <Routes>
                    <Route path="/" element={<Principal />} />
                    <Route path="/totales" element={<ContenedorTarjetaTotal />} />
                    <Route path="/ultimoProducto" element={<Principal />} />
                    <Route path="/categorias" element={<Principal />} />
                    <Route path="/productos" element={<Principal />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>

            </section>


        </>
    );
}

export default SideBar;