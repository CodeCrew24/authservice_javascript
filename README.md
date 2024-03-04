# auth_service

AuthService - JavaScript client for auth_service
This API provides token-based authentication for user registration, login, and client credential management. It ensures secure communication by utilizing tokens for authentication. Users can register with unique usernames and passwords, authenticate using client credentials, retrieve client IDs and secrets, and regenerate client credentials as needed. The API supports various user roles, including 'user', 'admin', 'moderator', 'guest', and 'superadmin'.
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install auth_service --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your auth_service from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install CodeCrew24/authservice_javascript --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var AuthService = require('auth_service');


var api = new AuthService.DefaultApi()
var username = johndoe; // {String} User's username
var password = password123; // {String} User's password
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.clientGet(username, password, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://auth-service-latest.onrender.com/auth*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AuthService.DefaultApi* | [**clientGet**](docs/DefaultApi.md#clientGet) | **GET** /client | Get client ID and secret
*AuthService.DefaultApi* | [**loginClientPost**](docs/DefaultApi.md#loginClientPost) | **POST** /login/client | Logs in a user using client ID and secret
*AuthService.DefaultApi* | [**regenerateClientCredentialsPost**](docs/DefaultApi.md#regenerateClientCredentialsPost) | **POST** /regenerate-client-credentials | Regenerate client credentials
*AuthService.DefaultApi* | [**registerPost**](docs/DefaultApi.md#registerPost) | **POST** /register | Registers a new user


## Documentation for Models

 - [AuthService.ClientGet200Response](docs/ClientGet200Response.md)
 - [AuthService.ClientGet401Response](docs/ClientGet401Response.md)
 - [AuthService.LoginClientPost200Response](docs/LoginClientPost200Response.md)
 - [AuthService.LoginClientPost401Response](docs/LoginClientPost401Response.md)
 - [AuthService.RegenerateClientCredentialsPost200Response](docs/RegenerateClientCredentialsPost200Response.md)
 - [AuthService.RegisterPost201Response](docs/RegisterPost201Response.md)
 - [AuthService.RegisterPost400Response](docs/RegisterPost400Response.md)
 - [AuthService.RegisterPost500Response](docs/RegisterPost500Response.md)


## Documentation for Authorization

Endpoints do not require authorization.

