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
                        <span>{cantidad}</span>
                    </div>
                </div>

            </section>
        </>
    );
}

Generos.propTypes = {
    cantidad: PropTypes.number,
};

Generos.defaultProps = {
    cantidad: 0,
}

export default Generos;