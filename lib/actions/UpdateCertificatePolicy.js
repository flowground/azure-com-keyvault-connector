/**
 * Auto-generated action file for "KeyVaultClient" API.
 *
 * Generated at: 2019-05-07T14:38:16.735Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / azure-com-keyvault-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'UpdateCertificatePolicy'
 * Endpoint Path: '/certificates/{certificate-name}/policy'
 * Method: 'patch'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "certificate-name",
    "api-version"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "certificate_name": "certificate-name",
    "api_version": "api-version",
    "recoveryLevel": "recoveryLevel",
    "attributes": "attributes",
    "id": "id",
    "cert_transparency": "cert_transparency",
    "cty": "cty",
    "name": "name",
    "issuer": "issuer",
    "crv": "crv",
    "exportable": "exportable",
    "key_size": "key_size",
    "kty": "kty",
    "reuse_key": "reuse_key",
    "key_props": "key_props",
    "lifetime_actions": "lifetime_actions",
    "contentType": "contentType",
    "secret_props": "secret_props",
    "ekus": "ekus",
    "key_usage": "key_usage",
    "dns_names": "dns_names",
    "emails": "emails",
    "upns": "upns",
    "sans": "sans",
    "subject": "subject",
    "validity_months": "validity_months",
    "x509_props": "x509_props",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/json';

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};

    let callParams = {
        spec: spec,
        operationId: 'UpdateCertificatePolicy',
        pathName: '/certificates/{certificate-name}/policy',
        method: 'patch',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}