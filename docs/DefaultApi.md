# AuthService.DefaultApi

All URIs are relative to *https://auth-service-latest.onrender.com/auth*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clientGet**](DefaultApi.md#clientGet) | **GET** /client | Get client ID and secret
[**loginClientPost**](DefaultApi.md#loginClientPost) | **POST** /login/client | Logs in a user using client ID and secret
[**regenerateClientCredentialsPost**](DefaultApi.md#regenerateClientCredentialsPost) | **POST** /regenerate-client-credentials | Regenerate client credentials
[**registerPost**](DefaultApi.md#registerPost) | **POST** /register | Registers a new user



## clientGet

> ClientGet200Response clientGet(username, password)

Get client ID and secret

Returns the client ID and client secret of the user associated with the provided username and password.

### Example

```javascript
import AuthService from 'auth_service';

let apiInstance = new AuthService.DefaultApi();
let username = johndoe; // String | User's username
let password = password123; // String | User's password
apiInstance.clientGet(username, password, (error, data, response) => {
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
 **username** | **String**| User&#39;s username | 
 **password** | **String**| User&#39;s password | 

### Return type

[**ClientGet200Response**](ClientGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## loginClientPost

> LoginClientPost200Response loginClientPost(clientId, clientSecret)

Logs in a user using client ID and secret

Authenticates a user with the provided client ID and secret. Returns a JWT token, token type (Bearer), and expiry time in seconds.

### Example

```javascript
import AuthService from 'auth_service';

let apiInstance = new AuthService.DefaultApi();
let clientId = abc123-xyz456; // String | User's client ID
let clientSecret = def789-ghi012; // String | User's client secret
apiInstance.loginClientPost(clientId, clientSecret, (error, data, response) => {
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
 **clientId** | **String**| User&#39;s client ID | 
 **clientSecret** | **String**| User&#39;s client secret | 

### Return type

[**LoginClientPost200Response**](LoginClientPost200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## regenerateClientCredentialsPost

> RegenerateClientCredentialsPost200Response regenerateClientCredentialsPost(username, password)

Regenerate client credentials

Regenerates the client ID and client secret of the user associated with the provided username and password. Returns the new client ID and client secret in the response.

### Example

```javascript
import AuthService from 'auth_service';

let apiInstance = new AuthService.DefaultApi();
let username = johndoe; // String | User's username
let password = password123; // String | User's password
apiInstance.regenerateClientCredentialsPost(username, password, (error, data, response) => {
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
 **username** | **String**| User&#39;s username | 
 **password** | **String**| User&#39;s password | 

### Return type

[**RegenerateClientCredentialsPost200Response**](RegenerateClientCredentialsPost200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## registerPost

> RegisterPost201Response registerPost(username, password, role)

Registers a new user

Creates a new user with the provided username, password, and role. Returns the generated client ID and client secret in the response.

### Example

```javascript
import AuthService from 'auth_service';

let apiInstance = new AuthService.DefaultApi();
let username = johndoe; // String | Unique username for the user
let password = password123; // String | User's password
let role = user; // String | 
apiInstance.registerPost(username, password, role, (error, data, response) => {
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
 **username** | **String**| Unique username for the user | 
 **password** | **String**| User&#39;s password | 
 **role** | **String**|  | [default to &#39;user&#39;]

### Return type

[**RegisterPost201Response**](RegisterPost201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

