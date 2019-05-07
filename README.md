# ![LOGO](logo.png) KeyVaultClient **flow**ground Connector

## Description

A generated **flow**ground connector for the KeyVaultClient API (version 7.0-preview).

Generated from: https://api.apis.guru/v2/specs/azure.com/keyvault/7.0-preview/swagger.json<br/>
Generated at: 2019-05-07T17:38:16+03:00

## API Description

The key vault client performs cryptographic key operations and vault operations against the Key Vault service.

## Authorization

This API does not require authorization.

## Actions

### List certificates in a specified key vault

> The GetCertificates operation returns the set of certificates resources in the specified key vault. This operation requires the certificates/list permission.

*Tags:* `Certificates`

#### Input Parameters
* `maxresults` - _optional_ - Maximum number of results to return in a page. If not specified the service will return up to 25 results.
* `includePending` - _optional_ - Specifies whether to include certificates which are not completely provisioned.
* `api-version` - _required_ - Client API version.

### Deletes the certificate contacts for a specified key vault.

> Deletes the certificate contacts for a specified key vault certificate. This operation requires the certificates/managecontacts permission.

*Tags:* `Certificates`

#### Input Parameters
* `api-version` - _required_ - Client API version.

### Lists the certificate contacts for a specified key vault.

> The GetCertificateContacts operation returns the set of certificate contact resources in the specified key vault. This operation requires the certificates/managecontacts permission.

*Tags:* `Certificates`

#### Input Parameters
* `api-version` - _required_ - Client API version.

### Sets the certificate contacts for the specified key vault.

> Sets the certificate contacts for the specified key vault. This operation requires the certificates/managecontacts permission.

*Tags:* `Certificates`

#### Input Parameters
* `api-version` - _required_ - Client API version.

### List certificate issuers for a specified key vault.

> The GetCertificateIssuers operation returns the set of certificate issuer resources in the specified key vault. This operation requires the certificates/manageissuers/getissuers permission.

*Tags:* `Certificates`

#### Input Parameters
* `maxresults` - _optional_ - Maximum number of results to return in a page. If not specified the service will return up to 25 results.
* `api-version` - _required_ - Client API version.

### Deletes the specified certificate issuer.

> The DeleteCertificateIssuer operation permanently removes the specified certificate issuer from the vault. This operation requires the certificates/manageissuers/deleteissuers permission.

*Tags:* `Certificates`

#### Input Parameters
* `issuer-name` - _required_ - The name of the issuer.
* `api-version` - _required_ - Client API version.

### Lists the specified certificate issuer.

> The GetCertificateIssuer operation returns the specified certificate issuer resources in the specified key vault. This operation requires the certificates/manageissuers/getissuers permission.

*Tags:* `Certificates`

#### Input Parameters
* `issuer-name` - _required_ - The name of the issuer.
* `api-version` - _required_ - Client API version.

### Updates the specified certificate issuer.

> The UpdateCertificateIssuer operation performs an update on the specified certificate issuer entity. This operation requires the certificates/setissuers permission.

*Tags:* `Certificates`

#### Input Parameters
* `issuer-name` - _required_ - The name of the issuer.
* `api-version` - _required_ - Client API version.

### Sets the specified certificate issuer.

> The SetCertificateIssuer operation adds or updates the specified certificate issuer. This operation requires the certificates/setissuers permission.

*Tags:* `Certificates`

#### Input Parameters
* `issuer-name` - _required_ - The name of the issuer.
* `api-version` - _required_ - Client API version.

### Restores a backed up certificate to a vault.

> Restores a backed up certificate, and all its versions, to a vault. This operation requires the certificates/restore permission.

*Tags:* `Certificates`

#### Input Parameters
* `api-version` - _required_ - Client API version.

### Deletes a certificate from a specified key vault.

> Deletes all versions of a certificate object along with its associated policy. Delete certificate cannot be used to remove individual versions of a certificate object. This operation requires the certificates/delete permission.

