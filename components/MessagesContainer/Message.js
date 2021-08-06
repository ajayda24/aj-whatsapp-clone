import styled from 'styled-components'
import { device } from '../../mediaquery'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const MessageFunc = (props) => {
  
  useEffect(() => {
    props.updateChatScroll()
  }, [])
  const chatMessageState = useSelector(state => state.chat)
  const userMessages = chatMessageState.filter(
    (m) =>
      m.chatRecieverId == props.recieverUser &&
      m.chatSenderId == props.currentUser
  )
  
  return (
    <MessageDiv id='chatDivId'>
      {props.currentUser &&
        userMessages.map((c) => (
          <Message key={c.chatId} me={c.chatSenderId==props.currentUser?true:false}>
            {c.chatMessage}
          </Message>
        ))}
    </MessageDiv>
  )
}

export default MessageFunc

const MessageDiv = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  overflow-y: scroll;
  position: relative;
  @media ${device.tablet} {
    ::-webkit-scrollbar {
      width: 6px;
    }
    ::-webkit-scrollbar-track {
      background: #fff;
    }
    ::-webkit-scrollbar-thumb {
      background: #cccccc;
    }
  }
  & > :first-child {
    margin-top: auto !important;
  }
`

const Message = styled.div`
  min-width: 120px;
  max-width: 400px;
  background-color: ${(props) => (props.me ? '#dcf8c6' : '#fff')};
  ${(props) => (props.me ? `align-self:flex-end;` : `align-self:flex-start;`)}
  padding: .5rem;
  border-radius: 10px;
  margin: 0.5rem;
`