import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Locale } from 'payload'
import { useAppSelector, useAppDispatch } from '../../hooks'

export interface OnboardingState {
  initialized?: boolean
  locale: Locale
  detectedLocale: Locale
  locales: Locale[]
}
const initialState: OnboardingState = {
  initialized: false,
  locale: { code: 'en', label: 'English' },
  detectedLocale: { code: 'en', label: 'English' },
  locales: [],
}

const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    //initOnboarding: (state, action: PayloadAction<OnboardingState>) => {
    //  if (state.initialized) return
    //  state.initialized = true
    //  state.usersMotherTongue = action.payload.usersMotherTongue
    //},
    setLocale: (state, action: PayloadAction<Locale>) => {
      state.locale = action.payload
    },
    initOnboarding: (state, action: PayloadAction<OnboardingState>) => {
      if (state.initialized) return
      state.detectedLocale = action.payload.detectedLocale
      state.locale = action.payload.locale
      state.locales = action.payload.locales
      state.initialized = true
    },
  },
})

export const onboardingReducer = onboardingSlice.reducer
export const { setLocale, initOnboarding } = onboardingSlice.actions

export const useOnboarding = () => {
  const onboarding = useAppSelector((state) => state.onboardingReducer)
  const dispatch = useAppDispatch()

  return {
    onboarding,
    setLocale: (locale: Locale) => {
      dispatch(setLocale(locale))
    },
  }
}
