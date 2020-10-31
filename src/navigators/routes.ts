export type BottomRoute = 'home' | 'settings';

export const bottomRoutes: {
  [routeKey in BottomRoute]: BottomRoute;
} = {
  home: 'home',
  settings: 'settings'
}
