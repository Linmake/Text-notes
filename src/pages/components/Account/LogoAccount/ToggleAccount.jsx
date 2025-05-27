import axios from "axios";
import styled from "styled-components";
import { UseData } from "../../../../context/dataContext";
import { Link } from "react-router-dom";

const Toggle = styled.div`
  width: 10vw;
  height: 12vh;
  background-color: white;
  display: flex;
  padding-bottom: 1.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  position: absolute;
  top: 5vh;
  right: 7.5vw;
  border: 1px solid #D2D2D2;
  border-radius: 0.3rem;
`;

const ToggleElement = styled.div`
  text-align: center;
  width: 100%;
  &:first-child{
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }
  &:hover{
    background-color:rgb(248, 247, 247);
  }
  &:active{
    background-color:rgb(248, 247, 247);
  }
`;

const Dropdown = styled.li`
  list-style: none;
  width: 25%;
`;

const DropdownMenu = styled.ul``;

const LogoutBtn = styled.button`
  color: tomato;
  &:hover {
    color: red;
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
      <ToggleElement>
        <Link to={"account"}>Account</Link>
      </ToggleElement>
      <ToggleElement>
        <LogoutBtn
          onClick={(e) => handlerLogout(e)}
          role="button"
          className="dropdown-item"
        >
          Sign out
        </LogoutBtn>
      </ToggleElement>
    </Toggle>
  );
};

export default ToggleAccount;
