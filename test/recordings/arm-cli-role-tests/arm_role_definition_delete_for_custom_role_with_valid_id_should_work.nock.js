// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '4004a9fd-d58e-48dc-aeb2-4a4aec58606f',
    name: 'Free Trial',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '1273adef-00a3-4086-a51a-dbcce1857d36',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_AD_TEST_USER_PRINCIPAL_NAME'] = 'testUserAuto@rbacCliTest.onmicrosoft.com';
  process.env['AZURE_AD_TEST_PASSWORD'] = 'Pa$$w0rd';
  process.env['AZURE_AD_TEST_GROUP_NAME'] = 'testgroupauto';
  process.env['AZURE_ARM_TEST_LOCATION'] = 'West US';
  process.env['AZURE_AD_TEST_SP_DISPLAY_NAME'] = 'mytestapprandomauto1234';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/ef10b3a9-9e6e-4501-9b48-06f4b91bc820?api-version=2015-07-01', '*')
  .reply(201, "{\"properties\":{\"roleName\":\"TestRole_855b9c52-28a3-42aa-889f-2ad451166b39\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"scope\":null,\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}],\"createdOn\":\"2015-09-18T23:43:49.2398327Z\",\"updatedOn\":\"2015-09-18T23:43:49.2398327Z\",\"createdBy\":\"577639a3-9024-48ad-93f8-1dc5ebee1b37\",\"updatedBy\":\"577639a3-9024-48ad-93f8-1dc5ebee1b37\"},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/ef10b3a9-9e6e-4501-9b48-06f4b91bc820\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"ef10b3a9-9e6e-4501-9b48-06f4b91bc820\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '751',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e6047e53-9269-42b1-ac9b-b07b973f05d6',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_2',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productiona; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1193',
  'x-ms-correlation-request-id': 'a6f26474-3fc3-4ed2-998b-acf705dc5cd5',
  'x-ms-routing-request-id': 'WESTUS:20150918T234350Z:a6f26474-3fc3-4ed2-998b-acf705dc5cd5',
  date: 'Fri, 18 Sep 2015 23:43:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/ef10b3a9-9e6e-4501-9b48-06f4b91bc820?api-version=2015-07-01', '*')
  .reply(201, "{\"properties\":{\"roleName\":\"TestRole_855b9c52-28a3-42aa-889f-2ad451166b39\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"scope\":null,\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}],\"createdOn\":\"2015-09-18T23:43:49.2398327Z\",\"updatedOn\":\"2015-09-18T23:43:49.2398327Z\",\"createdBy\":\"577639a3-9024-48ad-93f8-1dc5ebee1b37\",\"updatedBy\":\"577639a3-9024-48ad-93f8-1dc5ebee1b37\"},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/ef10b3a9-9e6e-4501-9b48-06f4b91bc820\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"ef10b3a9-9e6e-4501-9b48-06f4b91bc820\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '751',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e6047e53-9269-42b1-ac9b-b07b973f05d6',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_2',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productiona; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1193',
  'x-ms-correlation-request-id': 'a6f26474-3fc3-4ed2-998b-acf705dc5cd5',
  'x-ms-routing-request-id': 'WESTUS:20150918T234350Z:a6f26474-3fc3-4ed2-998b-acf705dc5cd5',
  date: 'Fri, 18 Sep 2015 23:43:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/ef10b3a9-9e6e-4501-9b48-06f4b91bc820?api-version=2015-07-01')
  .reply(200, "{\"properties\":{\"roleName\":\"TestRole_855b9c52-28a3-42aa-889f-2ad451166b39\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"scope\":null,\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}],\"createdOn\":\"2015-09-18T23:43:49.2398327Z\",\"updatedOn\":\"2015-09-18T23:43:49.2398327Z\",\"createdBy\":\"577639a3-9024-48ad-93f8-1dc5ebee1b37\",\"updatedBy\":\"577639a3-9024-48ad-93f8-1dc5ebee1b37\"},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/ef10b3a9-9e6e-4501-9b48-06f4b91bc820\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"ef10b3a9-9e6e-4501-9b48-06f4b91bc820\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '751',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ed758872-87b9-4774-9acf-c0a6632b7bed',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_2',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productiona; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14974',
  'x-ms-correlation-request-id': 'c76017e5-1ccb-4a95-b848-cad9940333ac',
  'x-ms-routing-request-id': 'WESTUS:20150918T234350Z:c76017e5-1ccb-4a95-b848-cad9940333ac',
  date: 'Fri, 18 Sep 2015 23:43:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/ef10b3a9-9e6e-4501-9b48-06f4b91bc820?api-version=2015-07-01')
  .reply(200, "{\"properties\":{\"roleName\":\"TestRole_855b9c52-28a3-42aa-889f-2ad451166b39\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"scope\":null,\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}],\"createdOn\":\"2015-09-18T23:43:49.2398327Z\",\"updatedOn\":\"2015-09-18T23:43:49.2398327Z\",\"createdBy\":\"577639a3-9024-48ad-93f8-1dc5ebee1b37\",\"updatedBy\":\"577639a3-9024-48ad-93f8-1dc5ebee1b37\"},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/ef10b3a9-9e6e-4501-9b48-06f4b91bc820\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"ef10b3a9-9e6e-4501-9b48-06f4b91bc820\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '751',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ed758872-87b9-4774-9acf-c0a6632b7bed',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_2',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productiona; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14974',
  'x-ms-correlation-request-id': 'c76017e5-1ccb-4a95-b848-cad9940333ac',
  'x-ms-routing-request-id': 'WESTUS:20150918T234350Z:c76017e5-1ccb-4a95-b848-cad9940333ac',
  date: 'Fri, 18 Sep 2015 23:43:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/ef10b3a9-9e6e-4501-9b48-06f4b91bc820?api-version=2015-07-01')
  .reply(200, "{\"properties\":{\"roleName\":\"TestRole_855b9c52-28a3-42aa-889f-2ad451166b39\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"scope\":null,\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}],\"createdOn\":\"2015-09-18T23:43:49.2398327Z\",\"updatedOn\":\"2015-09-18T23:43:49.2398327Z\",\"createdBy\":\"577639a3-9024-48ad-93f8-1dc5ebee1b37\",\"updatedBy\":\"577639a3-9024-48ad-93f8-1dc5ebee1b37\"},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/ef10b3a9-9e6e-4501-9b48-06f4b91bc820\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"ef10b3a9-9e6e-4501-9b48-06f4b91bc820\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '751',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '78e5656f-bfc4-4b1a-9c6e-b4a833572b34',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_2',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productiona; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1191',
  'x-ms-correlation-request-id': '2ecf7280-bbbe-4070-b6ac-18d76c70a698',
  'x-ms-routing-request-id': 'WESTUS:20150918T234351Z:2ecf7280-bbbe-4070-b6ac-18d76c70a698',
  date: 'Fri, 18 Sep 2015 23:43:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/ef10b3a9-9e6e-4501-9b48-06f4b91bc820?api-version=2015-07-01')
  .reply(200, "{\"properties\":{\"roleName\":\"TestRole_855b9c52-28a3-42aa-889f-2ad451166b39\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"scope\":null,\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}],\"createdOn\":\"2015-09-18T23:43:49.2398327Z\",\"updatedOn\":\"2015-09-18T23:43:49.2398327Z\",\"createdBy\":\"577639a3-9024-48ad-93f8-1dc5ebee1b37\",\"updatedBy\":\"577639a3-9024-48ad-93f8-1dc5ebee1b37\"},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/ef10b3a9-9e6e-4501-9b48-06f4b91bc820\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"ef10b3a9-9e6e-4501-9b48-06f4b91bc820\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '751',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '78e5656f-bfc4-4b1a-9c6e-b4a833572b34',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_2',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productiona; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1191',
  'x-ms-correlation-request-id': '2ecf7280-bbbe-4070-b6ac-18d76c70a698',
  'x-ms-routing-request-id': 'WESTUS:20150918T234351Z:2ecf7280-bbbe-4070-b6ac-18d76c70a698',
  date: 'Fri, 18 Sep 2015 23:43:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/ef10b3a9-9e6e-4501-9b48-06f4b91bc820?api-version=2015-07-01')
  .reply(404, "{\"error\":{\"code\":\"RoleDefinitionDoesNotExist\",\"message\":\"The specified role definition with ID 'ef10b3a9-9e6e-4501-9b48-06f4b91bc820' does not exist.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '152',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '3d38b58c-2247-4bfb-a64b-42df98d8cb7a',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_1',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productiona; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14981',
  'x-ms-correlation-request-id': '7aafdeb4-9150-4bee-af07-175a612b9609',
  'x-ms-routing-request-id': 'WESTUS:20150918T234351Z:7aafdeb4-9150-4bee-af07-175a612b9609',
  date: 'Fri, 18 Sep 2015 23:43:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/ef10b3a9-9e6e-4501-9b48-06f4b91bc820?api-version=2015-07-01')
  .reply(404, "{\"error\":{\"code\":\"RoleDefinitionDoesNotExist\",\"message\":\"The specified role definition with ID 'ef10b3a9-9e6e-4501-9b48-06f4b91bc820' does not exist.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '152',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '3d38b58c-2247-4bfb-a64b-42df98d8cb7a',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_1',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productiona; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14981',
  'x-ms-correlation-request-id': '7aafdeb4-9150-4bee-af07-175a612b9609',
  'x-ms-routing-request-id': 'WESTUS:20150918T234351Z:7aafdeb4-9150-4bee-af07-175a612b9609',
  date: 'Fri, 18 Sep 2015 23:43:50 GMT',
  connection: 'close' });
 return result; }]];
 exports.uuidsGenerated = function() { return ['855b9c52-28a3-42aa-889f-2ad451166b39','ef10b3a9-9e6e-4501-9b48-06f4b91bc820'];};