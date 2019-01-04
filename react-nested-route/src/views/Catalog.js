import React from "react";
import { Link } from "react-router-dom";

const products = [
  { id: "1", label: "Nutella" },
  { id: "2", label: "Pane" },
  { id: "3", label: "Latte" }
];

export const CatalogView = () => {
  return (
    <div>
      <h3>Catalog</h3>
      {products.map(({ id, label }) => (
        <Link to={`/product/${id}`}>
          {label}
          <br />
        </Link>
      ))}
    </div>
  );
};

export const ProductView = ({ match }) => {
  const product = products.find(item => item.id === match.params.id);
  console.log(products, match.params.id);
  return (
    <div>
      <h3>Product ID: {match.params.id}</h3>
      <h3>
        {product.id} - {product.label}
      </h3>
      <Link to={`/catalog`}>Back to catalog</Link>
    </div>
  );
};
