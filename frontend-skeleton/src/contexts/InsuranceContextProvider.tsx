import { createContext, useContext, useEffect, useState } from "react";
import { ContractContext } from "./ContractContextProvider";

/**
 * @DOCUMENTATION
 * This context provides the insurance contract functions and list of registered insurances
 */

export const InsuranceContext = createContext<any>(null);

const InsuranceContextProvider = ({ children }: any) => {
  const { contract, setTriggerAccountTypeUpdate } = useContext(ContractContext);
  const [insurances, setInsurances] = useState<any[]>([]);
  const [triggerInsuranceUpdate, setTriggerInsuranceUpdate] = useState(true);

  useEffect(() => {
    if (contract && triggerInsuranceUpdate) {
      (async () => {
        let listOfInsurances: any[] = [];
        /**
         * @TODO Fetch all registered insurances from contract
         */

        //ENDTODO
        setInsurances(listOfInsurances);
      })();
      setTriggerInsuranceUpdate(false);
    }
  }, [triggerInsuranceUpdate, contract]);

  const setNewCompany = async (address: string) => {
    try {
      /**
       * @TODO Set new company address in contract
       */

      //ENDTODO
      setTriggerAccountTypeUpdate(true);
    } catch (error) {
      console.log(error);
    }
  };

  const registerInsurance = async (insuredAmount: number) => {
    try {
      /**
       * @TODO Register new insurance in contract
       */

      //ENDTODO
      setTriggerInsuranceUpdate(true);
    } catch (error) {
      console.log(error);
    }
  };

  const pendingInsurance = async (insuranceId: number) => {
    try {
      /**
       * @TODO Set insurance status in contract to `Pending`
       */

      //ENDTODO
      setTriggerInsuranceUpdate(true);
    } catch (error) {
      console.log(error);
    }
  };

  const claimInsurance = async (insuranceId: number) => {
    try {
      /**
       * @TODO Set insurance status in contract to `Claimed`
       */

      //ENDTODO
      setTriggerInsuranceUpdate(true);
    } catch (error) {
      console.log(error);
    }
  };

  const rejectInsurance = async (insuranceId: number) => {
    try {
      /**
       * @TODO Set insurance status in contract to `Rejected`
       */

      //ENDTODO
      setTriggerInsuranceUpdate(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <InsuranceContext.Provider
      value={{
        insurances,
        setNewCompany,
        registerInsurance,
        pendingInsurance,
        claimInsurance,
        rejectInsurance,
      }}
    >
      {children}
    </InsuranceContext.Provider>
  );
};

export default InsuranceContextProvider;
