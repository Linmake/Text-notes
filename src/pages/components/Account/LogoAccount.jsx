import styled from "styled-components";
import img from "../../../assets/user.png";

const Img = styled.img`
  border-radius: 55%;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

export default function LogoAccount() {
  return <Img src={img} />;
}
