import create from 'zustand'
import {devtools, persist} from 'zustand/middleware';

type Store = {
  isLight: boolean;
  shown: boolean;
  toggleTheme: () => void;
  toggleSettings: () => void;

  selectedSubjectIDs: number[];
  setSelectedSubjectIDs: (input: number[]) => void;
}


const useStore = create<Store>()(
  devtools(
    persist((set) => ({
      isLight: false,
      shown: false,
      toggleTheme: () => set((state) => ({isLight: !state.isLight})),
      toggleSettings: () => set((state) => ({shown: !state.shown})),

      selectedSubjectIDs: [],
      setSelectedSubjectIDs: (input) => set(() => ({selectedSubjectIDs: input})),
    }), {name: 'boolean-storage'})
  )
)

export default useStore;
