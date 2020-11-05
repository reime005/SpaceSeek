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

export const useStore = create<State>((set) => {
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
      const key = `recent_search`;

      const itemsStr = (await AsyncStorage.getItem(key)) || '[]';
      const recentSearches: Search[] = JSON.parse(itemsStr);

      set((state) => {
        return {
          recentSearches,
        };
      });
    },
    removeRecentSearch: async (value) => {},
    addRecentSearch: async (value) => {
      const key = `recent_search`;

      const itemsStr = (await AsyncStorage.getItem(key)) || '[]';
      const items: Search[] = JSON.parse(itemsStr);

      const recentSearches = [...items, value];

      await AsyncStorage.setItem(key, JSON.stringify(recentSearches));

      set((state) => {
        return {
          recentSearches: [...(state.recentSearches || []), value],
        };
      });
    },
  };
});
