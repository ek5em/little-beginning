import React from "react";

import Loader from "../loader/Loader";

const IsLoadingChecker = ({ children, error, isLoading }) => {
   return (
      <>
         {error ? (
            <h2>Произошла ошибка {error}</h2>
         ) : isLoading ? (
            <Loader />
         ) : (
            children
         )}
      </>
   );
};

export default IsLoadingChecker;
