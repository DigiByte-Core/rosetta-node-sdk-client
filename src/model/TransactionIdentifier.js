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
 * The TransactionIdentifier model module.
 * @module model/TransactionIdentifier
 * @version 1.4.1
 */
class TransactionIdentifier {
    /**
     * Constructs a new <code>TransactionIdentifier</code>.
     * The transaction_identifier uniquely identifies a transaction in a particular network and block or in the mempool.
     * @alias module:model/TransactionIdentifier
     * @param hash {String} Any transactions that are attributable only to a block (ex: a block event) should use the hash of the block as the identifier.
     */
    constructor(hash) { 
        
        TransactionIdentifier.initialize(this, hash);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, hash) { 
        obj['hash'] = hash;
    }

    /**
     * Constructs a <code>TransactionIdentifier</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionIdentifier} obj Optional instance to populate.
     * @return {module:model/TransactionIdentifier} The populated <code>TransactionIdentifier</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionIdentifier();

            if (data.hasOwnProperty('hash')) {
                obj['hash'] = ApiClient.convertToType(data['hash'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Any transactions that are attributable only to a block (ex: a block event) should use the hash of the block as the identifier.
 * @member {String} hash
 */
TransactionIdentifier.prototype['hash'] = undefined;






export default TransactionIdentifier;

