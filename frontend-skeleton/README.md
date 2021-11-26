# Protocol Skeleton

This is the skeleton for the smart contract development (which is very empty, as you can see).

## What do I Do Here?
Your job is to ***finish all `TODO`s***.

|`TODO` Locations|Details|
| ------------ | ------------ |
|constants/[addresses.tsx](./src/constants/addresses.tsx)|**Copy Simple Insurance contract address**|
|constants/contract_artifacts/[SimpleInsurance.json](./src/constants/contract_artifacts/SimpleInsurance.json)|**Copy Simple Insurance contract artifact**|
|contexts/[ContractContextProvider.tsx](./src/contexts/ContractContextProvider.tsx)|- **Connect to Simple Insurance contract** using default provider (from ethers)<br>- **Set the current signer** (retrieve from `web3React library`) **to contract** (`contract.connect()`)<br>- **Get company address from contract** (call `companyAddress` function)|
|contexts/[InsuranceContextProvider.tsx](./src/contexts/InsuranceContextProvider.tsx)|- **Fetch all registered insurances** from contract<br>- **Set new company address** in contract<br>- **Register new insurance** in contract<br>- **Set insurance status** in contract to `Pending`<br>- **Set insurance status** in contract to `Claimed`<br>- **Set insurance status** in contract to `Rejected`|

Feel free to add more functions, validations, or anything you like :)
