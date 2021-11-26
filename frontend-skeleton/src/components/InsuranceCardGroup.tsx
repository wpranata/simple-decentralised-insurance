import { useContext } from "react";
import { InsuranceContext } from "../contexts/InsuranceContextProvider";
import InsuranceCard from "./InsuranceCard";

/**
 * @DOCUMENTATION
 * This component lists all insurances in cards.
 * Insurances are retrieved from InsuranceContext.
 */

const InsuranceCardGroup = () => {
  const { insurances } = useContext(InsuranceContext);
  return (
    <div className="row row-cols-1 row-cols-md-4 g-4 text-center">
      {insurances.length === 0 ? (
        <h1 className="w-100">[!] No registered insurances!</h1>
      ) : (
        insurances.map((ins: any, idx: number) => (
          <InsuranceCard
            key={ins.insuranceId}
            insuranceId={ins.insuranceId}
            holderAddress={ins.holderAddress}
            insuredAmount={ins.insuredAmount}
            status={ins.status}
          />
        ))
      )}
    </div>
  );
};

export default InsuranceCardGroup;
