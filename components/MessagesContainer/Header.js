import styled from 'styled-components'
import { Profile } from '../UsersContainer/Header'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import Typography from '@material-ui/core/Typography'
import { useSelector } from 'react-redux'

const HeaderFunc = (props) => {
  const userState = useSelector(state => state.user)
  const recieverUser = userState.find((u) => u.userId == props.recieverUser)
  return (
    <Header>
      <Profile>
        <p>{recieverUser.userEmoji}</p>
      </Profile>
      <TypographyStyled variant='body1' color='textPrimary'>
        {recieverUser.username}
      </TypographyStyled>
      <RightIcon>
        <IconButton>
          <SearchIcon color='action' />
        </IconButton>
      </RightIcon>
      <IconButton>
        <MoreVertIcon />
      </IconButton>
    </Header>
  )
}

export default HeaderFunc

const Header = styled.div`
  width: 100%;
  margin: auto;
  background-color: #ededed;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
`

const RightIcon = styled.div`
  margin-left: auto;
`
const TypographyStyled = styled(Typography)`
  font-weight: 400 !important;
  margin-left: 1rem !important;
`
