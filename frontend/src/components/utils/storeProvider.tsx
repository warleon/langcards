'use client'
import { Provider } from 'react-redux'
import { makeStore } from '@/lib/redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { initOnboarding, OnboardingState } from '@/lib/redux/features/onboarding'
import { useRef } from 'react'

interface Props {
  children: React.ReactNode
  onboarding: OnboardingState
}

export default function StoreProvider({ children, onboarding }: Props) {
  const storeRef = useRef<ReturnType<typeof makeStore> | null>(null)
  if (!storeRef.current) {
    storeRef.current = makeStore()
    storeRef.current.store.dispatch(initOnboarding(onboarding))
  }
  const { store, persistor } = storeRef.current

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
}
