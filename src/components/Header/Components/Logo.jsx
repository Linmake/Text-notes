import styled from "styled-components";

const LogoFont = styled.a`
  font-size: 35px;
  color: #ffff;
  margin-left: 70px;
  &:hover {
    color: #ececec;
  }
`;
export default function Logo() {
  return (
    <LogoFont className="navbar-brand" href="/">
      Notes
    </LogoFont>
  );
}
