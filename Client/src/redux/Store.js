import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './user/UserSlice'
import {persistReducer,persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const rootReducer=combineReducers({user:userReducer});

const presistConfig={
    key:"root",
    storage,
    version:1,
}

const persistedReducer=persistReducer(presistConfig,rootReducer)

export const store = configureStore({
  reducer: persistedReducer,  
  middleware:(getDefaultMiddleware)=>
  getDefaultMiddleware({
    //by this we we will not be able to get error for not serializing our variables here    
    serializableCheck:false
  })
})


export const  persistor= persistStore(store);