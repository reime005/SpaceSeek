import { BottomRoute } from '../../navigators/routes';

export interface Translation {
  translation: {
    screen: {
      [screenKey in BottomRoute]: ScreenTranslation;
    };
  };
}

interface ScreenTranslation {
  title: string;
}
