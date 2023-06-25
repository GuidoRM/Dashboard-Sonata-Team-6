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
import ContenedorTarjetaUltimoElemento from '../TarjetaUltimoElemento/ContenedorTarjetaUltimoElemento';
import ListaUsuarios from '../ListaUsuarios/ListaUsuarios';
import ContenedorGeneros from '../Generos/ContenedorGeneros';

function SideBar() {
    return (
        <>
            <section className="sidebar_contenedor">
                <section className='sidebar_contenedor_imagen'>
                    <img className="sidebar_imagen" src={logoSonata} alt="Logo Sonata" />
                </section>

                <Link className="sidebar_botonDashboard" to="/"> <i className="fa-solid fa-table-columns"></i> <span>Dashboard - Sonata</span></Link>

                <section className="sidebar_botones">
                    <Link to="/totales"><i className="fa-solid fa-square-poll-vertical"></i> <span>Totales</span></Link>
                    <Link to="/generos"> <i className="fa-solid fa-ranking-star"></i><span>Generos</span></Link>
                    <Link to="/ultimasAdiciones"> <i className="fa-solid fa-fire"></i> <span>Últimas adiciones</span></Link>
                    <Link to="/productos"> <i className="fa-solid fa-compact-disc"></i><span>Productos</span></Link>
                    <Link to="/usuarios"> <i className="fa-solid fa-user"></i><span>Usuarios</span></Link>

                </section>

            </section>

            <section className='contenedor_contenido'>
                
                <Routes>
                    <Route path="/" element={<Principal />} />
                    <Route path="/totales" element={<ContenedorTarjetaTotal />} />
                    <Route path="/ultimasAdiciones" element={<ContenedorTarjetaUltimoElemento/>} />
                    <Route path="/generos" element={<ContenedorGeneros />} />
                    <Route path="/productos" element={<Principal />} />
                    <Route path="/usuarios" element={<ListaUsuarios />} />
                    <Route element={<NotFound />} />
                </Routes>

            </section>


        </>
    );
}

export default SideBar;