import axios from "axios";
import styled from "styled-components";
import { UseData } from "../../../../context/dataContext";

const Toggle = styled.div`
  width: 10vw;
  height: 15vh;
  background-color: white;
  display: flex;
  flex-direction: row;
  padding: 0.25rem;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 7vh;
  right: 11vw;
  border: 1px solid grey;
`;

const ToggleElement = styled.div`
  text-align: center;
  border-bottom: 1px solid grey;
  width: 100%;
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
