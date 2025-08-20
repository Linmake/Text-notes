import styled from "styled-components";

const LinksContainer = styled.ul`
  display: flex;
  width: 35%;
  justify-content: space-around;
`

const LinksContent = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  `
const Links = styled.a`
  display: block;
  box-sizing: border-box;
  margin-left: 10%;
  color: white;
  font-style: none;
  font-weight: 400;
  text-decoration: none !important;
  &:hover{
    color: black;
  }
`
const ToggleContent = styled.div`
  width: 30px;
  height: 30px;
  background-color: white;
  display: none;
  @media (min-width: 375px) and (max-width: 430px) {
    display: block;
  }
`

export default function LinksIndex({ mainRoute }) {
  return (
    <>
      <LinksContainer className="me-auto mb-2 mb-lg-0">
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
      </LinksContainer>
      <ToggleContent>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
</svg>
      </ToggleContent>
    </>
  );
}