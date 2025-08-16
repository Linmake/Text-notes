import styled from "styled-components";
import profileImg from "../../assets/people.png";
import AdminMenuComponent from "../components/Account/AdminMenu";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #fcfcfc;
  align-items: center;
`;
const ParentContent = styled.div`
  border: 1px solid #bebebe;
  width: 90%;
  height: 90%;
`;

const ProfileContent = styled.div`
  border-right: 1px solid #bebebe;
  width: 30%;
  height: 100%;
  padding-left: 3%;
  padding-top: 3%;
  display: flex;
  flex-direction: column;
`;
const LogoImg = styled.img`
  border: 1px solid #bebebe;
  border-radius: 55%;
  width: 40%;
  box-sizing: border-box;
`;

const SettingsAccountPage = () => {
  return (
    <Container>
      <ParentContent>
        <ProfileContent>
          <LogoImg src={profileImg} />
          Settings Account ✨🎇🔧🔨⚙🛠
          <AdminMenuComponent/>
        </ProfileContent>
      </ParentContent>
    </Container>
  );
};
export default SettingsAccountPage;
