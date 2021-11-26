import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useContext } from "react";

import * as chains from "../constants/chains";
import { ContractContext } from "../contexts/ContractContextProvider";

/**
 * @DOCUMENTATION
 * The navbar provides information about:
 * - Roles (company / holder) => through Contract Context
 * - Address                  => through Web3React Context
 */

const Navbar = () => {
  const web3React = useWeb3React();
  const { accountType } = useContext(ContractContext);

  const handleConnect = () => {
    if (!web3React.active) {
      /**
       * @DOCUMENTATION
       * InjectedConnector is a stock connector for browser-based providers, such as Metamask.
       */
      const connector = new InjectedConnector({
        supportedChainIds: [
          chains.ETH_KOVAN,
          chains.ETH_MAINNET,
          chains.ETH_RINKEBY,
          chains.ETH_ROPSTEN,
        ],
      });

      /**
       * @DOCUMENTATION
       * activate() connects the connector to our web-app.
       * It will set all states of web3React according to the connector (such as: current address, current chain, provider library).
       * It will also set active state to true.
       */
      web3React.activate(connector);
    } else {
      /**
       * @DOCUMENTATION
       * deactivate() disconnects.
       * It will reset all states of web3React.
       * It will also set active state to false.
       */
      web3React.deactivate();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-center">
      <div className="w-100">
        <a className="navbar-brand" href=".">
          Simple Insurance
        </a>
      </div>
      <div className="w-100 text-center">
        <p>
          {web3React.active
            ? "(" + accountType + ") " + web3React.account
            : "(Not Connected)"}
        </p>
      </div>
      <div className="w-100 d-flex justify-content-end">
        {web3React.active ? (
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleConnect}
          >
            Disconnect
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleConnect}
          >
            Connect
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
