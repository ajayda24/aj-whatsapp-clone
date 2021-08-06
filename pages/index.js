import styled from 'styled-components'
import UsersContainer from '../components/UsersContainer'
import MessagesContainer from '../components/MessagesContainer'

import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { uiActions } from '../store/uiSlice'

export default function Home() {
  const router = useRouter()
  const dispatch = useDispatch()
  useEffect(() => {
    if (!router.query.open) {
      dispatch(uiActions.toggleChatArea(false))
    }
  }, [router])
  return (
    <Container>
      <UsersContainer />
      <MessagesContainer/>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  position: relative;
`
