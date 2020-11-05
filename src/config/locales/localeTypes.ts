import { BottomRoute } from '../../navigators/routes';

export interface Translation {
  translation: {
    screen: {
      [screenKey in BottomRoute]: ScreenTranslation;
    };
    category: {
      [categoryKey in Category]: string
    },
    noSearchResults: string;
    results: string;
    result: string;
    recentSearches: string;
  };
}

export type Category = 'launchUpcomingList' | 'launchPreviousList';

interface ScreenTranslation {
  title: string;
}
