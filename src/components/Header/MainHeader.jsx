import styled from 'styled-components'
import '../../styles/components/header/HeaderInicio.css'
import MainLinks from './Components/MainLinks'
import Account from '../Account/Accounts/Account'

const Header = styled.nav`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 73px;
  marging: 0;
  background-color: #1F252C;
  user-select: none;
  padding: 8px 16px;
  position: fixed;
  top: 0;
  z-index: 10000000;
  @media (min-width: 375px) and (max-width: 430px) {
    height: 60px;
  }
`
const NavContainer = styled.nav`
  display: flex;
  align-items: center;
`

const MainHeader = ({mainRoute}) => {
  return (
    <>
      <Header className="navbar navbar-expand-lg">
        <NavContainer className="container-fluid">
          <Account marginleft={"0"} mainRoute={mainRoute} gap={"1rem"}/>
          <MainLinks mainRoute={mainRoute}/>
        </NavContainer>
      </Header>
    </>
  )
}
export default MainHeader