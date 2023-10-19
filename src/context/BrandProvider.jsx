import PropTypes from "prop-types";
import {createContext, useEffect, useState} from "react";

export const BrandContext = createContext(null);

const BrandProvider = ({children}) => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    const fetchBrands = async () => {
      const res = await fetch("https://techventure-server.onrender.com/brands");
      const data = await res.json();
      setBrands(data);
    };
    fetchBrands();
  }, []);
  return (
    <BrandContext.Provider value={brands}>{children}</BrandContext.Provider>
  );
};

BrandProvider.propTypes = {
  children: PropTypes.node,
};

export default BrandProvider;
