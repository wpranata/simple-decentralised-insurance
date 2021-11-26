import { useContext, useRef } from "react";

import { InsuranceContext } from "../contexts/InsuranceContextProvider";
import { LoadingContext } from "../contexts/LoadingContextProvider";

/**
 * @DOCUMENTATION
 * In this component, `company` can set new company address.
 */

const Company = () => {
  const setIsLoading = useContext(LoadingContext);
  const addrRef = useRef<HTMLInputElement>(null);
  const { setNewCompany } = useContext(InsuranceContext);

  const handleSetNewCompany = async (event: any) => {
    setIsLoading(true);
    event.preventDefault();
    if (addrRef.current) {
      const address = addrRef.current.value;
      await setNewCompany(address);
    }
    setIsLoading(false);
  };

  return (
    <div>
      <form onSubmit={handleSetNewCompany}>
        <div className="form-group">
          <label htmlFor="set-new-company">Set New Company Address</label>
          <div className="d-flex flex-row">
            <input
              ref={addrRef}
              type="text"
              className="form-control"
              id="set-new-company"
              placeholder="Enter the new company's addres"
            />
            <button type="submit" className="btn btn-primary mx-2">
              Set
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Company;
