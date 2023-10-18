import PropTypes from "prop-types";
import {Navigate} from "react-router-dom";
import {AuthContext} from "../context/AuthProvider";
import {useContext} from "react";
import Loading from "../components/Loading/Loading";

const PublicRouter = ({children}) => {
  const {user, loading} = useContext(AuthContext);
  if (loading) {
    return <Loading />;
  }
  if (user) {
    return <Navigate to={"/"} />;
  } else {
    return children;
  }
};

PublicRouter.propTypes = {
  children: PropTypes.node,
};

export default PublicRouter;
