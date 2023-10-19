import PropTypes from "prop-types";
import {createContext, useEffect, useState} from "react";

export const UserProductContext = createContext(null);

const UserProductProvider = ({children}) => {
  const [userProduct, setUserProduct] = useState([]);
  useEffect(() => {
    const fetchUserProduct = async () => {
      const res = await fetch("https://techventure-server.onrender.com/brands");
      const data = await res.json();
      setUserProduct(data);
    };
    fetchUserProduct();
  }, []);
  return (
    <UserProductContext.Provider value={userProduct}>{children}</UserProductContext.Provider>
  );
};

UserProductProvider.propTypes = {
  children: PropTypes.node,
};

export default UserProductProvider;
