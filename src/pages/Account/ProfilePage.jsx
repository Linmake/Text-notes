import styled from "styled-components";
import profileImg from "../../assets/people.png";
import { UseData } from "../../context/dataContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCog, faFilter, faInbox, faSignOutAlt, faTrophy } from "@fortawesome/free-solid-svg-icons";
import BoardListComponent from "./Components/BoardList";
import { positionSideContext } from "../../context/SideProv";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Project from "../../components/ProjectsMenu/Project";

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
  background-color: #fffff;
  color: #1d2936ff;
  font-size: 1.5rem;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  box-shadow: rgba(158, 162, 165, 0.2) 0px 8px 24px;
`;

const LogoImg = styled.img`
  border: 1px solid #bebebe;
  border-radius: 55%;
  width: 72px;
  height: 72px;
  box-sizing: border-box;
`;

const MessageText = styled.p`
  margin-top: 1rem;
  color: black;
  font-size: 1.1rem;
`
const MessageSecond = styled.p`
  color: black;
  font-size: 0.8rem;
  text-align: center;
`
const ContainerIcons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 64%;
  height: fit-content;
`
const Icons1 = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid #9E9E9E;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const IconsFont = styled(FontAwesomeIcon)`
  font-size: 1.4rem;
`

const SearchContainer = styled.div`
  width: 95%;
  height: 60px;
  align-items: center;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-self: center;
  justify-content: space-between;
 `

const SearchBox = styled.input`
  width: 1250px;
  height: 100%;
  margin: 0;
  border: 1px solid #D6D6D6;
  border-radius: 10px;
  outline: none;
  padding-left: 1rem;
 `

const FilterSearchIcon = styled(FontAwesomeIcon)`
  font-size: 1.4rem;
 margin-left: 1.7rem;
`

const MainCore = styled.div`
  position: absolute;
  left: 12.4%;
  width: 72.1%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FDFDFD;
`

const TagsBanner = styled.div`
  width: 1300px;
  border-radius: 0.3rem;
  height: 13vh;
  margin-top: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
`

const Item1SecondBanner = styled.div`
  width: 420px;
  height: 65px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: rgba(222, 222, 222, 0.3) 0px 2px 5px 0px, rgba(222, 222, 222, 0.3) 0px 1px 1px 0px;
`

const Item2SecondBanner = styled.div`
  width: 420px;
  height: 65px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: rgba(222, 222, 222, 0.3) 0px 2px 5px 0px, rgba(222, 222, 222, 0.3) 0px 1px 1px 0px;
`

const Item3SecondBanner = styled.div`
 width: 420px;
  height: 65px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: rgba(222, 222, 222, 0.3) 0px 2px 5px 0px, rgba(222, 222, 222, 0.3) 0px 1px 1px 0px;
`

const Display = styled.div`
  width: 1300px;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.2rem;
`

const Signs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
  gap: 0.7rem;
`

const LeftArrow = styled.div`
  width: 40px;
  height: 40px;
`

const RightArrow = styled.div`
  width: 40px;
  height: 40px;
`

const ProjectsContent = styled.div`
  max-width: 1300px;
  border-radius: 0.3rem;
  height: 620px;
  align-items: center; 
  background-color: transparent;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  gap: 5rem;
  overflow-y: auto;
`

const SettingSect = styled.div`
  width: 90%;
  height: 20%;
  margin-top: 100%;
  display: flex;
  flex-direction: column;
`
const SettingsText = styled.p`
  color: #3F3F3F;
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
`

const SettingContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
`

const IconSettings = styled(FontAwesomeIcon)`
  font-size: 1rem;
  margin-right: 0.9rem;
`

const Logout = styled.div`
  color: #F13E3E;
  text-align: center;
  margin-top: 0.5rem;
  font-size: 1.2rem;
`


const ProfilePage = () => {
  const { setName, name } = UseData()
  const [cookie, setCookie] = useState(null);
  const { projects, setProjects } = useContext(positionSideContext);
  const { setData, setProject } = UseData();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setCookie(document.cookie);
        const { data } = await axios.get(`http://localhost:4000/project/all`, { withCredentials: true });
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchProjects();
  }, [setProjects, setProject, setData]);
  return (
    <Container>
      <ParentContent>
        <Onboard>
          <BoardListComponent />
          <SettingSect>
            <SettingsText>
              SETTINGS
            </SettingsText>
            <SettingContent>
              <IconSettings icon={faCog} />
              Settings
            </SettingContent>
            <Logout>
              <IconSettings icon={faSignOutAlt} className={"fa-rotate-180"} />
              Logout
            </Logout>
          </SettingSect>
        </Onboard>
        <MainCore>
          <SearchContainer>
            <SearchBox
              placeholder="Search your file here...."
            />
            <FilterSearchIcon icon={faFilter} />
          </SearchContainer>
          <TagsBanner>
            <Item1SecondBanner>
              Product Design
            </Item1SecondBanner>
            <Item2SecondBanner>
              Product Design
            </Item2SecondBanner>
            <Item3SecondBanner>
              Product Design
            </Item3SecondBanner>
          </TagsBanner>
          <Display>
            Continue Watching
            <Signs>
              <LeftArrow>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 52 52"
                  strokeWidth="2" stroke="currentColor" className="w-10 h-10">
                  <circle cx="20" cy="20" r="18.5" stroke="currentColor" fill="none" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M23 13l-7 7 7 7" />
                </svg>
              </LeftArrow>
              <RightArrow>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 52 52"
                  strokeWidth="2" stroke="currentColor" className="w-10 h-10">
                  <circle cx="20" cy="20" r="18.5" stroke="currentColor" fill="none" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 13l7 7-7 7" />
                </svg>
              </RightArrow>
            </Signs>
          </Display>
          <ProjectsContent>
            {projects.map((project, index) => (
                  <Project Title={project.Title} Id={project.Id} key={index} />
                   ))}
          </ProjectsContent>
        </MainCore>
        <Profile>
          <LogoImg src={profileImg} />
          {name}
          <MessageText>
            Good Night {(name & name !== "") ? name : "User"}
          </MessageText>
          <MessageSecond>
            Continue Your Journey And Archive
            <br />
            Your Target
          </MessageSecond>
          <ContainerIcons>
            <Icons1>
              <IconsFont icon={faBell} />
            </Icons1>
            <Icons1>
              <IconsFont icon={faInbox} />
            </Icons1>
            <Icons1>
              <IconsFont icon={faTrophy} />
            </Icons1>
          </ContainerIcons>
        </Profile>
      </ParentContent>
    </Container>
  );
};
export default ProfilePage;