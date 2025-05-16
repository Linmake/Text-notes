import styled from "styled-components";
import Account from "../../Account/Accounts/Account";

const SectionNotas = styled.ul`
  display: flex;
  width: 35%;
  justify-content: space-around;
`

const LinksContent = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  `
  const Links = styled.a`
  display: block;
  box-sizing: border-box;
  margin-left: 7%;
  color: #FFFF !important;
  font-weight: 400;
  height: 20px;
  &:hover{
    border-bottom: 1px solid white;
  }
`

export default function LinksIndex({ mainRoute, login, nameAccount }) {
  return (
    <SectionNotas className="navbar-nav me-auto mb-2 mb-lg-0">
      <LinksContent>
        <Links
          className="nav-link active"
          aria-current="page"
          href={`${mainRoute}/#Create`}
        >
          Model
        </Links>
        <Links
          className="nav-link active"
          aria-current="page"
          href={`${mainRoute}/projects-menu`}
        >
          Projects
        </Links>
        <Links
          className="nav-link active"
          aria-current="page"
          href={`${mainRoute}/folder`}
        >
          Folders
        </Links>
      </LinksContent>
      <Account marginLeft={"18%"} login={login} mainRoute={mainRoute} nameAccount={nameAccount} />
    </SectionNotas>
  );
}
