import create from 'zustand'
import {devtools, persist} from 'zustand/middleware';

type Store = {
  isLight: boolean;
  shown: boolean;
  toggleTheme: () => void;
  toggleSettings: () => void;
}

const useStore = create<Store>()(
  devtools(
    persist((set) => ({
      isLight: false,
      shown: false,
      toggleTheme: () => set((state) => ({isLight: !state.isLight})),
      toggleSettings: () => set((state) => ({shown: !state.shown})),
    }), {name: 'boolean-storage'})
  )
)

export default useStore;

// interface BearState {
//   bears: number
//   increase: (by: number) => void
// }

//for learning
// const useBearStore = create<BearState>()(
//   devtools(
//     persist((set) => ({
//       bears: 0,
//       increase: (by) => set((state) => ({ bears: state.bears + by })),
//     }), {name: 'bear-storage'})
//   )
// )

