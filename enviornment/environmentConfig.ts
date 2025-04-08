import dotenv from 'dotenv';
dotenv.config({
  path: './enviornment/.env',
});

type EnvironmentConfig = {
  adminUrl: string;
  custUrl: string;
};

const stagingConfig: EnvironmentConfig = {
  adminUrl: 'https://opensource-demo.orangehrmlive.com/',
  custUrl: '',
};

const developmentConfig: EnvironmentConfig = {
  adminUrl: 'https://www.google.com/',
  custUrl: '',
};

const productionConfig: EnvironmentConfig = {
  adminUrl: 'https://facebook.com/',
  custUrl: '',
};

const VALID_ENVIRONMENTS = ['staging', 'development', 'production'];
let environmentFinal = process.env.ENVIRONMENT || 'staging';

if (process.env.ENVIRONMENT) {
  if (!VALID_ENVIRONMENTS.includes(environmentFinal.toLowerCase())) {
    console.log(
      'Invalid environment specified. Please specify one of: ' + VALID_ENVIRONMENTS.join(', '),
    );
    process.exit(1);
  } else {
    console.log(`environmentConfig.ts: Running in '${environmentFinal}' environment`);
  }
} else {
  console.log('Enviornment not set running in default environment: staging');
}

let environmentConfig: EnvironmentConfig;

switch (environmentFinal.toLowerCase()) {
  case 'staging':
    environmentConfig = stagingConfig;
    break;
  case 'development':
    environmentConfig = developmentConfig;
    break;
  case 'production':
    environmentConfig = productionConfig;
    break;
  default:
    environmentConfig = stagingConfig;
    break;
}

export { environmentConfig, environmentFinal };
