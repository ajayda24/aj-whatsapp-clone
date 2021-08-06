import styled from 'styled-components'
import Header from './Header'
import Search from './Search'
import Users from './Users'
import { device } from '../../mediaquery'
import { useSelector } from 'react-redux'



const UsersContainer = () => {
  const uiState = useSelector((store) => store.ui.chatAreaSelected)
  return (
    <UsersContainerDiv selected={uiState}>
      <Header />
      <Search />
      <Users />
    </UsersContainerDiv>
  )
}
export default UsersContainer

const UsersContainerDiv = styled.div`
  width: ${(props) => (props.selected ? '0%' : '100%')};
  overflow: hidden;
  transition: all .1s;
  @media ${device.tablet} {
    width: 30%;
    margin: 0;
    position: relative;
  }
`


