import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { privateRoutes, publicRoutes } from "../../routes/index";

const AppRouter = () => {
   const { isAuth } = useContext(AuthContext);
   const routes = isAuth ? privateRoutes : publicRoutes;
   return (
      <Routes>
         {routes.map((route) => {
            const { path, exact, component } = route;
            return <Route key={path} path={path} exact={exact} Component={component} />;
         })}
      </Routes>
   );
};
export default AppRouter;
