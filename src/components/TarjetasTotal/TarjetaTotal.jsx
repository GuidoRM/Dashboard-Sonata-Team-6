//Estilos
import "./styles_totales.css"
import PropTypes from 'prop-types';

function Totales({nombre, icono, total}) {
    return (
        <>
            <section className="total_contenedor">
                <div className="total_informacion">
                    <h2>Total {nombre}</h2>
                    <span>{total}</span>
                </div>
                <i className={"fa-solid "+ icono}></i>
            </section>
        </>
    );
}

Totales.propTypes = {
    nombre: PropTypes.string,
    icono: PropTypes.string,
    total: PropTypes.number,
};

Totales.defaultProps = {
    nombre: "Vacia",
    icono: "fa-circle-exclamation",
    total: 0,
}

export default Totales;