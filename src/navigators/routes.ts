export type BottomRoute = 'launches' | 'search' | 'settings';

export const bottomRoutes: {
  [routeKey in BottomRoute]: BottomRoute;
} = {
  // home: 'home',
  settings: 'settings',
  launches: 'launches',
  search: 'search',
};

export type SpaceRoute = 'details';

export const spaceRoutes: {
  [routeKey in SpaceRoute]: SpaceRoute;
} = {
  details: 'details',
};
