import {configureStore} from '@reduxjs/toolkit'
import chatSlice from './chatSlice'
import uiSlice from './uiSlice'
import userSlice from './userSlice'

const store = configureStore({
  reducer:{
    ui:uiSlice,
    user:userSlice,
    chat:chatSlice,
  }
})

export default store