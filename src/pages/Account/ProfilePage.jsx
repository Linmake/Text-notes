import styled from "styled-components";
import profileImg from "../../assets/people.png";
import { UseData } from "../../context/dataContext";
import AdminMenuComponent from "../components/Account/AdminMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud, faFilter } from "@fortawesome/free-solid-svg-icons";

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
  justify-content: center;
  
`;

const Onboard = styled.div`
  display: flex;
  flex-direction: column;
  width: 12.5%;
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
  position: absolute;
  left: 0;
`;

const Profile = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
  width: 15.5%;
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

const SearchContainer = styled.div`
  width: 96%;
  height: 56px;
  align-items: center;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
 ` 

const SearchBox = styled.input`
  width: 93%;
  height: 55px;
  margin: 0;
  border: 1px solid #D6D6D6;
  border-radius: 10px;
  outline: none;
  padding-left: 1rem;
 `

 const FilterSearchIcon = styled(FontAwesomeIcon)`
  font-size: 1.4rem;
 margin-left: 1.7rem;
`;

const MainCore = styled.div`
  position: absolute;
  left: 12.4%;
  width: 73.5%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ` 

const ProfilePage = () => {
  const {setName, name } = UseData()
  return (
    <Container>
      <ParentContent>
        <Onboard>
          OVERVIEW
        </Onboard>
        <MainCore>
        <SearchContainer>
          <SearchBox
            placeholder="Search your file here...."
          />
          <FilterSearchIcon icon={faFilter} />
        </SearchContainer>
        <AdminMenuComponent/>
        </MainCore>
        <Profile>
          <LogoImg src={profileImg} />
          {name}
        </Profile>
      </ParentContent>
    </Container>
  );
};
export default ProfilePage;