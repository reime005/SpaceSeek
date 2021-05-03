import { BottomRoute } from '../../navigators/routes';

export interface Translation {
  translation: {
    screen: {
      [screenKey in BottomRoute]: ScreenTranslation;
    };
    category: {
      [categoryKey in Category]: string;
    };
    menuItem: {
      [menuItemKey in MenuItem]: string;
    };
    noSearchResults: string;
    results: string;
    result: string;
    recentSearches: string;
    errorText: string;
  };
}

export type MenuItem = 'aboutMe' | 'spaceAPI' | 'help' | 'theme' | 'review';

export type Category = 'launchUpcomingList' | 'launchPreviousList';

interface ScreenTranslation {
  title: string;
  shortTitle: string;
}
