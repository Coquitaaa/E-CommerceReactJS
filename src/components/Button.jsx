// COMPONENTES DE FUNCION
//COMPONENTES DE CLASE

// * PROPS

function Button( { text, color, disabled, children } ) {

const displayText = children === undefined ? text : children;

    return(
        <button disabled={disabled} className={`btn-${color}`}> {displayText} </button>
    );
}

export default Button;