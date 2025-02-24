import React, { useState } from 'react';
import "./ProductTabs.scss";

const ProductTabs = ({ productDetails }) => {
    const product = productDetails;
    const filteredKeys = ["name", "brand", "description", "tag_list"].filter(key => key in productDetails);
    const [activeTab, setActiveTab] = useState(filteredKeys[0]);

    return (
        <div className="product-item-tabs">
            <ul className="product-item-tabs__nav">
                {filteredKeys.map((key) => (
                    <li
                        key={key}
                        className={activeTab === key && "active-tab"}
                        onClick={() => setActiveTab(key)}
                    >
                        {key.charAt(0).toUpperCase() + key.slice(1)} {/* make titles in representing style */}
                    </li>
                ))}
            </ul>
            
            <ul className="product-item-tabs__content">
                {filteredKeys.map((key) => (
                    <li
                        key={key}
                        className={activeTab === key && "active-tab"}
                    >
                        {Array.isArray(product[key]) ? product[key].join(", ") : product[key]} 
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductTabs;
