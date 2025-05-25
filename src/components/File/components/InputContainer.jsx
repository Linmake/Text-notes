import styled from "styled-components";
import { navItem, navLink } from "../../Hooks/themaStyled";

const InputContainer = styled.ul`
list-style: none;
margin-top: 5%;
margin-bottom: 5%;
& > .nav-link {
  ${navItem}
}
& > .nav-item {
  ${navLink}
}
& > .hidde {
display: none;
}
`
export default InputContainer