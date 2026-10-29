
function ProductCard(props) {
    return (
        <div>
            <h2>Product Name: {props.name}</h2>
            <p>Price: ₹{props.price}</p>
            <p>Category: {props.category}</p>
            <p>Availability: {props.availability}</p>
            <hr />
        </div>
    );
}

export default ProductCard;
