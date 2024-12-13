import Button from "./Button";

function CardProduct({img, name, text, price}) {
    return (
        <div className="card">
            <img src={img} alt="product image" />
            <div className="card-body">
                <h3 className="card-title">{name}</h3>
                <p className="card-text" style={ { fontSize: ".80rem" } }>
                    {text}
                </p>

                <div>
                    <p className="card-price">$ ETH {price}</p>
                </div>

                <Button>Agregar al carrito</Button>

            </div>
        </div>
    );
}

export default CardProduct
//rfce