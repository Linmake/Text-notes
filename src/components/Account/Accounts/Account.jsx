import { Link } from "react-router-dom";
import LogoAccount from "../../../pages/components/Account/LogoAccount/LogoAccount";
import styled from "styled-components";
import axios from "axios";
import { UseData } from "../../../context/dataContext";
import { useEffect } from "react";

const AccountContainer = styled.li`
  display: flex;
  flex-direction: row;
  text-align: center;
  width: 30%;
  justify-content: center;
  align-items: center;
  height: 52%;
  box-sizing: border-box;
  color: #212121;
  margin-left: ${(props) => props.marginleft || '0'};
  gap: ${(props) => props.gap || '0'};

`;

const AccountUnLogContainer = styled.li`
  display: flex;
  flex-direction: row;
  text-align: center;
  width: 30%;
  justify-content: center;
  align-items: center;
  height: 52%;
  box-sizing: border-box;
  color: #212121;
  margin-left: ${(props) => props.marginleft || '0'};
  gap: ${(props) => props.gap || '0'};
`;

const SignUpContent = styled.div`
  border: 1px solid black;
  padding: 4px 12px;
  border-radius: 6px;
`;

const Dropdown = styled.li`
  list-style: none;
  width: 25%;
`;

const DropdownMenu = styled.ul``;

const Name = styled.li``;

const LogoutBtn = styled.button`
  color: tomato;
  &:hover {
    color: red;
  }
`;
const Account = ({mainRoute, marginleft, gap }) => {
  const { login, setLogin, setName } = UseData();

  useEffect(() => {
    const fetchAccount = async () => {
      const { data } = await axios.get("http://localhost:4000/account/login", {
        withCredentials: true,
      });
      const { Name } = data;
      setName(Name);
    };
    const fetchJWT = async () => {
      const res = await axios.get("http://localhost:4000/account/token", {
        withCredentials: true,
      });
      const { status } = res.data;
      if (!status) {
        return setLogin(false);
      }
      setLogin(true);
      fetchAccount();
    };
    fetchJWT();
  }, [setLogin, setName]);

  const handlerLogout = async () => {
    await axios.get("http://localhost:4000/account/logout", {
      withCredentials: true,
    });
    setLogin(false);
  };
  return !login ? (
    <AccountUnLogContainer marginleft={marginleft} gap={gap}>
      <Link to={`${mainRoute}/Account/signin/`}>Sign in</Link>
      <SignUpContent>
        <Link to={`${mainRoute}/Account/signup/email`}>Sign up</Link>
      </SignUpContent>
    </AccountUnLogContainer>
  ) : (
    <AccountContainer marginleft={marginleft} gap={gap}>
        <LogoAccount/>
        {/* 
          <DropdownMenu className="dropdown-menu">
            <li>
              <LogoutBtn
                onClick={(e) => handlerLogout(e)}
                role="button"
                className="dropdown-item"
              > 
                Sign out
              </LogoutBtn>
            </li>
          </DropdownMenu>
        */}
    </AccountContainer>
  )
};
export default Account;