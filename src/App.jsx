import BotonBoda from "./modulos/Boton";
import Formulario from "./modulos/FormularioAsistencia";
import BodaTitulo from './modulos/BodaTitulo';
import "./App.scss";


const HandleBotonMap = () => {
    window.open("https://goo.gl/maps/ubEC1KcszmVzR8p46", "_blank");
};

const HandleBotonArturo = () => {
    window.open(
        "https://api.whatsapp.com/send?phone=524622363795&text=Creo que me perdí",
        "_blank"
    );
};

const HandleBotonAndrea = () => {
    window.open(
        "https://api.whatsapp.com/send?phone=524622519363&text=Creo que me perdí",
        "_blank"
    );
};

function App() {
    
    return (
        <div className="container grid">
            
            <BodaTitulo/>
            <BotonBoda
                icono="bx bxs-map"
                texto="Como llegar"
                botonFuncion={HandleBotonMap}
            />
            <BotonBoda
                icono="bx bxl-whatsapp"
                texto="Contacto Andrea"
                botonFuncion={HandleBotonArturo}
            />
            <BotonBoda
                icono="bx bxl-whatsapp"
                texto="Contacto Arturo"
                botonFuncion={HandleBotonAndrea}
            />
            <Formulario />
        </div>
    );
}

export default App;
