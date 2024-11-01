import { useParams } from "react-router-dom";
import { ProductType } from "../@types";
import useFetch from "../hooks/useFetch";

const Product = () => {

    const { id: idString } = useParams();
    const id = parseInt(idString);

    const { data: product, error, loading } = useFetch<ProductType>(`/products/${id}`);

    if (id === null || isNaN(id)) {
        return <div>Invalid product id</div>;
    }

    return (
        <div>
            <h1>Product Details</h1>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {product && (
                <div>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                </div>
            )}
        </div>
    );
};

export default Product;