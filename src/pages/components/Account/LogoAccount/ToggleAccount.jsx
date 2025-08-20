import axios from "axios";
import styled from "styled-components";
import { UseData } from "../../../../context/dataContext";

const Toggle = styled.div`
  width: 8vw;
  height: 14vh;
  position: absolute;
  top: 7vh;
  left: 0.5vw;
  background-color: rgb(255, 255, 255);
  display: flex;
  padding-bottom: 2.4rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  border: 1px solid #d2d2d2;
  border-radius: 0.3rem;
  text-decoration: none !important;
  @media (min-width: 300px) and (max-width: 550px) {
    width: 130px;
    top: 9vh;
    right: 4vw;
  }
`;

const ToggleElement = styled.a`
  text-align: center;
  width: 100%;
  padding: 0.2rem;
  border-radius: 0.3rem;
  z-index: 1000;
  text-decoration: none !important;
  &:first-child {
    margin-top: 2rem;
    font-weight: 600;
    font-size: 1.1rem;
  }
  &:last-child {
    margin-bottom: 0.8rem;
  }
  &:hover {
    background-color: rgba(247, 248, 248, 0.69);
  }
  &:active {
    background-color: rgba(247, 248, 248, 0.69);
  }
`;

const LogoutBtn = styled.button`
  color: tomato;
  width: 100%;
  &:hover {
    color: red;
  }
  border: none;
  background: none;
  &:hover {
    background-color: rgba(247, 248, 248, 0.69);
  }
  &:active {
    background-color: rgba(247, 248, 248, 0.69);
  }
`;

const ToggleAccount = () => {
  const { setLogin } = UseData();
  const handlerLogout = async () => {
    await axios.get("http://localhost:4000/account/logout", {
      withCredentials: true,
    });
    setLogin(false);
  };
  return (
    <Toggle>
      <ToggleElement href={"account/profile"} >Account</ToggleElement>
      <ToggleElement href={"settings"} >Settings</ToggleElement>
      <LogoutBtn
        onClick={(e) => handlerLogout(e)}
        role="button"
      >
        Sign out
      </LogoutBtn>
    </Toggle>
  );
};
export default ToggleAccount;