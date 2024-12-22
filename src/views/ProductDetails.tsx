import Navigation from "../components/Navigation/Navigation";
import ProductDetail from "../components/ProductDetail/ProductDetail";
import './ProductDetails.css'

const ProductDetails = () =>{
    return (
        <div className="productDetails">
            <Navigation/>
            <ProductDetail/>
        </div>
    );
}

export default ProductDetails;