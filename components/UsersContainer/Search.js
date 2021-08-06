import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import Input from '@material-ui/core/Input'

import InputAdornment from '@material-ui/core/InputAdornment'
import { useState } from 'react'

const SearchFunc = () => {
  const [clicked, setClicked] = useState(false)
  return (
    <>
      <SearchDiv clicked={clicked ? 1 : 0}>
        <InputStyled
          clicked={clicked ? 1 : 0}
          onClick={!clicked ? () => setClicked(true) : null}
          startAdornment={
            <InputAdornment position='start'>
              {clicked ? (
                <ArrowBackIcon onClick={() => setClicked(false)} />
              ) : (
                <SearchIcon />
              )}
            </InputAdornment>
          }
          placeholder='Search or start new chat'
        />
      </SearchDiv>
    </>
  )
}

export default SearchFunc

const SearchDiv = styled.div`
  height: 10vh;
  background-color: ${(props) => (props.clicked==1 ? 'white' : '#f6f6f6')};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .1s;
`

const InputStyled = styled(Input)`
  border-radius: 15px;
  width: 95%;
  height: 40px;
  padding: 0 20px;
  background-color: white;
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

