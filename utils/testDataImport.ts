import stagingData from '../test-data/staging/data.json';
import productionData from '../test-data/production/data.json';
import developmentData from '../test-data/development/data.json';
import { environmentFinal } from '../enviornment/environmentConfig';

export type EnvironmentTestData = typeof stagingData;

let testData: EnvironmentTestData;

if (environmentFinal.toLowerCase() == 'staging') {
  testData = stagingData;
} else if (environmentFinal.toLowerCase() == 'production') {
  testData = productionData;
} else if (environmentFinal.toLowerCase() == 'development') {
  testData = developmentData;
}

export { testData };
