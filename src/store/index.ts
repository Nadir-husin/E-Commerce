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
import auth from './auth/authSlice'


const rootPresistConfig ={
   key : "root",
   storage , 
   whitelist : ["cart" , "auth"]
}

const authPresistConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken', 'user']
}

const CartPersistConfig = {
  key: 'cart',
  storage,
  whitelist: ['items']
}




const rootReducer = combineReducers({
  auth: persistReducer(authPresistConfig , auth),
  categories,
  products,
  cart: persistReducer(CartPersistConfig, cart),
  wishlist,
})

const presistedReducer = persistReducer(rootPresistConfig , rootReducer)


 const store = configureStore({
  reducer: presistedReducer,
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