import SaludoHijo from "./SaludoHijo";

function SaludoPadre() {
    const metodoPadre = (nombre) => {
        console.log("Yo soy tu padre, " + nombre);
    }

    return (<div>
        <h1>Saludo padre</h1>
        <SaludoHijo idhijo="1" metodoPadre={metodoPadre}/>
        <SaludoHijo idhijo="2" metodoPadre={metodoPadre}/>
    </div>)
}

export default SaludoPadre;