//Estilos
import "./styles_generos.css"
import PropTypes from 'prop-types';

function Generos({ categoria, cantidad }) {
    return (
        <>
            <section className="generos">
                <div className="informacion">
                    <h2>{categoria}</h2>
                    <div>
                        <span className="cantidad_generos">{cantidad}</span>
                    </div>
                </div>

            </section>
        </>
    );
}

Generos.propTypes = {
    categoria: PropTypes.string,
    cantidad: PropTypes.number,
};

Generos.defaultProps = {
    categoria: "Genero",
    cantidad: 0,
}

export default Generos;