*Tags:* `Certificates`

#### Input Parameters
* `certificate-name` - _required_ - The name of the certificate.
* `api-version` - _required_ - Client API version.

### Backs up the specified certificate.

> Requests that a backup of the specified certificate be downloaded to the client. All versions of the certificate will be downloaded. This operation requires the certificates/backup permission.

*Tags:* `Certificates`

#### Input Parameters
* `certificate-name` - _required_ - The name of the certificate.
* `api-version` - _required_ - Client API version.

### Creates a new certificate.

> If this is the first version, the certificate resource is created. This operation requires the certificates/create permission.

*Tags:* `Certificates`

#### Input Parameters
* `certificate-name` - _required_ - The name of the certificate.
* `api-version` - _required_ - Client API version.

### Imports a certificate into a specified key vault.

> Imports an existing valid certificate, containing a private key, into Azure Key Vault. The certificate to be imported can be in either PFX or PEM format. If the certificate is in PEM format the PEM file must contain the key as well as x509 certificates. This operation requires the certificates/import permission.

*Tags:* `Certificates`

#### Input Parameters
* `certificate-name` - _required_ - The name of the certificate.
* `api-version` - _required_ - Client API version.

### Deletes the creation operation for a specific certificate.

> Deletes the creation operation for a specified certificate that is in the process of being created. The certificate is no longer created. This operation requires the certificates/update permission.

*Tags:* `Certificates`

#### Input Parameters
* `certificate-name` - _required_ - The name of the certificate.
* `api-version` - _required_ - Client API version.

### Gets the creation operation of a certificate.

> Gets the creation operation associated with a specified certificate. This operation requires the certificates/get permission.

*Tags:* `Certificates`

#### Input Parameters
* `certificate-name` - _required_ - The name of the certificate.
* `api-version` - _required_ - Client API version.

### Updates a certificate operation.

> Updates a certificate creation operation that is already in progress. This operation requires the certificates/update permission.

*Tags:* `Certificates`

#### Input Parameters
* `certificate-name` - _required_ - The name of the certificate.
* `api-version` - _required_ - Client API version.

### Merges a certificate or a certificate chain with a key pair existing on the server.

> The MergeCertificate operation performs the merging of a certificate or certificate chain with a key pair currently available in the service. This operation requires the certificates/create permission.

*Tags:* `Certificates`

#### Input Parameters
* `certificate-name` - _required_ - The name of the certificate.
* `api-version` - _required_ - Client API version.

### Lists the policy for a certificate.

> The GetCertificatePolicy operation returns the specified certificate policy resources in the specified key vault. This operation requires the certificates/get permission.

*Tags:* `Certificates`

#### Input Parameters
* `certificate-name` - _required_ - The name of the certificate in a given key vault.
* `api-version` - _required_ - Client API version.

### Updates the policy for a certificate.

> Set specified members in the certificate policy. Leave others as null. This operation requires the certificates/update permission.

*Tags:* `Certificates`

#### Input Parameters
* `certificate-name` - _required_ - The name of the certificate in the given vault.
* `api-version` - _required_ - Client API version.

### List the versions of a certificate.

> The GetCertificateVersions operation returns the versions of a certificate in the specified key vault. This operation requires the certificates/list permission.

*Tags:* `Certificates`

#### Input Parameters
* `certificate-name` - _required_ - The name of the certificate.
* `maxresults` - _optional_ - Maximum number of results to return in a page. If not specified the service will return up to 25 results.
* `api-version` - _required_ - Client API version.

### Gets information about a certificate.

> Gets information about a specific certificate. This operation requires the certificates/get permission.

*Tags:* `Certificates`

#### Input Parameters
* `certificate-name` - _required_ - The name of the certificate in the given vault.
* `certificate-version` - _required_ - The version of the certificate.
* `api-version` - _required_ - Client API version.

### Updates the specified attributes associated with the given certificate.

