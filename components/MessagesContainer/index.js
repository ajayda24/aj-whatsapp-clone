import styled from 'styled-components'
import { device } from '../../mediaquery'
import { useSelector } from 'react-redux'


import Header from './Header'
import NewChat from './NewChat'
import Message from './Message'
import { useEffect, useState } from 'react'

const MessagesContainerDiv = () => {
  const uiState = useSelector((store) => store.ui.chatAreaSelected)
  const userState = useSelector((state) => state.user)
  const selectedUser = useSelector((state) => state.ui.selectedUser)
  const [currentUser,setCurrentUser] = useState(null)
  const recieverUser = userState.find((u) => u.userId == selectedUser)

  useEffect(()=>{
    setCurrentUser(window.localStorage.getItem('currentUser'))
  },[])

  const updateChatScroll = () => {
    setTimeout(() => {
      var elmnt = document.getElementById('chatDivId')
      elmnt.scrollTo({
        top: elmnt.scrollHeight,
        behavior: 'smooth',
      })
      // elmnt.scrollTop = elmnt.scrollHeight
    }, 100)
  }
  return (
    <UsersContainerDiv selected={uiState}>
      {recieverUser && (
        <Header
          currentUser={currentUser}
          recieverUser={recieverUser && recieverUser.userId}
        />
      )}
      {!recieverUser && (
        <Caption>
          <h1 style={{ fontWeight: '400' }}>AJ Whatsapp</h1>
          <br />
          <br />
          <h3 style={{ fontWeight: '400' }}>Select a chat to continue</h3>
          <br />
          <br />
          <br />
          <h3 style={{ fontWeight: '400' }}>Whatsapp Clone - MERN Project</h3>
        </Caption>
      )}
      {recieverUser && (
        <Message
          currentUser={currentUser}
          recieverUser={recieverUser && recieverUser.userId}
          updateChatScroll={updateChatScroll}
        />
      )}
      {recieverUser && (
        <NewChat
          currentUser={currentUser}
          recieverUser={recieverUser && recieverUser.userId}
          updateChatScroll={updateChatScroll}
        />
      )}
    </UsersContainerDiv>
  )
}
export default MessagesContainerDiv

const UsersContainerDiv = styled.div`
  width: ${(props) => (props.selected ? '100%' : '0%')};
  overflow: hidden;
  background: url('https://img.wallpapersafari.com/desktop/728/410/1/80/8DYndB.png');
  transition: all 0.1s;

  @media ${device.tablet} {
    width: 70%;
    margin: 0;
    position: relative;
  }
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: space-between;
`
const Caption = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: #fff; */
  text-align: center;
  margin: auto;
  height: 100vh;
`
