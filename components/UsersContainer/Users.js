import styled from 'styled-components'
import { Profile } from './Header'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import { device } from '../../mediaquery'
import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {uiActions} from '../../store/uiSlice'
import {userActions} from '../../store/userSlice'
import {useRouter} from 'next/router'


const UsersFunc = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const userState = useSelector(state=>state.user)
  
  var description =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, rerum.'
  const substringDescription = (str, char = 30) => {
    if (str.length > char) return str.substring(0, char) + '...'
    else return str
  }
  const [selectedUser, setSelectedUser] = useState(null)
  const userClickHandler = (userId) => {
    setSelectedUser(userId)
    dispatch(uiActions.toggleChatArea())
    dispatch(uiActions.setSelectedUser(userId))
    router.push(`/?open=true`)
  }
  
  return (
    <UsersDiv>
      {userState.map((u) => (
        <div key={u.userId}>
          <User
            id={u.userId}
            onClick={() => userClickHandler(u.userId)}
            className={`${selectedUser == u.userId ? 'active' : ''}`}
          >
            <ProfileStyled>
              <p>{u.userEmoji}</p>
            </ProfileStyled>
            <UserDetails>
              <TypographyStyled variant='h6' color='textPrimary'>
                {u.username}
              </TypographyStyled>
              <Typography variant='body2'>
                {substringDescription(description)}
              </Typography>
            </UserDetails>
          </User>
          <DividerStyled variant='inset' light />
        </div>
      ))}
    </UsersDiv>
  )
}

export default UsersFunc

const UsersDiv = styled.div`
  width: 100%;
  background-color: #fff;
  height: 80vh;
  overflow-y: scroll;

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
`

const User = styled.div`
  width: 100%;
  height: 12vh;
  background-color: #fff;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  gap: 0.5rem;
  padding-right: 1rem;
  &:hover {
    background-color: #f5f5f5;
  }
  &.active {
    background-color: #ebebeb;
  }
`
const UserDetails = styled.div`
  width: 80%;
  height: 9.5vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const ProfileStyled = styled(Profile)`
  margin: 0 0.5rem;
  width: 60px;
  height: 60px;
  & > p {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2.5rem;
  }
`
const DividerStyled = styled(Divider)`
  width: 80%;
`

const TypographyStyled = styled(Typography)`
  font-weight: 400 !important;
`
