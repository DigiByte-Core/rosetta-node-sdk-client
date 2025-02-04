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
import Transaction from './Transaction';

/**
 * The MempoolTransactionResponse model module.
 * @module model/MempoolTransactionResponse
 * @version 1.4.1
 */
class MempoolTransactionResponse {
    /**
     * Constructs a new <code>MempoolTransactionResponse</code>.
     * A MempoolTransactionResponse contains an estimate of a mempool transaction. It may not be possible to know the full impact of a transaction in the mempool (ex: fee paid).
     * @alias module:model/MempoolTransactionResponse
     * @param transaction {module:model/Transaction} 
     */
    constructor(transaction) { 
        
        MempoolTransactionResponse.initialize(this, transaction);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, transaction) { 
        obj['transaction'] = transaction;
    }

    /**
     * Constructs a <code>MempoolTransactionResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MempoolTransactionResponse} obj Optional instance to populate.
     * @return {module:model/MempoolTransactionResponse} The populated <code>MempoolTransactionResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MempoolTransactionResponse();

            if (data.hasOwnProperty('transaction')) {
                obj['transaction'] = Transaction.constructFromObject(data['transaction']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Transaction} transaction
 */
MempoolTransactionResponse.prototype['transaction'] = undefined;

/**
 * @member {Object} metadata
 */
MempoolTransactionResponse.prototype['metadata'] = undefined;






export default MempoolTransactionResponse;

