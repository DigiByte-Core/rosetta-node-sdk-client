"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AccountBalanceRequest = _interopRequireDefault(require("../model/AccountBalanceRequest"));

var _AccountBalanceResponse = _interopRequireDefault(require("../model/AccountBalanceResponse"));

var _Error = _interopRequireDefault(require("../model/Error"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Account service.
* @module api/AccountApi
* @version 1.4.1
*/
var AccountApi = /*#__PURE__*/function () {
  /**
  * Constructs a new AccountApi. 
  * @alias module:api/AccountApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function AccountApi(apiClient) {
    _classCallCheck(this, AccountApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the accountBalance operation.
   * @callback module:api/AccountApi~accountBalanceCallback
   * @param {String} error Error message, if any.
   * @param {module:model/AccountBalanceResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get an Account Balance
   * Get an array of all AccountBalances for an AccountIdentifier and the BlockIdentifier at which the balance lookup was performed. The BlockIdentifier must always be returned because some consumers of account balance data need to know specifically at which block the balance was calculated to compare balances they compute from operations with the balance returned by the node. It is important to note that making a balance request for an account without populating the SubAccountIdentifier should not result in the balance of all possible SubAccountIdentifiers being returned. Rather, it should result in the balance pertaining to no SubAccountIdentifiers being returned (sometimes called the liquid balance). To get all balances associated with an account, it may be necessary to perform multiple balance requests with unique AccountIdentifiers. It is also possible to perform a historical balance lookup (if the server supports it) by passing in an optional BlockIdentifier.
   * @param {module:model/AccountBalanceRequest} accountBalanceRequest 
   * @param {module:api/AccountApi~accountBalanceCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/AccountBalanceResponse}
   */


  _createClass(AccountApi, [{
    key: "accountBalance",
    value: function accountBalance(accountBalanceRequest, callback) {
      var postBody = accountBalanceRequest; // verify the required parameter 'accountBalanceRequest' is set

      if (accountBalanceRequest === undefined || accountBalanceRequest === null) {
        throw new _Error["default"]("Missing the required parameter 'accountBalanceRequest' when calling accountBalance");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _AccountBalanceResponse["default"];
      return this.apiClient.callApi('/account/balance', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return AccountApi;
}();

exports["default"] = AccountApi;