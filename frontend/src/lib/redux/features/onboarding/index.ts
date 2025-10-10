import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Locale } from 'payload'
import { useAppSelector, useAppDispatch } from '../../hooks'

export type LangLevel = 'beginner' | 'intermediate' | 'advanced' | 'native'
export type LocaleWithLevel = Locale & { level: LangLevel }

export interface OnboardingState {
  initialized?: boolean
  locale: Locale
  detectedLocale: Locale
  locales: Locale[]
  languages: LocaleWithLevel[]
  step: number
}
const initialState: OnboardingState = {
  initialized: false,
  locale: { code: 'en', label: 'English' },
  detectedLocale: { code: 'en', label: 'English' },
  locales: [],
  languages: [],
  step: 0,
}

const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
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
    setLanguages: (state, action: PayloadAction<LocaleWithLevel[]>) => {
      state.languages = action.payload
    },
    setStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload
    },
  },
})

export const onboardingReducer = onboardingSlice.reducer
export const { setLocale, initOnboarding, setLanguages, setStep } = onboardingSlice.actions

export const useOnboarding = () => {
  const onboarding = useAppSelector((state) => state.onboardingReducer)
  const dispatch = useAppDispatch()

  return {
    onboarding,
    setLocale: (locale: Locale) => {
      dispatch(setLocale(locale))
    },
    setLanguages: (languages: LocaleWithLevel[]) => {
      dispatch(setLanguages(languages))
    },
    setStep: (step: number) => {
      dispatch(setStep(step))
    },
  }
}
