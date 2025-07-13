import styled from "styled-components";
import profileImg from "../../assets/people.png";
import { UseData } from "../../context/dataContext";
import AdminMenuComponent from "../components/Account/AdminMenu";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #2f3e68ff;
  align-items: center;
  user-select: none;
`;
const ParentContent = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
`;

const ProfileContent = styled.div`
  display: flex;
  border: 1px solid #bebebe;
  flex-direction: column;
  width: 30%;
  height: 100%;
  align-items: center;
  padding-top: 6%;
  background-color: #bebebe54;
  margin-left: 0.9rem;
  gap: 0.7rem;
  border-radius: 9px;
  color: #1d2936ff;
  font-size: 1.5rem;
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
        <ProfileContent>
          <LogoImg src={profileImg} />
          {name}
        </ProfileContent>
        <AdminMenuComponent/>
      </ParentContent>
    </Container>
  );
};
export default ProfilePage;
