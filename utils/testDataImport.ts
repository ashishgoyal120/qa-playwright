/**
 * This file is used to import the test data for the test cases and page objects.
 * Team can refer this file to build logic for different component data as per need.
 * There could be different files for different components.As per maintainability and reusability team can make the decision.
 */
import dummyData from '../test-data/dummy.json';
import stagingV4DummyData from '../test-data/staging/v4/dummy.json';
import stagingV2Data from '../test-data/staging/v2/data.v2.json';
import developmentV4DummyData from '../test-data/development/v4/dummy.json';
import { environmentFinal } from './environmentConfig';

// Consider staging data as guideline for the typeof test data
export type V2AdminData = typeof stagingV2Data;
export type V4DummyData = typeof stagingV4DummyData;

export type DummyData = typeof dummyData;

let testData: DummyData;
let testDataV2: V2AdminData;
let testDataV4: V4DummyData;

if (environmentFinal == 'staging') {
  testData = dummyData;
  testDataV2 = stagingV2Data;
  testDataV4 = stagingV4DummyData;
} else if (environmentFinal == 'development') {
  testData = dummyData;
  testDataV2 = stagingV2Data;
  // we do not need development data. We will be testing primarily in staging
  //testDataV2 = developmentV2DummyData;
  // Typescript just shows error for type mismatch if Json files are different for different environments.
  // This may act as safeguard for data mismatch issues if we want to follow same data structure for different environments.
  testDataV4 = developmentV4DummyData;
}

export { testData, testDataV2, testDataV4 };
