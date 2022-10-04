import create from 'zustand'

interface BearState {
  bears: number
  increase: (by: number) => void
}

interface SettingsMenuState {
  shown: boolean
  toggle: () => void
}

interface ThemeState {
  isLight: boolean
  toggle: () => void
}

export const useThemeState = create<ThemeState>()((set) => ({
  isLight: false,
  toggle: () => set((state) => ({isLight: !state.isLight})),
}))

export const useSettingsState = create<SettingsMenuState>()((set) => ({
  shown: false,
  toggle: () => set((state) => ({shown: !state.shown})),
}))

export const useBearStore = create<BearState>()((set) => ({
  bears: 0,
  increase: () => set((state) => ({ bears: state.bears + 1 })),
}))
