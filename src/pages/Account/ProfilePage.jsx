import styled from "styled-components";
import profileImg from "../../assets/people.png";
import { UseData } from "../../context/dataContext";
import AdminMenuComponent from "../components/Account/AdminMenu";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: white;
  align-items: center;
  user-select: none;
  margin: 0;
`;
const ParentContent = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  background-color: #FFFFFE;
`;

const Onboard = styled.div`
  display: flex;
  flex-direction: column;
  width: 14%;
  height: 100%;
  align-items: center;
  padding-top: 6%;
  background-color: #ffffffff;
  gap: 0.7rem;
  color: #1d2936ff;
  font-size: 1.5rem;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  box-shadow: rgba(158, 162, 165, 0.2) 0px 8px 24px;
`;

const Profile = styled.div`
  position: absolute;
  margin-left: 86%;
  display: flex;
  flex-direction: column;
  width: 14%;
  height: 100%;
  align-items: center;
  padding-top: 6%;
  background-color: #ffffffff;
  color: #1d2936ff;
  font-size: 1.5rem;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  box-shadow: rgba(158, 162, 165, 0.2) 0px 8px 24px;
`;

const LogoImg = styled.img`
  border: 1px solid #bebebe;
  border-radius: 55%;
  width: 5rem;
  height: 5rem;
  box-sizing: border-box;
`;

const ProfilePage = () => {
  const {setName, name } = UseData()
  return (
    <Container>
      <ParentContent>
        <Onboard>
          OVERVIEW
        </Onboard>
        <AdminMenuComponent/>
        <Profile>
          <LogoImg src={profileImg} />
          {name}
        </Profile>
      </ParentContent>
    </Container>
  );
};
export default ProfilePage;