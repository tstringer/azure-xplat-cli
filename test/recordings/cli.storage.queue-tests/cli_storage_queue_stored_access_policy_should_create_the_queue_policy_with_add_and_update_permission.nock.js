// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'a0d901ba-9956-4f7d-830c-2d7974c36666',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Azure Storage DM Dev',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_STORAGE_CONNECTION_STRING'] = 'DefaultEndpointsProtocol=http;AccountName=xplat;AccountKey=null';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplat.queue.core.windows.net:80')
  .get('/storageclitestqueue?comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers />", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '2ffe5a06-0003-0040-1662-81bfe9000000',
  'x-ms-version': '2015-02-21',
  date: 'Tue, 28 Apr 2015 03:22:29 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.queue.core.windows.net:80')
  .filteringRequestBody(function (path) { return '*';})
.put('/storageclitestqueue?comp=acl', '*')
  .reply(204, "", { 'content-length': '0',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '67463ad3-0003-001d-7362-814fed000000',
  'x-ms-version': '2015-02-21',
  date: 'Tue, 28 Apr 2015 03:22:29 GMT' });
 return result; }]];