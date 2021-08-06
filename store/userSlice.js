import {createSlice} from '@reduxjs/toolkit'

const initialState = [
  {
    userId: 1,
    username: 'Saved Messages',
    userEmoji: '🙂',
  },
  {
    userId: 2,
    username: 'Person 1',
    userEmoji: '🙂',
  },
]

const userSlice = createSlice({
  name:'user',
  initialState:initialState,
  reducers:{
    addUser(state,{payload}){
      state.push({
        userId: payload.userId,
        username: payload.username,
        userEmoji: payload.userEmoji,
      })
    }
  }
})

export default userSlice.reducer

export const userActions = userSlice.actions