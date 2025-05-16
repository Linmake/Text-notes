import styled from "styled-components";
import img from "../../../assets/user.png";

const Img = styled.img`
  border-radius: 55%;
  width: 3.5vw;
  height: 5.1vh;
  box-sizing: border-box;
`;

export default function LogoAccount() {
  return <Img src={img} />;
}
