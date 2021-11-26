import { useContext } from "react";

import InsuranceCardGroup from "./components/InsuranceCardGroup";
import Navbar from "./components/Navbar";
import { ContractContext } from "./contexts/ContractContextProvider";
import Company from "./pages/Company";
import Holder from "./pages/Holder";

const App = () => {
  const contract = useContext(ContractContext);

  return (
    <div>
      <div className="container">
        <Navbar />
        {contract.accountType === "Company" ? (
          <Company />
        ) : contract.accountType === "Holder" ? (
          <Holder />
        ) : (
          ""
        )}
        <hr />
        <InsuranceCardGroup />
      </div>
    </div>
  );
};

export default App;
