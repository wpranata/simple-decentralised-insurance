import { createContext, useState } from "react";
import "./Loading.css";

/**
 * @DOCUMENTATION
 * This context provides the loading states
 */

export const LoadingContext = createContext<any>(null);

const LoadingContextProvider = ({ children }: any) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingContext.Provider value={setIsLoading}>
      {isLoading ? (
        <div className="loader w-100 h-100 position-fixed top-0 d-flex justify-content-center align-items-center flex-column">
          <div className="spinner-border" role="status"></div>
          <div>
            <p>Loading...</p>
          </div>
        </div>
      ) : (
        ""
      )}
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingContextProvider;
