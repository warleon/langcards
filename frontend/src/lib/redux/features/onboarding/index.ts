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
    upsertLanguage: (state, action: PayloadAction<LocaleWithLevel>) => {
      const existingIndex = state.languages.findIndex((l) => l.code === action.payload.code)
      if (existingIndex !== -1) {
        state.languages = state.languages.map((l, i) => (i === existingIndex ? action.payload : l))
      } else {
        state.languages = [...state.languages, action.payload]
      }
    },
    removeLanguage: (state, action: PayloadAction<string>) => {
      state.languages = state.languages.filter((l) => l.label !== action.payload)
    },
    setStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload
    },
  },
})

export const onboardingReducer = onboardingSlice.reducer
export const { setLocale, initOnboarding, upsertLanguage, removeLanguage, setLanguages, setStep } =
  onboardingSlice.actions

export const useOnboarding = () => {
  const onboarding = useAppSelector((state) => state.onboardingReducer)
  const dispatch = useAppDispatch()

  return {
    onboarding,
    setLocale: (locale: Locale) => {
      dispatch(setLocale(locale))
    },
    setStep: (step: number) => {
      dispatch(setStep(step))
    },
    upsertLanguage: (language: LocaleWithLevel) => {
      dispatch(upsertLanguage(language))
    },
    removeLanguage: (label: string) => {
      dispatch(removeLanguage(label))
    },
  }
}
