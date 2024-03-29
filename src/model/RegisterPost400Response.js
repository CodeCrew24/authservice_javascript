/**
 * Auth Service
 * This API provides token-based authentication for user registration, login, and client credential management. It ensures secure communication by utilizing tokens for authentication. Users can register with unique usernames and passwords, authenticate using client credentials, retrieve client IDs and secrets, and regenerate client credentials as needed. The API supports various user roles, including 'user', 'admin', 'moderator', 'guest', and 'superadmin'.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The RegisterPost400Response model module.
 * @module model/RegisterPost400Response
 * @version 1.0.0
 */
class RegisterPost400Response {
    /**
     * Constructs a new <code>RegisterPost400Response</code>.
     * @alias module:model/RegisterPost400Response
     */
    constructor() { 
        
        RegisterPost400Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RegisterPost400Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RegisterPost400Response} obj Optional instance to populate.
     * @return {module:model/RegisterPost400Response} The populated <code>RegisterPost400Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RegisterPost400Response();

            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RegisterPost400Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RegisterPost400Response</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }

        return true;
    }


}



/**
 * Error message
 * @member {String} message
 */
RegisterPost400Response.prototype['message'] = undefined;






export default RegisterPost400Response;

