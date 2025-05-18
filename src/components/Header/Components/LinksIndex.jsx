import styled from "styled-components";

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
  color: #6B6B6B;
  font-weight: 400;
  height: 20px;
  &:hover{
    color: black;
  }
`

export default function LinksIndex({ mainRoute }) {
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
