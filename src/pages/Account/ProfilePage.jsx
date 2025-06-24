import styled from "styled-components";
import profileImg from "../../assets/people.png";
import { UseData } from "../../context/dataContext";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #fcfcfc;
  align-items: center;
  user-select: none;
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
  align-items: center;
  gap: 0.7rem;
  font-size: 1.5rem;
`;
const LogoImg = styled.img`
  border: 1px solid #bebebe;
  border-radius: 55%;
  width: 40%;
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
      </ParentContent>
    </Container>
  );
};
export default ProfilePage;
