import { BottomRoute } from '../../navigators/routes';

export interface Translation {
  translation: {
    screen: {
      [screenKey in BottomRoute]: ScreenTranslation;
    };
    category: {
      [categoryKey in Category]: string
    }
  };
}

export type Category = 'launchUpcomingList' | 'launchPreviousList';

interface ScreenTranslation {
  title: string;
}
