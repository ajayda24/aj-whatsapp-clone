import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    chatId: 12,
    chatMessage: 'hi',
    chatSenderId: 1,
    chatRecieverId: 2,
  },
]

const chatSlice = createSlice({
  name: 'chat',
  initialState: initialState,
  reducers: {
    addChat(state, { payload }) {
      state.push({
        chatId: payload.chatId,
        chatMessage: payload.chatMessage,
        chatSenderId: payload.chatSenderId,
        chatRecieverId: payload.chatRecieverId,
      })
    },
  },
})

export default chatSlice.reducer

export const chatActions = chatSlice.actions