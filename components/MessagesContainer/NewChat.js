import styled from 'styled-components'
import Input from '@material-ui/core/Input'
import SendIcon from '@material-ui/icons/Send'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import IconButton from '@material-ui/core/IconButton'
import {useDispatch,useSelector} from 'react-redux'
import { chatActions } from '../../store/chatSlice'


import dynamic from 'next/dynamic'
const NoSSRPicker = dynamic(() => import('emoji-picker-react'), {
  ssr: false,
})


import { useState } from 'react'
import { useEffect } from 'react'

const NewChatFunc = (props) => {
  const userState = useSelector(state=>state.user)
  const dispatch = useDispatch()
  
  const [chatText, setChatText] = useState('')
  const [emojiIconClicked,setEmojiIconClicked] = useState(false)

  useEffect(() => {
    props.updateChatScroll()
  }, [chatText])

  const onEmojiClick = (event, emojiObject) => {
    setChatText((p) => p + emojiObject.emoji)
  }

  const newChatEnterHandler = (e) => {
    setChatText(e.target.value)
    
  }
  const newChatSubmitHandler = (e) => {
    dispatch(
      chatActions.addChat({
        chatSenderId: props.currentUser,
        chatRecieverId: props.recieverUser,
        chatId: new Date().toString(),
        chatMessage: chatText,
      })
    )
    setChatText('')
    setEmojiIconClicked(false)
  }
  return (
    <>
      <SearchDiv>
        <InsertEmoticonIcon
          color='action'
          fontSize='large'
          onClick={() => setEmojiIconClicked((prevState) => !prevState)}
        />
        {emojiIconClicked && (
          <NoSSRPicker
            // preload
            onEmojiClick={onEmojiClick}
            pickerStyle={{
              width: '100%',
              position: 'absolute',
              top: '40%',
              left: '0%',
            }}
          />
        )}
        <InputStyled
          placeholder='Type a message'
          value={chatText ? chatText : ''}
          onChange={newChatEnterHandler}
          onKeyDown={(e) => e.code=='Enter'?newChatSubmitHandler():null}
        />
        <IconButton onClick={newChatSubmitHandler}>
          <SendIcon color='action' />
        </IconButton>
      </SearchDiv>
    </>
  )
}

export default NewChatFunc

const SearchDiv = styled.div`
  width: 100%;
  height: 10vh;
  height: calc(var(--vh, 1vh) * 10);
  background-color: #f6f6f6;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.1s;
  padding: 0 1rem;
`

const InputStyled = styled(Input)`
  border-radius: 15px;
  width: 90%;
  height: 40px;
  padding: 0 20px;
  background-color: white;
  margin: 0 1rem;
  &::after {
    border-bottom: 0 !important;
  }
  &::before {
    border-bottom: 0 !important;
  }
  ::placeholder {
    font-size: 50px;
    color: violet;
  }
`
