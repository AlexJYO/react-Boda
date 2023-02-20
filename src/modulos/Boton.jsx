function BotonBoda({ icono, texto, botonFuncion }) {
    return (
        <div className="boton">
            <a href="#!" onClick={botonFuncion}>
                <i className={icono}></i>
                <span>{texto}</span>
            </a>
        </div>
    );
}

export default BotonBoda;