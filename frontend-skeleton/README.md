# Frontend Skeleton

This is the skeleton for the front-end of Simple Insurance, created using [ReactJS](https://reactjs.org/) Framework.

If you haven't finished the [protocol skeleton](../protocol-skeleton), you should do that first.


## Starting the Server

To start the server, just run the command:
```zsh
npm start
```

## What do I Do Here?

The code is currently **incomplete**, riddled with `TODO`s that you have to finish.

|`TODO` Locations|Details|
| ------------ | ------------ |
|constants/[addresses.tsx](./src/constants/addresses.tsx)|**Copy Simple Insurance contract address**|
|constants/contract_artifacts/[SimpleInsurance.json](./src/constants/contract_artifacts/SimpleInsurance.json)|**Copy Simple Insurance contract artifact**|
|contexts/[ContractContextProvider.tsx](./src/contexts/ContractContextProvider.tsx)|- **Connect to Simple Insurance contract** using default provider (from ethers)<br>- **Set the current signer** (retrieve from `web3React library`) **to contract** (`contract.connect()`)<br>- **Get company address from contract** (call `companyAddress` function)|
|contexts/[InsuranceContextProvider.tsx](./src/contexts/InsuranceContextProvider.tsx)|- **Fetch all registered insurances** from contract<br>- **Set new company address** in contract<br>- **Register new insurance** in contract<br>- **Set insurance status** in contract to `Pending`<br>- **Set insurance status** in contract to `Claimed`<br>- **Set insurance status** in contract to `Rejected`|

Feel free to add more functions, validations, or anything you like :)
