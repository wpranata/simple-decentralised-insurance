import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";
import { Web3ReactProvider } from "@web3-react/core";

import "./index.css";
import App from "./App";
import { ExternalProvider, Web3Provider } from "@ethersproject/providers";
import { ContractContextProvider } from "./contexts/ContractContextProvider";
import InsuranceContextProvider from "./contexts/InsuranceContextProvider";
import LoadingContextProvider from "./contexts/LoadingContextProvider";

/**
 * @DOCUMENTATION
 * @Web3ReactProvider is a custom hook for React.
 * It is used to interact with the web3 providers (such as crypto wallets).
 * In this case, we are using @Web3ReactProvider to interact with a browser provider (Metamask).
 * To access the states, we can use useWeb3React().
 *
 * @SOURCE https://github.com/NoahZinsmeister/web3-react
 */

const getLibrary = (provider: ExternalProvider) => {
  return new Web3Provider(provider);
};

ReactDOM.render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
      <LoadingContextProvider>
        <ContractContextProvider>
          <InsuranceContextProvider>
            <App />
          </InsuranceContextProvider>
        </ContractContextProvider>
      </LoadingContextProvider>
    </Web3ReactProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
