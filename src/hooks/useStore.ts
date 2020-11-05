import AsyncStorage from '@react-native-async-storage/async-storage';
import create from 'zustand';
import { Category } from '../config/locales/localeTypes';

type State = {
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
}

type SearchType = 'pad' | 'launch';

export const useStore = create<State>((set, get) => {
  return {
    searchValue: '',
    searchVisible: false,
    toggleSearchVisible: () =>
      set((state) => ({ searchVisible: !state.searchVisible })),
    setSearchValue: (searchValue) => set((state) => ({ searchValue })),
    category: 'launchUpcomingList',
    setCategory: (category) => set((state) => ({ category })),
    recentSearches: null,
    loadSearches: async () => {
      let key = `recent_searches`;

      const itemsStr = (await AsyncStorage.getItem(key));
      const recentSearches = JSON.parse(itemsStr || 'null');
console.warn(recentSearches);

      set((state) => {
        return {
          recentSearches,
        };
      });
    },
    removeRecentSearch: async (value) => {
      const key = `recent_searches`;
      let recentSearches = get().recentSearches || null;

      // const i = recentSearches.findIndex(r => r.text === value.text && r.type === value.type);

      // if (i != -1) {
      //   delete recentSearches[i];
      // }

      if (!recentSearches) {
        set((state) => {
          return {
            recentSearches,
          };
        });

        return;
      }

      recentSearches = recentSearches.filter(r => r.text !== value.text && r.type !== value.type);

      await AsyncStorage.setItem(key, JSON.stringify(recentSearches));

      set((state) => {
        return {
          recentSearches,
        };
      });
    },
    addRecentSearch: async (value) => {
      const key = `recent_searches`;
      const recentSearches = get().recentSearches || [];

      if (recentSearches.filter(t => t.type === value.type).some(t => t.text === value.text)) {
        return;
      }

      recentSearches.push(value);

      await AsyncStorage.setItem(key, JSON.stringify(recentSearches));

      set((state) => {
        return {
          recentSearches,
        };
      });
    },
  };
});
