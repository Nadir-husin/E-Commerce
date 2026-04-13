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
import storage from 'redux-persist/lib/storage'
import wishlist from "./wishlist/wishlistSlice"
import categories from './Categories/categoriesSlice'
import products from './products/productsSlice'
import cart from './Cart/cartSlice'


const CartPersistConfig = {
  key: 'cart',
  storage,
  whitelist: ['items']
}


const wishlistPersistConfig = {
  key: 'wishlist',
  storage,
  whitelist: ['itemsId']
}



const rootReducer = combineReducers({
  categories,
  products,
  cart: persistReducer(CartPersistConfig, cart),
  wishlist: persistReducer(wishlistPersistConfig, wishlist)
})



 const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
const persistor = persistStore(store)
export  {store , persistor}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch