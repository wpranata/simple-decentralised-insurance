import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import { createContext, useContext, useEffect, useState } from "react";

import { LoadingContext } from "./LoadingContextProvider";

/**
 * @DOCUMENTATION
 * This context provides the contract connection and the connected account type (Company / Holder)
 */

export const ContractContext = createContext<any>(null);

export const ContractContextProvider = ({ children }: any) => {
  const web3React = useWeb3React();
  const setIsLoading = useContext(LoadingContext);
  const [contract, setContract] = useState<ethers.Contract | undefined>(
    undefined
  );
  const [accountType, setAccountType] = useState("");
  const [triggerAccountTypeUpdate, setTriggerAccountTypeUpdate] =
    useState(false);

  useEffect(() => {
    setContract(
      /**
       * @TODO Connect to Simple Insurance contract using default provider (from ethers)
       */

      undefined

      //ENDTODO
    );
  }, []);

  useEffect(() => {
    if (contract && web3React.account) {
      setIsLoading(true);
      /**
       * @TODO Set the current signer (retrieve from web3React library) to contract (contract.connect())
       */

      //ENDTODO
      setIsLoading(false);
    }
  }, [web3React, setIsLoading]);

  useEffect(() => {
    if (contract?.signer) setTriggerAccountTypeUpdate(true);
  }, [contract?.signer]);

  useEffect(() => {
    if (web3React.account && triggerAccountTypeUpdate) {
      setIsLoading(true);
      (async () => {
        /**
         * @TODO Get company address from contract (call companyAddress function)
         */

        const companyAddr = "???";

        //ENDTODO
        if (companyAddr === web3React.account) {
          setAccountType("Company");
          return;
        }
        setAccountType("Holder");
      })();
    } else {
      setAccountType("");
    }
    setTriggerAccountTypeUpdate(false);
    setIsLoading(false);
  }, [triggerAccountTypeUpdate]);

  return (
    <ContractContext.Provider
      value={{ contract, accountType, setTriggerAccountTypeUpdate }}
    >
      {children}
    </ContractContext.Provider>
  );
};
