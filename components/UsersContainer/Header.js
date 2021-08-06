import styled from 'styled-components'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import IconButton from '@material-ui/core/IconButton'

const HeaderFunc = () => {
  return (
    <>
      <Header>
        {/* <IconButton> */}
          <Profile>
            <p>😃</p>
          </Profile>
        {/* </IconButton> */}
        <RightIcon>
          <IconButton>
            <ChatIcon color='action' />
          </IconButton>
        </RightIcon>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </Header>
    </>
  )
}

export default HeaderFunc

const Header = styled.div`
  margin: auto;
  background-color: #ededed;
  height: 10vh;
  height: calc(var(--vh, 1vh) * 10);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
`

export const Profile = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100px;
  background-color: aliceblue;
  position: relative;
  & > p {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2.5rem;
  }
`


const RightIcon = styled.div`
  margin-left: auto;
`
