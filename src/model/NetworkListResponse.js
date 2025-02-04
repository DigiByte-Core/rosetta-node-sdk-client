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
import NetworkIdentifier from './NetworkIdentifier';

/**
 * The NetworkListResponse model module.
 * @module model/NetworkListResponse
 * @version 1.4.1
 */
class NetworkListResponse {
    /**
     * Constructs a new <code>NetworkListResponse</code>.
     * A NetworkListResponse contains all NetworkIdentifiers that the node can serve information for.
     * @alias module:model/NetworkListResponse
     * @param networkIdentifiers {Array.<module:model/NetworkIdentifier>} 
     */
    constructor(networkIdentifiers) { 
        
        NetworkListResponse.initialize(this, networkIdentifiers);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, networkIdentifiers) { 
        obj['network_identifiers'] = networkIdentifiers;
    }

    /**
     * Constructs a <code>NetworkListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NetworkListResponse} obj Optional instance to populate.
     * @return {module:model/NetworkListResponse} The populated <code>NetworkListResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetworkListResponse();

            if (data.hasOwnProperty('network_identifiers')) {
                obj['network_identifiers'] = ApiClient.convertToType(data['network_identifiers'], [NetworkIdentifier]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/NetworkIdentifier>} network_identifiers
 */
NetworkListResponse.prototype['network_identifiers'] = undefined;






export default NetworkListResponse;

