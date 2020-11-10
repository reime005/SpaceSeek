interface AppConfig {
  env: 'prod' | 'test';
  url: string;
  helpURL: string;
  spaceAPIURL: string;
}

export const config: AppConfig = {
  env: 'test',
  url: 'https://mariusreimer.com',
  helpURL: 'https://github.com/reime005/SpaceSeek/issues',
  spaceAPIURL: 'https://thespacedevs.com',
};
