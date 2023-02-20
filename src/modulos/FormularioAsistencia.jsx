import React, { useEffect, useState } from "react";

function FormularioAsistencia() {
    const [asistencia, setAsistencia] = useState("");


    async function requestAsistencia(datosPost){
        try {
            const url = 'https://server-boda.azurewebsites.net/asistencia';
            const settings = {
                method: 'POST',
                headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify({nombre: datosPost})
            };
            const fetchResponse = await fetch(url, settings);
            const data = await fetchResponse.text();
            return data;
        }catch(err){
            console.error(err);
        }
    }

    const registrarDatos = async () => {
        if(asistencia === undefined || asistencia === ''){
            alert('Error: El nombre es necesario');
            return 0;
        }
        const res = await requestAsistencia(asistencia);
        console.log(res);
        alert('Asistencia registrada con Exito');
        setAsistencia('');
        document.getElementById("datosR").value = "";
    };

    return (
        <div>
            <p id="asistencia">Confirma tu asistencia</p>
            <div id="datos">
                <p>Registra tus datos</p>
                <input
                    id="datosR"
                    type="text"
                    placeholder="Nombre *"
                    onChange={(e) => {
                        setAsistencia(e.target.value);
                    }}
                    value={asistencia}
                />
                <br />
                <div id="Confirmar">
                    <a href="#!" onClick={registrarDatos}>
                        Confirmar
                    </a>
                </div>
            </div>
        </div>
    );
}

export default FormularioAsistencia;
