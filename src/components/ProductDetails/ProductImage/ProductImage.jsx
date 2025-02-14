import "./ProductImage.scss"

const ProductImage = ({productImage}) => {
    const { name, image } = productImage;
    
    return (
        <div id="product-image" className="product-item__image">
            <img
                className="img"
                loading="lazy"
                src={image}
                alt={`Photo of ${name}`}
            />
        </div>
    )
}

export default ProductImage
