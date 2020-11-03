import create from 'zustand';
import { Category } from '../config/locales/localeTypes';

type State = {
  searchValue: string;
  searchVisible: boolean;
  toggleSearchVisible: () => void;
  setSearchValue: (value: string) => void;
  category: Category;
  setCategory: (value: Category) => void;
};

export const useStore = create<State>((set) => {
  return {
    searchValue: '',
    searchVisible: false,
    toggleSearchVisible: () => set(state => ({ searchVisible: !state.searchVisible })),
    setSearchValue: (searchValue) => set((state) => ({ searchValue })),
    category: 'launchUpcomingList',
    setCategory: (category) => set((state) => ({ category })),
  };
});
