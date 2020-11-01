export type BottomRoute = 'home' | 'settings';

export const bottomRoutes: {
  [routeKey in BottomRoute]: BottomRoute;
} = {
  home: 'home',
  settings: 'settings'
}

export type SpaceRoute = 'details';

export const spaceRoutes: {
  [routeKey in SpaceRoute]: SpaceRoute;
} = {
  details: 'details',
}
