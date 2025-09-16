'use client'
import { Provider } from 'react-redux'
import { makeStore } from '@/lib/redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { initOnboarding, OnboardingState } from '@/lib/redux/features/onboarding'
import { useRef } from 'react'
import { Globe } from '../web/globe'

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
      <PersistGate
        loading={
          null
          //<Globe
          //key="globe"
          //className="grow w-1/4 my-2 mx-auto"
          //rotationSpeed={0.7}
          //onSelect={() => {}}
          //resumeRotationTime={2000}
          //enabledCodes={[]}
          //defaultAllEnabled={false}
          ///>
        }
        persistor={persistor}
      >
        {children}
      </PersistGate>
    </Provider>
  )
}
