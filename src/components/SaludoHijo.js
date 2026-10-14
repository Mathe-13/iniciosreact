function SaludoHijo(props) {
    let ejecutarPadre = props.metodoPadre;

    return (<div>
        <h2>Saludo hijo</h2>
        <button onClick={ () => ejecutarPadre("Luke " + props.idhijo) }>
            Llamar al parent
        </button>
    </div>)
}

export default SaludoHijo;