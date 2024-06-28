import dotenv from 'dotenv';

// Read from default ".env" file.
dotenv.config();

type EnvironmentConfig = {
  v4adminUrl: string;
  v3url: string;
  v2url: string;
  advUrl: string;
};

const stagingConfig: EnvironmentConfig = {
  v4adminUrl: 'https://www.saucedemo.com/v1/',
  v3url: '',
  v2url: 'https://www.saucedemo.com/v1/',
  advUrl: 'https://',
};

const developmentConfig: EnvironmentConfig = {
  v4adminUrl: 'https://dev.url',
  v3url: '',
  v2url: '',
  advUrl: '',
};

if (process.env.ENVIRONMENT) {
  if (![`staging`, `development`].includes(process.env.ENVIRONMENT)) {
    console.log(
      '########### environmentConfig.ts:Provided process.env.ENVIRONMENT :' +
        process.env.ENVIRONMENT,
    ),
      console.log(
        '########### environmentConfig.ts: Please provide the environment variable as staging OR development.',
      );
    console.log(
      '########### environmentConfig.ts: Please check README file. Check .env file or Command line parameter.',
    );
    process.exit(1);
  }
} else {
  console.log(
    `########### environmentConfig.ts: ENVIRONMENT variable is not set. Running on the default 'staging' environment.`,
  );
  console.log(`########### environmentConfig.ts: Supported environments : staging, development`);
}

// If ENVIRONMENT id undefined then use 'staging'
let environmentFinal = process.env.ENVIRONMENT || 'staging';

let envConfig: EnvironmentConfig;

switch (environmentFinal) {
  case 'staging':
    envConfig = stagingConfig;
    break;
  case 'development':
    envConfig = developmentConfig;
    break;
  default:
    envConfig = stagingConfig;
    environmentFinal = 'staging';
    break;
}

export { envConfig, environmentFinal };
