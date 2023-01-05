import styled from "@emotion/styled"
import HorseList from './HorseList'
import NameList from '@components/NameList'
const H1 = styled.h1(
  {
    fontSize: 20
  },
  props => ({ color: props.color })
)

const PageWrapper = styled.div``

export const HorseContainer = () => {  

  return (
    <PageWrapper>
      <HorseList />
    </PageWrapper>
  )
}

export default HorseContainer
