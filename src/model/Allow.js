/**
 * Rosetta
 * Build Once. Integrate Your Blockchain Everywhere.
 *
 * The version of the OpenAPI document: 1.4.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Error from './Error';
import OperationStatus from './OperationStatus';

/**
 * The Allow model module.
 * @module model/Allow
 * @version 1.4.1
 */
class Allow {
    /**
     * Constructs a new <code>Allow</code>.
     * Allow specifies supported Operation status, Operation types, and all possible error statuses. This Allow object is used by clients to validate the correctness of a Rosetta Server implementation. It is expected that these clients will error if they receive some response that contains any of the above information that is not specified here.
     * @alias module:model/Allow
     * @param operationStatuses {Array.<module:model/OperationStatus>} All Operation.Status this implementation supports. Any status that is returned during parsing that is not listed here will cause client validation to error.
     * @param operationTypes {Array.<String>} All Operation.Type this implementation supports. Any type that is returned during parsing that is not listed here will cause client validation to error.
     * @param errors {Array.<module:model/Error>} All Errors that this implementation could return. Any error that is returned during parsing that is not listed here will cause client validation to error.
     * @param historicalBalanceLookup {Boolean} Any Rosetta implementation that supports querying the balance of an account at any height in the past should set this to true.
     */
    constructor(operationStatuses, operationTypes, errors, historicalBalanceLookup) { 
        
        Allow.initialize(this, operationStatuses, operationTypes, errors, historicalBalanceLookup);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, operationStatuses, operationTypes, errors, historicalBalanceLookup) { 
        obj['operation_statuses'] = operationStatuses;
        obj['operation_types'] = operationTypes;
        obj['errors'] = errors;
        obj['historical_balance_lookup'] = historicalBalanceLookup;
    }

    /**
     * Constructs a <code>Allow</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Allow} obj Optional instance to populate.
     * @return {module:model/Allow} The populated <code>Allow</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Allow();

            if (data.hasOwnProperty('operation_statuses')) {
                obj['operation_statuses'] = ApiClient.convertToType(data['operation_statuses'], [OperationStatus]);
            }
            if (data.hasOwnProperty('operation_types')) {
                obj['operation_types'] = ApiClient.convertToType(data['operation_types'], ['String']);
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
            }
            if (data.hasOwnProperty('historical_balance_lookup')) {
                obj['historical_balance_lookup'] = ApiClient.convertToType(data['historical_balance_lookup'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * All Operation.Status this implementation supports. Any status that is returned during parsing that is not listed here will cause client validation to error.
 * @member {Array.<module:model/OperationStatus>} operation_statuses
 */
Allow.prototype['operation_statuses'] = undefined;

/**
 * All Operation.Type this implementation supports. Any type that is returned during parsing that is not listed here will cause client validation to error.
 * @member {Array.<String>} operation_types
 */
Allow.prototype['operation_types'] = undefined;

/**
 * All Errors that this implementation could return. Any error that is returned during parsing that is not listed here will cause client validation to error.
 * @member {Array.<module:model/Error>} errors
 */
Allow.prototype['errors'] = undefined;

/**
 * Any Rosetta implementation that supports querying the balance of an account at any height in the past should set this to true.
 * @member {Boolean} historical_balance_lookup
 */
Allow.prototype['historical_balance_lookup'] = undefined;






export default Allow;

