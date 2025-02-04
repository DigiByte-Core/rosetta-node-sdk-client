# Rosetta.AccountApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountBalance**](AccountApi.md#accountBalance) | **POST** /account/balance | Get an Account Balance



## accountBalance

> AccountBalanceResponse accountBalance(accountBalanceRequest)

Get an Account Balance

Get an array of all AccountBalances for an AccountIdentifier and the BlockIdentifier at which the balance lookup was performed. The BlockIdentifier must always be returned because some consumers of account balance data need to know specifically at which block the balance was calculated to compare balances they compute from operations with the balance returned by the node. It is important to note that making a balance request for an account without populating the SubAccountIdentifier should not result in the balance of all possible SubAccountIdentifiers being returned. Rather, it should result in the balance pertaining to no SubAccountIdentifiers being returned (sometimes called the liquid balance). To get all balances associated with an account, it may be necessary to perform multiple balance requests with unique AccountIdentifiers. It is also possible to perform a historical balance lookup (if the server supports it) by passing in an optional BlockIdentifier.

### Example

```javascript
import Rosetta from 'rosetta';

let apiInstance = new Rosetta.AccountApi();
let accountBalanceRequest = new Rosetta.AccountBalanceRequest(); // AccountBalanceRequest | 
apiInstance.accountBalance(accountBalanceRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountBalanceRequest** | [**AccountBalanceRequest**](AccountBalanceRequest.md)|  | 

### Return type

[**AccountBalanceResponse**](AccountBalanceResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

