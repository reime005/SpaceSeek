import AsyncStorage from '@react-native-async-storage/async-storage';
import create from 'zustand';
import { Category } from '../config/locales/localeTypes';

type State = {
  colorScheme: ColorScheme;
  setColorScheme: (scheme: ColorScheme) => void;
  searchValue: string;
  searchVisible: boolean;
  toggleSearchVisible: () => void;
  setSearchValue: (value: string) => void;
  category: Category;
  setCategory: (value: Category) => void;
  recentSearches: Search[] | null;
  loadSearches: () => void;
  addRecentSearch: (value: Search) => void;
  removeRecentSearch: (value: Search) => void;
};

interface Search {
  text: string;
  type: 'pad' | 'launch';
  key: string;
}

export type ColorScheme = 'dark' | 'light';

export const useStore = create<State>((set, get) => {
  return {
    colorScheme: 'dark',
    setColorScheme: async (colorScheme) => {
      let key = 'theme';

      await AsyncStorage.setItem(key, colorScheme);

      set(() => ({ colorScheme }));
    },
    searchValue: '',
    searchVisible: false,
    toggleSearchVisible: () =>
      set((state) => ({ searchVisible: !state.searchVisible })),
    setSearchValue: (searchValue) => set((_) => ({ searchValue })),
    category: 'launchUpcomingList',
    setCategory: (category) => set((_) => ({ category })),
    recentSearches: null,
    loadSearches: async () => {
      let key = 'recent_searches';

      const itemsStr = await AsyncStorage.getItem(key);
      const recentSearches = JSON.parse(itemsStr || 'null');

      set((_) => {
        return {
          recentSearches,
        };
      });
    },
    removeRecentSearch: async (value) => {
      const key = 'recent_searches';
      let recentSearches = get().recentSearches || null;

      if (!recentSearches) {
        set((_) => {
          return {
            recentSearches,
          };
        });

        return;
      }

      recentSearches = recentSearches
        .filter((r) => r.type === value.type)
        .filter((r) => r.text !== value.text);

      try {
        await AsyncStorage.setItem(key, JSON.stringify(recentSearches));
      } catch (error) {
        console.warn(error);
      }

      set((_) => {
        return {
          recentSearches,
        };
      });
    },
    addRecentSearch: async (value) => {
      const key = 'recent_searches';
      const recentSearches = get().recentSearches || [];

      if (
        recentSearches
          .filter((t) => t.type === value.type)
          .some((t) => t.text === value.text)
      ) {
        return;
      }

      recentSearches.push(value);

      try {
        await AsyncStorage.setItem(key, JSON.stringify(recentSearches));
      } catch (error) {
        console.warn(error);
      }

      set((_) => {
        return {
          recentSearches,
        };
      });
    },
  };
});
