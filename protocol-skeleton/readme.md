# Protocol Skeleton

This is the skeleton for the smart contract development (which is very empty, as you can see).

## What do I Do Here?
Your job is to write, test, and deploy the smart contract for Simple Insurance, using the [Hardhat](https://hardhat.org/) framework.

|Component|Details|Description|
| ------------ | ------------ | ------------ |
|**Insurance Struct Mapping**|Contains:<br/>`Insurance ID`<br/>`Holder address`<br/>`Coverage amount`<br/>`status enum`|The insurance coverage recorded within the Smart Contract, mapped with an **Integer** as the `Insurance ID`.|
|**Set Company Address Function**|Can only be called by the `Company`|Function to change the **company address**.|
|**Register New Insurance Function**|Can only be called by `Insurance Holders`|Function to **register new insurance coverage**.|
|**Set Insurance Pending Function**|Can only be called by `Insurance Holders`|Function to set **insurance coverage status to** `Pending`.|
|**Set Insurance Claimed Function**|Can only be called by the `Company`|Function to set **insurance coverage status to** `Claimed`.|
|**Set Insurance Rejected Function**|Can only be called by the `Company`|Function to set **insurance coverage status to** `Rejected`.|

Feel free to add more functions, validations, or anything you like :)
