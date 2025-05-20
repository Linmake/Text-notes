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
  font-size: 1.15rem;
  `
  const Links = styled.a`
  display: block;
  box-sizing: border-box;
  margin-left: 7%;
  color: #FFFF !important;
  font-weight: 400;
  height: 20px;
  &:hover{
    color: black;
  }
`

export default function LinksIndex({ mainRoute, nameAccount }) {
  return (
    <SectionNotas className="navbar-nav me-auto mb-2 mb-lg-0">
      <LinksContent>
        <Links
          className="active"
          aria-current="page"
          href={`${mainRoute}/#Create`}
        >
          Model
        </Links>
        <Links
          className="active"
          aria-current="page"
          href={`${mainRoute}/projects-menu`}
        >
          Projects
        </Links>
        <Links
          className="active"
          aria-current="page"
          href={`${mainRoute}/folder`}
        >
          Folders
        </Links>
      </LinksContent>
    </SectionNotas>
  );
}
