import { useWeb3React } from "@web3-react/core";
import { useContext } from "react";

import { ContractContext } from "../contexts/ContractContextProvider";
import { InsuranceContext } from "../contexts/InsuranceContextProvider";
import { LoadingContext } from "../contexts/LoadingContextProvider";

/**
 * @DOCUMENTATION
 * This component show details of an insurance, such as:
 * - insurance ID
 * - holder address
 * - coverage
 * - insurance status
 */

const InsuranceCard = (props: any) => {
  const { account } = useWeb3React();
  const { accountType } = useContext(ContractContext);
  const { pendingInsurance, claimInsurance, rejectInsurance } =
    useContext(InsuranceContext);
  const setIsLoading = useContext(LoadingContext);

  const insuranceId = +props.insuranceId._hex;
  const holderAddress = props.holderAddress;
  const insuredAmount = +props.insuredAmount._hex;
  const statusList = ["Active", "Pending", "Claimed", "Rejected"];
  const status = statusList[props.status];

  const handlePending = async () => {
    setIsLoading(true);
    await pendingInsurance(insuranceId);
    setIsLoading(false);
  };

  const handleClaimInsurance = async () => {
    setIsLoading(true);
    await claimInsurance(insuranceId);
    setIsLoading(false);
  };

  const handleRejectInsurance = async () => {
    setIsLoading(true);
    await rejectInsurance(insuranceId);
    setIsLoading(false);
  };

  return (
    <div className="col">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-header">Insurance Id: {insuranceId}</div>
        <div className="card-body">
          <h5 className="card-title">{holderAddress}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            Amount Covered: Rp{insuredAmount}
          </h6>
          <p
            className={`card-text font-weight-bold text-${
              status === "Active"
                ? "primary"
                : status === "Pending"
                ? "warning"
                : status === "Claimed"
                ? "success"
                : "danger"
            }`}
          >
            {status === "Active"
              ? "Active"
              : status === "Pending"
              ? "Awaiting approval..."
              : status === "Claimed"
              ? "Claimed"
              : "Rejected"}
          </p>
          <div className="d-flex justify-content-around w-100">
            {(() => {
              if (
                accountType === "Holder" &&
                status === "Active" &&
                account === holderAddress
              ) {
                return (
                  <button
                    type="submit"
                    className="btn btn-warning"
                    onClick={handlePending}
                  >
                    Request Claim
                  </button>
                );
              }
            })()}

            {(() => {
              if (accountType === "Company" && status === "Pending") {
                return (
                  <div className="d-flex justify-content-around w-100">
                    <button
                      type="submit"
                      className="btn btn-success"
                      onClick={handleClaimInsurance}
                    >
                      Claim
                    </button>
                    <button
                      type="submit"
                      className="btn btn-danger"
                      onClick={handleRejectInsurance}
                    >
                      Reject
                    </button>
                  </div>
                );
              }
            })()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsuranceCard;