> The UpdateCertificate operation applies the specified update on the given certificate; the only elements updated are the certificate's attributes. This operation requires the certificates/update permission.

*Tags:* `Certificates`

#### Input Parameters
* `certificate-name` - _required_ - The name of the certificate in the given key vault.
* `certificate-version` - _required_ - The version of the certificate.
* `api-version` - _required_ - Client API version.

### Lists the deleted certificates in the specified vault currently available for recovery.

> The GetDeletedCertificates operation retrieves the certificates in the current vault which are in a deleted state and ready for recovery or purging. This operation includes deletion-specific information. This operation requires the certificates/get/list permission. This operation can only be enabled on soft-delete enabled vaults.

*Tags:* `DeletedCertificates`

#### Input Parameters
* `maxresults` - _optional_ - Maximum number of results to return in a page. If not specified the service will return up to 25 results.
* `includePending` - _optional_ - Specifies whether to include certificates which are not completely provisioned.
* `api-version` - _required_ - Client API version.

### Permanently deletes the specified deleted certificate.

> The PurgeDeletedCertificate operation performs an irreversible deletion of the specified certificate, without possibility for recovery. The operation is not available if the recovery level does not specify 'Purgeable'. This operation requires the certificate/purge permission.

*Tags:* `DeletedCertificates`

#### Input Parameters
* `certificate-name` - _required_ - The name of the certificate
* `api-version` - _required_ - Client API version.

### Retrieves information about the specified deleted certificate.

> The GetDeletedCertificate operation retrieves the deleted certificate information plus its attributes, such as retention interval, scheduled permanent deletion and the current deletion recovery level. This operation requires the certificates/get permission.

*Tags:* `DeletedCertificates`

#### Input Parameters
* `certificate-name` - _required_ - The name of the certificate
* `api-version` - _required_ - Client API version.

### Recovers the deleted certificate back to its current version under /certificates.

