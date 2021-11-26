import { useContext, useRef } from "react";

import { InsuranceContext } from "../contexts/InsuranceContextProvider";
import { LoadingContext } from "../contexts/LoadingContextProvider";

/**
 * @DOCUMENTATION
 * In this component, `holders` can register new insurances.
 */

const Holder = () => {
  const setIsLoading = useContext(LoadingContext);
  const insuranceRef = useRef<HTMLInputElement>(null);
  const insurance = useContext(InsuranceContext);

  const handleRegisterInsurance = async (event: any) => {
    event.preventDefault();
    setIsLoading(true);
    if (insuranceRef.current) {
      await insurance.registerInsurance(+insuranceRef.current.value);
    }
    setIsLoading(false);
  };

  return (
    <div>
      <form onSubmit={handleRegisterInsurance}>
        <div className="form-group">
          <label htmlFor="register-new-coverage">Register new Coverage</label>
          <div className="d-flex flex-row">
            <input
              ref={insuranceRef}
              type="number"
              className="form-control"
              id="register-new-coverage"
              placeholder="Enter amount of coverage"
            />
            <button type="submit" className="btn btn-primary mx-2">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Holder;
