import { configureStore, combineReducers } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { onboardingReducer } from './features/onboarding'
import { PersistPartial } from 'redux-persist/es/persistReducer'

const persistConfig = {
  key: 'langcards-state', // Key for your persisted state in storage
  storage, // The storage engine (localStorage, sessionStorage, etc.)
  // Optionally, you can whitelist or blacklist specific reducers to persist
  // whitelist: ['yourSliceName'], // Persist only 'yourSliceName'
  // blacklist: ['anotherSliceName'], // Don't persist 'anotherSliceName'
}

const rootReducer = combineReducers({
  // Add other reducers here
  onboardingReducer,
})
export type RootState = ReturnType<typeof rootReducer> & PersistPartial

export const makeStore = (preloadedState: RootState) => {
  const store = configureStore({
    reducer: persistReducer(persistConfig, rootReducer),
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })
  const persistor = persistStore(store)
  return { store, persistor }
}

export type AppStore = ReturnType<typeof makeStore>['store']

export type AppDispatch = AppStore['dispatch']
