import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById } from "../../data/products"; // adjust path

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const foundProduct = getProductById(id);
    if (!foundProduct) {
      navigate("/"); // redirect if product not found
      return;
    }
    setProduct(foundProduct);
  }, [id, navigate]);

  if(!product){
    return <h1>Loading...</h1>
  };

  return (
    <div className="page">
      <div className="container">
        {product && (
          <div className="product-detail">
            <div className="product-detail-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-card-content">
              <h1 className="product-card-name">{product.name}</h1>
              <p className="product-card-price">${product.price}</p>
              <p className="product-card-description">{product.description}</p>
              <button className="btn btn-primary">Add To Cart</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}