import React, {FC, JSX, useState} from 'react';
import "./ProductTabs.scss";

interface ProductTabsProps {
    productDetails: Product;
}

const ProductTabs: FC<ProductTabsProps> = ({productDetails}): JSX.Element => {
    const product = productDetails;
    const filteredKeys = ["name", "brand", "description", "tag_list"].filter(key => key in productDetails) as (keyof Product)[];
    const [activeTab, setActiveTab] = useState(filteredKeys[0]);

    return (
        <div className="product-item-tabs">
            <ul className="product-item-tabs__nav">
                {filteredKeys.map((key) => (
                    <li
                        key={key}
                        className={activeTab === key ? "active-tab" : ""}
                        onClick={() => setActiveTab(key)}
                    >
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                    </li>
                ))}
            </ul>

            <ul className="product-item-tabs__content">
                {filteredKeys.map((key) => (
                    <li
                        key={key}
                        className={activeTab === key ? "active-tab" : ""}
                    >
                        {Array.isArray(product[key]) ?
                            (product[key] as string[]).join(", ") :
                            (product[key] as string)
                        }
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductTabs;
