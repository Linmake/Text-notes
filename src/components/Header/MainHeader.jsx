import styled from 'styled-components'
import '../../styles/components/header/HeaderInicio.css'
import MainLinks from './Components/MainLinks'
import Account from '../Account/Accounts/Account'

const Header = styled.nav`
  display: flex;
  flex-direction: row;
  width: 100%;
  marging: 0;
  background-color: white;
  user-select: none;
  padding: 8px 16px;
  position: fixed;
  top: 0;
`
const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 50%;
`

const MainHeader = ({mainRoute}) => {
  return (
    <>
      <Header className="navbar navbar-expand-lg">
        <NavContainer className="container-fluid">
          <MainLinks mainRoute={mainRoute}/>
          <Account marginLeft={"0"} mainRoute={mainRoute} gap={"1rem"}/>
        </NavContainer>
      </Header>
    </>
  )
}
export default MainHeader