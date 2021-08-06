import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  chatAreaSelected : false,
  selectedUser:null
}

const uiSlice = createSlice({
  name:'ui',
  initialState:initialState,
  reducers:{
    toggleChatArea(state,{payload=true}){
      state.chatAreaSelected = payload
    },
    setSelectedUser(state,{payload}){
      state.selectedUser = payload
    }
  }
})

export default uiSlice.reducer
export const uiActions = uiSlice.actions