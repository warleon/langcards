'use client'
import { Provider } from 'react-redux'
import { makeStore } from '@/lib/redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { OnboardingState } from '@/lib/redux/features/onboarding'

interface Props {
  children: React.ReactNode
  onboarding: OnboardingState
}

export default function StoreProvider({ children, onboarding }: Props) {
  const { store, persistor } = makeStore({
    onboardingReducer: { ...onboarding },
    _persist: { rehydrated: true, version: 0 },
  })

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
}
