interface AppConfig {
  apiBaseURL: string;
  env: 'prod' | 'test';
}

export const config: AppConfig = {
  apiBaseURL: 'https://world.openfoodfacts.org/cgi',
  env: 'test',
};