> The RecoverDeletedCertificate operation performs the reversal of the Delete operation. The operation is applicable in vaults enabled for soft-delete, and must be issued during the retention interval (available in the deleted certificate's attributes). This operation requires the certificates/recover permission.

*Tags:* `DeletedCertificates`

#### Input Parameters
* `certificate-name` - _required_ - The name of the deleted certificate
* `api-version` - _required_ - Client API version.

### Lists the deleted keys in the specified vault.

> Retrieves a list of the keys in the Key Vault as JSON Web Key structures that contain the public part of a deleted key. This operation includes deletion-specific information. The Get Deleted Keys operation is applicable for vaults enabled for soft-delete. While the operation can be invoked on any vault, it will return an error if invoked on a non soft-delete enabled vault. This operation requires the keys/list permission.

*Tags:* `DeletedKeys`

#### Input Parameters
* `maxresults` - _optional_ - Maximum number of results to return in a page. If not specified the service will return up to 25 results.
* `api-version` - _required_ - Client API version.

### Permanently deletes the specified key.

> The Purge Deleted Key operation is applicable for soft-delete enabled vaults. While the operation can be invoked on any vault, it will return an error if invoked on a non soft-delete enabled vault. This operation requires the keys/purge permission.

*Tags:* `DeletedKeys`

#### Input Parameters
* `key-name` - _required_ - The name of the key
* `api-version` - _required_ - Client API version.

### Gets the public part of a deleted key.

> The Get Deleted Key operation is applicable for soft-delete enabled vaults. While the operation can be invoked on any vault, it will return an error if invoked on a non soft-delete enabled vault. This operation requires the keys/get permission.

*Tags:* `DeletedKeys`

#### Input Parameters
* `key-name` - _required_ - The name of the key.
* `api-version` - _required_ - Client API version.

### Recovers the deleted key to its latest version.

> The Recover Deleted Key operation is applicable for deleted keys in soft-delete enabled vaults. It recovers the deleted key back to its latest version under /keys. An attempt to recover an non-deleted key will return an error. Consider this the inverse of the delete operation on soft-delete enabled vaults. This operation requires the keys/recover permission.

*Tags:* `DeletedKeys`

#### Input Parameters
* `key-name` - _required_ - The name of the deleted key.
* `api-version` - _required_ - Client API version.

### Lists deleted secrets for the specified vault.

> The Get Deleted Secrets operation returns the secrets that have been deleted for a vault enabled for soft-delete. This operation requires the secrets/list permission.

*Tags:* `DeletedSecrets`

#### Input Parameters
* `maxresults` - _optional_ - Maximum number of results to return in a page. If not specified the service will return up to 25 results.
* `api-version` - _required_ - Client API version.

### Permanently deletes the specified secret.

> The purge deleted secret operation removes the secret permanently, without the possibility of recovery. This operation can only be enabled on a soft-delete enabled vault. This operation requires the secrets/purge permission.

*Tags:* `DeletedSecrets`

#### Input Parameters
* `secret-name` - _required_ - The name of the secret.
* `api-version` - _required_ - Client API version.

### Gets the specified deleted secret.

> The Get Deleted Secret operation returns the specified deleted secret along with its attributes. This operation requires the secrets/get permission.

*Tags:* `DeletedSecrets`

#### Input Parameters
* `secret-name` - _required_ - The name of the secret.
* `api-version` - _required_ - Client API version.

### Recovers the deleted secret to the latest version.

> Recovers the deleted secret in the specified vault. This operation can only be performed on a soft-delete enabled vault. This operation requires the secrets/recover permission.

*Tags:* `DeletedSecrets`

#### Input Parameters
* `secret-name` - _required_ - The name of the deleted secret.
* `api-version` - _required_ - Client API version.

### Lists deleted storage accounts for the specified vault.

> The Get Deleted Storage Accounts operation returns the storage accounts that have been deleted for a vault enabled for soft-delete. This operation requires the storage/list permission.

*Tags:* `DeletedStorage`

#### Input Parameters
* `maxresults` - _optional_ - Maximum number of results to return in a page. If not specified the service will return up to 25 results.
* `api-version` - _required_ - Client API version.

### Permanently deletes the specified storage account.

> The purge deleted storage account operation removes the secret permanently, without the possibility of recovery. This operation can only be performed on a soft-delete enabled vault. This operation requires the storage/purge permission.

*Tags:* `DeletedStorage`

#### Input Parameters
* `storage-account-name` - _required_ - The name of the storage account.
* `api-version` - _required_ - Client API version.

### Gets the specified deleted storage account.

> The Get Deleted Storage Account operation returns the specified deleted storage account along with its attributes. This operation requires the storage/get permission.

*Tags:* `DeletedStorage`

#### Input Parameters
* `storage-account-name` - _required_ - The name of the storage account.
* `api-version` - _required_ - Client API version.

### Recovers the deleted storage account.

> Recovers the deleted storage account in the specified vault. This operation can only be performed on a soft-delete enabled vault. This operation requires the storage/recover permission.

*Tags:* `DeletedStorage`

#### Input Parameters
* `storage-account-name` - _required_ - The name of the storage account.
* `api-version` - _required_ - Client API version.

### Lists deleted SAS definitions for the specified vault and storage account.

> The Get Deleted Sas Definitions operation returns the SAS definitions that have been deleted for a vault enabled for soft-delete. This operation requires the storage/listsas permission.

*Tags:* `DeletedStorage`

#### Input Parameters
* `storage-account-name` - _required_ - The name of the storage account.
* `maxresults` - _optional_ - Maximum number of results to return in a page. If not specified the service will return up to 25 results.
* `api-version` - _required_ - Client API version.

### Gets the specified deleted sas definition.

> The Get Deleted SAS Definition operation returns the specified deleted SAS definition along with its attributes. This operation requires the storage/getsas permission.

*Tags:* `DeletedStorage`

#### Input Parameters
* `storage-account-name` - _required_ - The name of the storage account.
* `sas-definition-name` - _required_ - The name of the SAS definition.
* `api-version` - _required_ - Client API version.

### Recovers the deleted SAS definition.

> Recovers the deleted SAS definition for the specified storage account. This operation can only be performed on a soft-delete enabled vault. This operation requires the storage/recover permission.

*Tags:* `DeletedStorage`

#### Input Parameters
* `storage-account-name` - _required_ - The name of the storage account.
* `sas-definition-name` - _required_ - The name of the SAS definition.
* `api-version` - _required_ - Client API version.

### List keys in the specified vault.

> Retrieves a list of the keys in the Key Vault as JSON Web Key structures that contain the public part of a stored key. The LIST operation is applicable to all key types, however only the base key identifier, attributes, and tags are provided in the response. Individual versions of a key are not listed in the response. This operation requires the keys/list permission.

*Tags:* `Keys`

#### Input Parameters
* `maxresults` - _optional_ - Maximum number of results to return in a page. If not specified the service will return up to 25 results.
* `api-version` - _required_ - Client API version.

### Restores a backed up key to a vault.

> Imports a previously backed up key into Azure Key Vault, restoring the key, its key identifier, attributes and access control policies. The RESTORE operation may be used to import a previously backed up key. Individual versions of a key cannot be restored. The key is restored in its entirety with the same key name as it had when it was backed up. If the key name is not available in the target Key Vault, the RESTORE operation will be rejected. While the key name is retained during restore, the final key identifier will change if the key is restored to a different vault. Restore will restore all versions and preserve version identifiers. The RESTORE operation is subject to security constraints: The target Key Vault must be owned by the same Microsoft Azure Subscription as the source Key Vault The user must have RESTORE permission in the target Key Vault. This operation requires the keys/restore permission.

*Tags:* `Keys`

#### Input Parameters
* `api-version` - _required_ - Client API version.

### Deletes a key of any type from storage in Azure Key Vault.

> The delete key operation cannot be used to remove individual versions of a key. This operation removes the cryptographic material associated with the key, which means the key is not usable for Sign/Verify, Wrap/Unwrap or Encrypt/Decrypt operations. This operation requires the keys/delete permission.

*Tags:* `Keys`

#### Input Parameters
* `key-name` - _required_ - The name of the key to delete.
* `api-version` - _required_ - Client API version.

### Imports an externally created key, stores it, and returns key parameters and attributes to the client.

> The import key operation may be used to import any key type into an Azure Key Vault. If the named key already exists, Azure Key Vault creates a new version of the key. This operation requires the keys/import permission.

*Tags:* `Keys`

#### Input Parameters
* `key-name` - _required_ - Name for the imported key.
* `api-version` - _required_ - Client API version.

### Requests that a backup of the specified key be downloaded to the client.

> The Key Backup operation exports a key from Azure Key Vault in a protected form. Note that this operation does NOT return key material in a form that can be used outside the Azure Key Vault system, the returned key material is either protected to a Azure Key Vault HSM or to Azure Key Vault itself. The intent of this operation is to allow a client to GENERATE a key in one Azure Key Vault instance, BACKUP the key, and then RESTORE it into another Azure Key Vault instance. The BACKUP operation may be used to export, in protected form, any key type from Azure Key Vault. Individual versions of a key cannot be backed up. BACKUP / RESTORE can be performed within geographical boundaries only; meaning that a BACKUP from one geographical area cannot be restored to another geographical area. For example, a backup from the US geographical area cannot be restored in an EU geographical area. This operation requires the key/backup permission.

*Tags:* `Keys`

#### Input Parameters
* `key-name` - _required_ - The name of the key.
* `api-version` - _required_ - Client API version.

### Creates a new key, stores it, then returns key parameters and attributes to the client.

> The create key operation can be used to create any key type in Azure Key Vault. If the named key already exists, Azure Key Vault creates a new version of the key. It requires the keys/create permission.

*Tags:* `Keys`

#### Input Parameters
* `key-name` - _required_ - The name for the new key. The system will generate the version name for the new key.
* `api-version` - _required_ - Client API version.

### Retrieves a list of individual key versions with the same key name.

> The full key identifier, attributes, and tags are provided in the response. This operation requires the keys/list permission.

*Tags:* `Keys`

#### Input Parameters
* `key-name` - _required_ - The name of the key.
* `maxresults` - _optional_ - Maximum number of results to return in a page. If not specified the service will return up to 25 results.
* `api-version` - _required_ - Client API version.

### Gets the public part of a stored key.

> The get key operation is applicable to all key types. If the requested key is symmetric, then no key material is released in the response. This operation requires the keys/get permission.

*Tags:* `Keys`

#### Input Parameters
* `key-name` - _required_ - The name of the key to get.
* `key-version` - _required_ - Adding the version parameter retrieves a specific version of a key.
* `api-version` - _required_ - Client API version.

### The update key operation changes specified attributes of a stored key and can be applied to any key type and key version stored in Azure Key Vault.

> In order to perform this operation, the key must already exist in the Key Vault. Note: The cryptographic material of a key itself cannot be changed. This operation requires the keys/update permission.

*Tags:* `Keys`

#### Input Parameters
* `key-name` - _required_ - The name of key to update.
* `key-version` - _required_ - The version of the key to update.
* `api-version` - _required_ - Client API version.

### Decrypts a single block of encrypted data.

> The DECRYPT operation decrypts a well-formed block of ciphertext using the target encryption key and specified algorithm. This operation is the reverse of the ENCRYPT operation; only a single block of data may be decrypted, the size of this block is dependent on the target key and the algorithm to be used. The DECRYPT operation applies to asymmetric and symmetric keys stored in Azure Key Vault since it uses the private portion of the key. This operation requires the keys/decrypt permission.

*Tags:* `Keys`

#### Input Parameters
* `key-name` - _required_ - The name of the key.
* `key-version` - _required_ - The version of the key.
* `api-version` - _required_ - Client API version.

### Encrypts an arbitrary sequence of bytes using an encryption key that is stored in a key vault.

> The ENCRYPT operation encrypts an arbitrary sequence of bytes using an encryption key that is stored in Azure Key Vault. Note that the ENCRYPT operation only supports a single block of data, the size of which is dependent on the target key and the encryption algorithm to be used. The ENCRYPT operation is only strictly necessary for symmetric keys stored in Azure Key Vault since protection with an asymmetric key can be performed using public portion of the key. This operation is supported for asymmetric keys as a convenience for callers that have a key-reference but do not have access to the public key material. This operation requires the keys/encrypt permission.

*Tags:* `Keys`

#### Input Parameters
* `key-name` - _required_ - The name of the key.
* `key-version` - _required_ - The version of the key.
* `api-version` - _required_ - Client API version.

### Creates a signature from a digest using the specified key.

> The SIGN operation is applicable to asymmetric and symmetric keys stored in Azure Key Vault since this operation uses the private portion of the key. This operation requires the keys/sign permission.

*Tags:* `Keys`

#### Input Parameters
* `key-name` - _required_ - The name of the key.
* `key-version` - _required_ - The version of the key.
* `api-version` - _required_ - Client API version.

### Unwraps a symmetric key using the specified key that was initially used for wrapping that key.

> The UNWRAP operation supports decryption of a symmetric key using the target key encryption key. This operation is the reverse of the WRAP operation. The UNWRAP operation applies to asymmetric and symmetric keys stored in Azure Key Vault since it uses the private portion of the key. This operation requires the keys/unwrapKey permission.

*Tags:* `Keys`

#### Input Parameters
* `key-name` - _required_ - The name of the key.
* `key-version` - _required_ - The version of the key.
* `api-version` - _required_ - Client API version.

### Verifies a signature using a specified key.

> The VERIFY operation is applicable to symmetric keys stored in Azure Key Vault. VERIFY is not strictly necessary for asymmetric keys stored in Azure Key Vault since signature verification can be performed using the public portion of the key but this operation is supported as a convenience for callers that only have a key-reference and not the public portion of the key. This operation requires the keys/verify permission.

*Tags:* `Keys`

#### Input Parameters
* `key-name` - _required_ - The name of the key.
* `key-version` - _required_ - The version of the key.
* `api-version` - _required_ - Client API version.

### Wraps a symmetric key using a specified key.

> The WRAP operation supports encryption of a symmetric key using a key encryption key that has previously been stored in an Azure Key Vault. The WRAP operation is only strictly necessary for symmetric keys stored in Azure Key Vault since protection with an asymmetric key can be performed using the public portion of the key. This operation is supported for asymmetric keys as a convenience for callers that have a key-reference but do not have access to the public key material. This operation requires the keys/wrapKey permission.

*Tags:* `Keys`

#### Input Parameters
* `key-name` - _required_ - The name of the key.
* `key-version` - _required_ - The version of the key.
* `api-version` - _required_ - Client API version.

### List secrets in a specified key vault.

> The Get Secrets operation is applicable to the entire vault. However, only the base secret identifier and its attributes are provided in the response. Individual secret versions are not listed in the response. This operation requires the secrets/list permission.

*Tags:* `Secrets`

#### Input Parameters
* `maxresults` - _optional_ - Maximum number of results to return in a page. If not specified, the service will return up to 25 results.
* `api-version` - _required_ - Client API version.

### Restores a backed up secret to a vault.

> Restores a backed up secret, and all its versions, to a vault. This operation requires the secrets/restore permission.

*Tags:* `Secrets`

#### Input Parameters
* `api-version` - _required_ - Client API version.

### Deletes a secret from a specified key vault.

> The DELETE operation applies to any secret stored in Azure Key Vault. DELETE cannot be applied to an individual version of a secret. This operation requires the secrets/delete permission.

*Tags:* `Secrets`

#### Input Parameters
* `secret-name` - _required_ - The name of the secret.
* `api-version` - _required_ - Client API version.

### Sets a secret in a specified key vault.

> The SET operation adds a secret to the Azure Key Vault. If the named secret already exists, Azure Key Vault creates a new version of that secret. This operation requires the secrets/set permission.

*Tags:* `Secrets`

#### Input Parameters
* `secret-name` - _required_ - The name of the secret.
* `api-version` - _required_ - Client API version.

### Backs up the specified secret.

> Requests that a backup of the specified secret be downloaded to the client. All versions of the secret will be downloaded. This operation requires the secrets/backup permission.

*Tags:* `Secrets`

#### Input Parameters
* `secret-name` - _required_ - The name of the secret.
* `api-version` - _required_ - Client API version.

### List all versions of the specified secret.

> The full secret identifier and attributes are provided in the response. No values are returned for the secrets. This operations requires the secrets/list permission.

*Tags:* `Secrets`

#### Input Parameters
* `secret-name` - _required_ - The name of the secret.
* `maxresults` - _optional_ - Maximum number of results to return in a page. If not specified, the service will return up to 25 results.
* `api-version` - _required_ - Client API version.

### Get a specified secret from a given key vault.

> The GET operation is applicable to any secret stored in Azure Key Vault. This operation requires the secrets/get permission.

*Tags:* `Secrets`

#### Input Parameters
* `secret-name` - _required_ - The name of the secret.
* `secret-version` - _required_ - The version of the secret.
* `api-version` - _required_ - Client API version.

### Updates the attributes associated with a specified secret in a given key vault.

> The UPDATE operation changes specified attributes of an existing stored secret. Attributes that are not specified in the request are left unchanged. The value of a secret itself cannot be changed. This operation requires the secrets/set permission.

*Tags:* `Secrets`

#### Input Parameters
* `secret-name` - _required_ - The name of the secret.
* `secret-version` - _required_ - The version of the secret.
* `api-version` - _required_ - Client API version.

### List storage accounts managed by the specified key vault. This operation requires the storage/list permission.

*Tags:* `Storage`

#### Input Parameters
* `maxresults` - _optional_ - Maximum number of results to return in a page. If not specified the service will return up to 25 results.
* `api-version` - _required_ - Client API version.

### Restores a backed up storage account to a vault.

> Restores a backed up storage account to a vault. This operation requires the storage/restore permission.

*Tags:* `Storage`

#### Input Parameters
* `api-version` - _required_ - Client API version.

### Deletes a storage account. This operation requires the storage/delete permission.

*Tags:* `Storage`

#### Input Parameters
* `storage-account-name` - _required_ - The name of the storage account.
* `api-version` - _required_ - Client API version.

### Gets information about a specified storage account. This operation requires the storage/get permission.

*Tags:* `Storage`

#### Input Parameters
* `storage-account-name` - _required_ - The name of the storage account.
* `api-version` - _required_ - Client API version.

### Updates the specified attributes associated with the given storage account. This operation requires the storage/set/update permission.

*Tags:* `Storage`

#### Input Parameters
* `storage-account-name` - _required_ - The name of the storage account.
* `api-version` - _required_ - Client API version.

### Creates or updates a new storage account. This operation requires the storage/set permission.

*Tags:* `Storage`

#### Input Parameters
* `storage-account-name` - _required_ - The name of the storage account.
* `api-version` - _required_ - Client API version.

### Backs up the specified storage account.

> Requests that a backup of the specified storage account be downloaded to the client. This operation requires the storage/backup permission.

*Tags:* `Storage`

#### Input Parameters
* `storage-account-name` - _required_ - The name of the storage account.
* `api-version` - _required_ - Client API version.

### Regenerates the specified key value for the given storage account. This operation requires the storage/regeneratekey permission.

*Tags:* `Storage`

#### Input Parameters
* `storage-account-name` - _required_ - The name of the storage account.
* `api-version` - _required_ - Client API version.

### List storage SAS definitions for the given storage account. This operation requires the storage/listsas permission.

*Tags:* `Storage`

#### Input Parameters
* `storage-account-name` - _required_ - The name of the storage account.
* `maxresults` - _optional_ - Maximum number of results to return in a page. If not specified the service will return up to 25 results.
* `api-version` - _required_ - Client API version.

### Deletes a SAS definition from a specified storage account. This operation requires the storage/deletesas permission.

*Tags:* `Storage`

#### Input Parameters
* `storage-account-name` - _required_ - The name of the storage account.
* `sas-definition-name` - _required_ - The name of the SAS definition.
* `api-version` - _required_ - Client API version.

### Gets information about a SAS definition for the specified storage account. This operation requires the storage/getsas permission.

*Tags:* `Storage`

#### Input Parameters
* `storage-account-name` - _required_ - The name of the storage account.
* `sas-definition-name` - _required_ - The name of the SAS definition.
* `api-version` - _required_ - Client API version.

### Updates the specified attributes associated with the given SAS definition. This operation requires the storage/setsas permission.

*Tags:* `Storage`

#### Input Parameters
* `storage-account-name` - _required_ - The name of the storage account.
* `sas-definition-name` - _required_ - The name of the SAS definition.
* `api-version` - _required_ - Client API version.

### Creates or updates a new SAS definition for the specified storage account. This operation requires the storage/setsas permission.

*Tags:* `Storage`

#### Input Parameters
* `storage-account-name` - _required_ - The name of the storage account.
* `sas-definition-name` - _required_ - The name of the SAS definition.
* `api-version` - _required_ - Client API version.

## License

**flow**ground :- Telekom iPaaS / azure-com-keyvault-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
