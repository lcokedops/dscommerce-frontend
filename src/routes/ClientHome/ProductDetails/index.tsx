import './styles.css';
import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductDeatilsCard from "../../../components/ProductDetailsCard";
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ProductDTO } from '../../../models/product';
import * as productService from "../../../services/product-service";
import * as carService from '../../../services/cart-service';

export default function Productdeatuls() {

    const params = useParams();

    const navigate = useNavigate();

    const [product, setProduct] = useState<ProductDTO>();

    useEffect(() => {
        productService.findById(Number(params.productId))
            .then(response => {
                console.log(response.data);
                setProduct(response.data);
            })
            .catch(() => {
                navigate("/");
            });
    }, []);

    function handleBuyClick() {
        if (product) {
            carService.addProduct(product);
            navigate("/cart");
        }
    }

    return (
        <main>
            <section id="product-details-section" className="dsc-container">
                {
                    product &&
                    <ProductDeatilsCard product={product} />
                }
                <div className="dsc-btn-page-container">
                    <div onClick={handleBuyClick}>
                        <ButtonPrimary text="Comprar" />
                    </div>

                    <Link to="/">
                        <ButtonInverse text="Início" />
                    </Link>
                </div>
            </section>
        </main>
    );
}