import styled from 'styled-components'

const Header = styled.nav`
  position: fixed;
  grid-area: header;
  width: 100%;
  height: 60px;
  background: rgb(251,120,80);
  background: linear-gradient(90deg, rgba(251,120,80,1) 0%, rgba(242,179,50,1) 100%);
  z-index: 3;
`
const ListaInicio = styled.ul`
  margin-left: 72px;
  display: column;
  gap: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ButtonInicio = styled.button`
background: none;
border-radius: 5px;
border: none;
padding: 5px 5px;
outline: none;
overflow-wrap: break-word;
text-size-adjust: none;
transition: background-color .1s linear, border-color .1s linear, color .1s linear;
&:hover{
background-color: rgba(255, 255, 255, 0.1);
}
`
const DropDown = styled.a`
  color: white !important;
  font-size: 1.3rem;
  width: 138px;
  height: 40px;
  background: none;
  border-radius: 5px !;
  padding: 5px 20px;
  outline: none;
  overflow-wrap: break-word;
  text-size-adjust: none;
  transition: background-color .1s linear, border-color .1s linear,   color .1s linear;
  &:hover{
    background-color: rgba(255, 255, 255, 0.1);
  }
`
const LinkInicio = styled.a`
  color: white !important;
  font-size: 1.3rem;
`

const EditorHeader = () => {
  const RutaPrincipal = "http://localhost:4001"
  return (
    <>
      <Header className="navbar navbar-expand-lg bg-body-tertiary" id='headerEditor'>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <ListaInicio className="navbar-nav me-auto mb-2 mb-lg-0" id='navbarSection1'>
          <li className="nav-item">
            <ButtonInicio aria-expanded="false" role="menuitem">
              <LinkInicio className="nav-link active" aria-current="page" href="http://localhost:4001/">
                Home
              </LinkInicio>
            </ButtonInicio>
          </li>

          <li className="nav-item dropdown">
            <DropDown className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
              Mis notas
            </DropDown>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href={`${RutaPrincipal}/Projects-menu/`}>Projects</a></li>
              <li><a className="dropdown-item" href={`${RutaPrincipal}/Folders/`}>Folders</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href={`${RutaPrincipal}/Notes/`}>Notes</a></li>
            </ul>
          </li>
        </ListaInicio>
      </Header>
    </>
  )
}
export default EditorHeader