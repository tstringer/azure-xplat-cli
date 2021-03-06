// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '6e0b24a6-2bef-4598-9bd3-f87e9700e24c',
    name: 'Windows Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/6e0b24a6-2bef-4598-9bd3-f87e9700e24c/resourceGroups/armclibatchgroup8055/providers/Microsoft.Batch/batchAccounts/armclibatch7370?api-version=2015-12-01')
  .reply(200, "{\"name\":\"armclibatch7370\",\"location\":\"westus\",\"properties\":{\"accountEndpoint\":\"armclibatch7370.westus.batch.azure.com\",\"provisioningState\":\"Succeeded\",\"coreQuota\":20,\"poolQuota\":20,\"activeJobAndJobScheduleQuota\":20,\"autoStorage\":{\"storageAccountId\":\"/subscriptions/6e0b24a6-2bef-4598-9bd3-f87e9700e24c/resourceGroups/armclibatchgroup8055/providers/Microsoft.Storage/storageAccounts/armclibatch1951\",\"lastKeySync\":\"2016-04-13T19:08:30.5521107Z\"}},\"id\":\"/subscriptions/6e0b24a6-2bef-4598-9bd3-f87e9700e24c/resourceGroups/armclibatchgroup8055/providers/Microsoft.Batch/batchAccounts/armclibatch7370\",\"type\":\"Microsoft.Batch/batchAccounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '636',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'last-modified': 'Wed, 13 Apr 2016 19:09:18 GMT',
  etag: '0x8D363CF1D26A50A',
  'request-id': '83cb1cf5-ca93-479d-b64d-b7bed3e117c0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-request-id': 'ef17204b-0e6f-448c-a5d5-b1001f32380f',
  'x-ms-correlation-request-id': 'ef17204b-0e6f-448c-a5d5-b1001f32380f',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160413T190919Z:ef17204b-0e6f-448c-a5d5-b1001f32380f',
  date: 'Wed, 13 Apr 2016 19:09:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/6e0b24a6-2bef-4598-9bd3-f87e9700e24c/resourceGroups/armclibatchgroup8055/providers/Microsoft.Batch/batchAccounts/armclibatch7370?api-version=2015-12-01')
  .reply(200, "{\"name\":\"armclibatch7370\",\"location\":\"westus\",\"properties\":{\"accountEndpoint\":\"armclibatch7370.westus.batch.azure.com\",\"provisioningState\":\"Succeeded\",\"coreQuota\":20,\"poolQuota\":20,\"activeJobAndJobScheduleQuota\":20,\"autoStorage\":{\"storageAccountId\":\"/subscriptions/6e0b24a6-2bef-4598-9bd3-f87e9700e24c/resourceGroups/armclibatchgroup8055/providers/Microsoft.Storage/storageAccounts/armclibatch1951\",\"lastKeySync\":\"2016-04-13T19:08:30.5521107Z\"}},\"id\":\"/subscriptions/6e0b24a6-2bef-4598-9bd3-f87e9700e24c/resourceGroups/armclibatchgroup8055/providers/Microsoft.Batch/batchAccounts/armclibatch7370\",\"type\":\"Microsoft.Batch/batchAccounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '636',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'last-modified': 'Wed, 13 Apr 2016 19:09:18 GMT',
  etag: '0x8D363CF1D26A50A',
  'request-id': '83cb1cf5-ca93-479d-b64d-b7bed3e117c0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-request-id': 'ef17204b-0e6f-448c-a5d5-b1001f32380f',
  'x-ms-correlation-request-id': 'ef17204b-0e6f-448c-a5d5-b1001f32380f',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160413T190919Z:ef17204b-0e6f-448c-a5d5-b1001f32380f',
  date: 'Wed, 13 Apr 2016 19:09:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/6e0b24a6-2bef-4598-9bd3-f87e9700e24c/resourceGroups/armclibatchgroup8055/providers/Microsoft.Batch/batchAccounts/armclibatch7370/listKeys?api-version=2015-12-01')
  .reply(200, "{\"accountName\":\"armclibatch7370\",\"primary\":\"E0fzEuqJjn50+Wf6XPc1c7/zVT6d2DzNWUmewhhSbKcgSvq7qU9Fa0KE1+N0meym8AYW3isnHvk91Q++oHqNBA==\",\"secondary\":\"TIxe14o3C82cefeF/B1By/ZZNCFAyeTPRN0cUJDCmOB6dkdU17axYahR/iMMgkhM2IJUbUDo8+Fa5UnTyqmFXg==\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '237',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'request-id': '2679a217-2b5f-47c2-b9f1-09917e334d0b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-request-id': 'de2196bf-4c9c-4c3c-8278-5806bda1192d',
  'x-ms-correlation-request-id': 'de2196bf-4c9c-4c3c-8278-5806bda1192d',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160413T190920Z:de2196bf-4c9c-4c3c-8278-5806bda1192d',
  date: 'Wed, 13 Apr 2016 19:09:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/6e0b24a6-2bef-4598-9bd3-f87e9700e24c/resourceGroups/armclibatchgroup8055/providers/Microsoft.Batch/batchAccounts/armclibatch7370/listKeys?api-version=2015-12-01')
  .reply(200, "{\"accountName\":\"armclibatch7370\",\"primary\":\"E0fzEuqJjn50+Wf6XPc1c7/zVT6d2DzNWUmewhhSbKcgSvq7qU9Fa0KE1+N0meym8AYW3isnHvk91Q++oHqNBA==\",\"secondary\":\"TIxe14o3C82cefeF/B1By/ZZNCFAyeTPRN0cUJDCmOB6dkdU17axYahR/iMMgkhM2IJUbUDo8+Fa5UnTyqmFXg==\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '237',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'request-id': '2679a217-2b5f-47c2-b9f1-09917e334d0b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-request-id': 'de2196bf-4c9c-4c3c-8278-5806bda1192d',
  'x-ms-correlation-request-id': 'de2196bf-4c9c-4c3c-8278-5806bda1192d',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160413T190920Z:de2196bf-4c9c-4c3c-8278-5806bda1192d',
  date: 'Wed, 13 Apr 2016 19:09:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://armclibatch7370.westus.batch.azure.com:443')
  .get('/applications?api-version=2016-02-01.3.0&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://armclibatch7370.westus.batch.azure.com/$metadata#listapplicationsummariesresponses\",\"value\":[\r\n    {\r\n      \"id\":\"armclibatchapp4948\",\"versions\":[\r\n        \"1.0\"\r\n      ],\"displayName\":\"test\"\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '9b44cda6-6234-46c8-872b-77a3e4acbd5f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '9ac3c117-7b5b-4e10-8a23-0d5c75811220',
  dataserviceversion: '3.0',
  date: 'Wed, 13 Apr 2016 19:09:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://armclibatch7370.westus.batch.azure.com:443')
  .get('/applications?api-version=2016-02-01.3.0&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://armclibatch7370.westus.batch.azure.com/$metadata#listapplicationsummariesresponses\",\"value\":[\r\n    {\r\n      \"id\":\"armclibatchapp4948\",\"versions\":[\r\n        \"1.0\"\r\n      ],\"displayName\":\"test\"\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '9b44cda6-6234-46c8-872b-77a3e4acbd5f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '9ac3c117-7b5b-4e10-8a23-0d5c75811220',
  dataserviceversion: '3.0',
  date: 'Wed, 13 Apr 2016 19:09:21 GMT',
  connection: 'close' });
 return result; }]];