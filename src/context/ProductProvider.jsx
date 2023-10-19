import PropTypes from "prop-types";
import {createContext, useEffect, useState} from "react";

export const ProductContext = createContext(null);

const ProductProvider = ({children}) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://techventure-server.onrender.com/products");
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <ProductContext.Provider value={products}>{children}</ProductContext.Provider>
  );
};

ProductProvider.propTypes = {
  children: PropTypes.node,
};

export default ProductProvider;
