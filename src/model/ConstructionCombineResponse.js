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

/**
 * The ConstructionCombineResponse model module.
 * @module model/ConstructionCombineResponse
 * @version 1.4.1
 */
class ConstructionCombineResponse {
    /**
     * Constructs a new <code>ConstructionCombineResponse</code>.
     * ConstructionCombineResponse is returned by &#x60;/construction/combine&#x60;. The network payload will be sent directly to the &#x60;construction/submit&#x60; endpoint.
     * @alias module:model/ConstructionCombineResponse
     * @param signedTransaction {String} 
     */
    constructor(signedTransaction) { 
        
        ConstructionCombineResponse.initialize(this, signedTransaction);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, signedTransaction) { 
        obj['signed_transaction'] = signedTransaction;
    }

    /**
     * Constructs a <code>ConstructionCombineResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConstructionCombineResponse} obj Optional instance to populate.
     * @return {module:model/ConstructionCombineResponse} The populated <code>ConstructionCombineResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConstructionCombineResponse();

            if (data.hasOwnProperty('signed_transaction')) {
                obj['signed_transaction'] = ApiClient.convertToType(data['signed_transaction'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} signed_transaction
 */
ConstructionCombineResponse.prototype['signed_transaction'] = undefined;






export default ConstructionCombineResponse;

