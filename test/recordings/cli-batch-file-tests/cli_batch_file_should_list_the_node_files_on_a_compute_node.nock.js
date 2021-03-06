// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '46241355-bb95-46a9-ba6c-42b554d71925',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Microsoft Azure Internal Consumption',
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
  process.env['AZURE_BATCH_ACCOUNT'] = 'jstesteastus2';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://jstesteastus2.eastus2.batch.azure.com';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://jstesteastus2.eastus2.batch.azure.com:443')
  .get('/pools/xplatTestPool/nodes?api-version=2016-02-01.3.0&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jstesteastus2.eastus2.batch.azure.com/$metadata#nodes\",\"value\":[\r\n    {\r\n      \"id\":\"tvm-1315786796_2-20160408t210455z\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/xplatTestPool/nodes/tvm-1315786796_2-20160408t210455z\",\"state\":\"idle\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2016-04-09T00:23:40.5472861Z\",\"lastBootTime\":\"2016-04-09T00:23:40.4312801Z\",\"allocationTime\":\"2016-04-08T21:04:55.9177225Z\",\"ipAddress\":\"100.73.198.28\",\"affinityId\":\"TVM:tvm-1315786796_2-20160408t210455z\",\"vmSize\":\"small\",\"totalTasksRun\":0,\"totalTasksSucceeded\":0,\"runningTasksCount\":0,\"startTask\":{\r\n        \"commandLine\":\"cmd /c echo test\",\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n      },\"startTaskInfo\":{\r\n        \"state\":\"completed\",\"startTime\":\"2016-04-09T00:23:41.6849003Z\",\"endTime\":\"2016-04-09T00:23:41.8279031Z\",\"exitCode\":0,\"retryCount\":0\r\n      }\r\n    },{\r\n      \"id\":\"tvm-1315786796_3-20160408t210455z\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/xplatTestPool/nodes/tvm-1315786796_3-20160408t210455z\",\"state\":\"idle\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2016-04-09T00:26:18.2121087Z\",\"lastBootTime\":\"2016-04-09T00:26:18.1165061Z\",\"allocationTime\":\"2016-04-08T21:04:55.9177225Z\",\"ipAddress\":\"100.73.212.50\",\"affinityId\":\"TVM:tvm-1315786796_3-20160408t210455z\",\"vmSize\":\"small\",\"totalTasksRun\":0,\"totalTasksSucceeded\":0,\"runningTasksCount\":0,\"startTask\":{\r\n        \"commandLine\":\"cmd /c echo test\",\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n      },\"startTaskInfo\":{\r\n        \"state\":\"completed\",\"startTime\":\"2016-04-09T00:26:19.2171147Z\",\"endTime\":\"2016-04-09T00:26:19.4331162Z\",\"exitCode\":0,\"retryCount\":0\r\n      }\r\n    },{\r\n      \"id\":\"tvm-1315786796_4-20160409t002314z\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/xplatTestPool/nodes/tvm-1315786796_4-20160409t002314z\",\"state\":\"idle\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2016-04-09T00:26:43.0210412Z\",\"lastBootTime\":\"2016-04-09T00:26:42.9224024Z\",\"allocationTime\":\"2016-04-09T00:23:14.0659841Z\",\"ipAddress\":\"100.73.174.26\",\"affinityId\":\"TVM:tvm-1315786796_4-20160409t002314z\",\"vmSize\":\"small\",\"totalTasksRun\":3,\"totalTasksSucceeded\":3,\"runningTasksCount\":0,\"recentTasks\":[\r\n        {\r\n          \"taskUrl\":\"https://jstesteastus2.eastus2.batch.azure.com/jobs/xplatJobForFileTests/tasks/xplattask\",\"jobId\":\"xplatJobForFileTests\",\"taskId\":\"xplattask\",\"subtaskId\":0,\"taskState\":\"completed\",\"executionInfo\":{\r\n            \"startTime\":\"2016-04-11T18:52:27.0034559Z\",\"endTime\":\"2016-04-11T18:52:27.1144402Z\",\"exitCode\":0,\"retryCount\":0,\"requeueCount\":0\r\n          }\r\n        }\r\n      ],\"startTask\":{\r\n        \"commandLine\":\"cmd /c echo test\",\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n      },\"startTaskInfo\":{\r\n        \"state\":\"completed\",\"startTime\":\"2016-04-09T00:26:44.162407Z\",\"endTime\":\"2016-04-09T00:26:44.370403Z\",\"exitCode\":0,\"retryCount\":0\r\n      }\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'd29a6270-d081-48a5-8fda-5b1c7c6e0af2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'dbc6f96f-efd7-4976-b371-6c51ba970da5',
  dataserviceversion: '3.0',
  date: 'Mon, 11 Apr 2016 18:52:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://jstesteastus2.eastus2.batch.azure.com:443')
  .get('/pools/xplatTestPool/nodes?api-version=2016-02-01.3.0&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jstesteastus2.eastus2.batch.azure.com/$metadata#nodes\",\"value\":[\r\n    {\r\n      \"id\":\"tvm-1315786796_2-20160408t210455z\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/xplatTestPool/nodes/tvm-1315786796_2-20160408t210455z\",\"state\":\"idle\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2016-04-09T00:23:40.5472861Z\",\"lastBootTime\":\"2016-04-09T00:23:40.4312801Z\",\"allocationTime\":\"2016-04-08T21:04:55.9177225Z\",\"ipAddress\":\"100.73.198.28\",\"affinityId\":\"TVM:tvm-1315786796_2-20160408t210455z\",\"vmSize\":\"small\",\"totalTasksRun\":0,\"totalTasksSucceeded\":0,\"runningTasksCount\":0,\"startTask\":{\r\n        \"commandLine\":\"cmd /c echo test\",\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n      },\"startTaskInfo\":{\r\n        \"state\":\"completed\",\"startTime\":\"2016-04-09T00:23:41.6849003Z\",\"endTime\":\"2016-04-09T00:23:41.8279031Z\",\"exitCode\":0,\"retryCount\":0\r\n      }\r\n    },{\r\n      \"id\":\"tvm-1315786796_3-20160408t210455z\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/xplatTestPool/nodes/tvm-1315786796_3-20160408t210455z\",\"state\":\"idle\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2016-04-09T00:26:18.2121087Z\",\"lastBootTime\":\"2016-04-09T00:26:18.1165061Z\",\"allocationTime\":\"2016-04-08T21:04:55.9177225Z\",\"ipAddress\":\"100.73.212.50\",\"affinityId\":\"TVM:tvm-1315786796_3-20160408t210455z\",\"vmSize\":\"small\",\"totalTasksRun\":0,\"totalTasksSucceeded\":0,\"runningTasksCount\":0,\"startTask\":{\r\n        \"commandLine\":\"cmd /c echo test\",\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n      },\"startTaskInfo\":{\r\n        \"state\":\"completed\",\"startTime\":\"2016-04-09T00:26:19.2171147Z\",\"endTime\":\"2016-04-09T00:26:19.4331162Z\",\"exitCode\":0,\"retryCount\":0\r\n      }\r\n    },{\r\n      \"id\":\"tvm-1315786796_4-20160409t002314z\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/xplatTestPool/nodes/tvm-1315786796_4-20160409t002314z\",\"state\":\"idle\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2016-04-09T00:26:43.0210412Z\",\"lastBootTime\":\"2016-04-09T00:26:42.9224024Z\",\"allocationTime\":\"2016-04-09T00:23:14.0659841Z\",\"ipAddress\":\"100.73.174.26\",\"affinityId\":\"TVM:tvm-1315786796_4-20160409t002314z\",\"vmSize\":\"small\",\"totalTasksRun\":3,\"totalTasksSucceeded\":3,\"runningTasksCount\":0,\"recentTasks\":[\r\n        {\r\n          \"taskUrl\":\"https://jstesteastus2.eastus2.batch.azure.com/jobs/xplatJobForFileTests/tasks/xplattask\",\"jobId\":\"xplatJobForFileTests\",\"taskId\":\"xplattask\",\"subtaskId\":0,\"taskState\":\"completed\",\"executionInfo\":{\r\n            \"startTime\":\"2016-04-11T18:52:27.0034559Z\",\"endTime\":\"2016-04-11T18:52:27.1144402Z\",\"exitCode\":0,\"retryCount\":0,\"requeueCount\":0\r\n          }\r\n        }\r\n      ],\"startTask\":{\r\n        \"commandLine\":\"cmd /c echo test\",\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n      },\"startTaskInfo\":{\r\n        \"state\":\"completed\",\"startTime\":\"2016-04-09T00:26:44.162407Z\",\"endTime\":\"2016-04-09T00:26:44.370403Z\",\"exitCode\":0,\"retryCount\":0\r\n      }\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'd29a6270-d081-48a5-8fda-5b1c7c6e0af2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'dbc6f96f-efd7-4976-b371-6c51ba970da5',
  dataserviceversion: '3.0',
  date: 'Mon, 11 Apr 2016 18:52:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://jstesteastus2.eastus2.batch.azure.com:443')
  .get('/pools/xplatTestPool/nodes/tvm-1315786796_2-20160408t210455z/files?api-version=2016-02-01.3.0&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jstesteastus2.eastus2.batch.azure.com/$metadata#files\",\"value\":[\r\n    {\r\n      \"name\":\"applications\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/xplatTestPool/nodes/tvm-1315786796_2-20160408t210455z/files/applications\",\"isDirectory\":true\r\n    },{\r\n      \"name\":\"shared\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/xplatTestPool/nodes/tvm-1315786796_2-20160408t210455z/files/shared\",\"isDirectory\":true\r\n    },{\r\n      \"name\":\"startup\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/xplatTestPool/nodes/tvm-1315786796_2-20160408t210455z/files/startup\",\"isDirectory\":true\r\n    },{\r\n      \"name\":\"workitems\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/xplatTestPool/nodes/tvm-1315786796_2-20160408t210455z/files/workitems\",\"isDirectory\":true\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '49c483b1-b1a6-4a1c-8804-01423364db42',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'c447b0f3-b4be-4cfd-8fa0-d27afa9be777',
  dataserviceversion: '3.0',
  date: 'Mon, 11 Apr 2016 18:52:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://jstesteastus2.eastus2.batch.azure.com:443')
  .get('/pools/xplatTestPool/nodes/tvm-1315786796_2-20160408t210455z/files?api-version=2016-02-01.3.0&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jstesteastus2.eastus2.batch.azure.com/$metadata#files\",\"value\":[\r\n    {\r\n      \"name\":\"applications\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/xplatTestPool/nodes/tvm-1315786796_2-20160408t210455z/files/applications\",\"isDirectory\":true\r\n    },{\r\n      \"name\":\"shared\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/xplatTestPool/nodes/tvm-1315786796_2-20160408t210455z/files/shared\",\"isDirectory\":true\r\n    },{\r\n      \"name\":\"startup\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/xplatTestPool/nodes/tvm-1315786796_2-20160408t210455z/files/startup\",\"isDirectory\":true\r\n    },{\r\n      \"name\":\"workitems\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/xplatTestPool/nodes/tvm-1315786796_2-20160408t210455z/files/workitems\",\"isDirectory\":true\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '49c483b1-b1a6-4a1c-8804-01423364db42',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'c447b0f3-b4be-4cfd-8fa0-d27afa9be777',
  dataserviceversion: '3.0',
  date: 'Mon, 11 Apr 2016 18:52:28 GMT',
  connection: 'close' });
 return result; }]];