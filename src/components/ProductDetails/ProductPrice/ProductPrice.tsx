import React, {FC, JSX} from 'react';
import { calculatePrice } from "../../../utils/calculatePrice";
import "./ProductPrice.scss"

interface ProductPriceProps {
    isDeal: {
        deal: boolean;
        message?: string;
    };
    productPrice: Pick<Product, "id" | "price" | "currency">;
}

const ProductPrice: FC<ProductPriceProps> = ({ isDeal, productPrice }) : JSX.Element => {
    const { id, price, currency } = productPrice;
    const { deal } = isDeal;
    if (deal) {
        const { oldPrice, newPrice } = calculatePrice(price, deal);
        return (
            <div className="product-item__price-wrap" data-id={id}>
                <span className="product-item__price_red">
                    <div className="offers">
                        <span className="price__item">{newPrice}</span>
                        <span className="currency">{currency}</span>
                    </div>
                </span>
                <span className="product-item__price_old">
                    <div className="offers">
                        <span className="price__item">{oldPrice}</span>
                        <span className="currency">{currency}</span>
                    </div>
                </span>
            </div>
        )
    } else {
        return (
            <div className="product-item__price-wrap" data-id={id}>
                <span className="product-item__price">
                    <div className="offers"><span className="price__item">{price}</span>
                        <span className="currency">{currency}</span>
                    </div>
                </span>
            </div>
        )
    }
}
export default ProductPrice;