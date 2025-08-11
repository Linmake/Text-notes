import styled from "styled-components";
import profileImg from "../../assets/people.png";
import { UseData } from "../../context/dataContext";
import AdminMenuComponent from "../components/Account/AdminMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faFilter, faInbox, faTrophy } from "@fortawesome/free-solid-svg-icons";

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

const BoardList = styled.ul`
  // border: 1px solid green;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  width: 90%;
  height: 50vh;
  `

const FirstElementList = styled.li`
  list-style: none;
  font-size: 1.3rem;
  &:hover{
    color: #702DFF;
    cursor: pointer;
  }
`

const ListElement = styled.li`
  list-style: none;
  font-size: 1.3rem;
  display: flex;
  width: 84%;
  height: 2.2rem;
  gap: 1.5rem;
  &:hover{
    color: #702DFF;
    cursor: pointer;
  }
`

const IconDashboard = styled.svg`
  width: 2rem;
  height: 1.8rem;
  margin-right: 0.4rem;
  margin-top: 0.1rem;
`;

const IconInbox = styled.svg`
 width: 2rem;
  height: 1.8rem;
  margin-right: 0.4rem;
  margin-top: 0.1rem;
`;

const IconLesson = styled.svg`
 width: 2rem;
  height: 1.8rem;
  margin-right: 0.4rem;
  margin-top: 0.1rem;
`;

const IconTask = styled.svg`
  width: 2rem;
  height: 1.8rem;
  margin-right: 0.4rem;
  margin-top: 0.1rem;
`;

const IconGroup = styled.svg`
  width: 2rem;
  height: 1.8rem;
  margin-right: 0.4rem;
  margin-top: 0.1rem;
`;

const TextBoard = styled.p`
`

const FirstBanner = styled.div`
  width: 1300px;
  border-radius: 0.3rem;
  height: 13vh;
  border: 1px solid grey;
  margin-top: 25px;
  background-color: #702DFF;
`

const SecondBanner = styled.div`
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

const ThirtyBanner = styled.div`
  width: 1300px;
  border-radius: 0.3rem;
  height: 280px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  background-color: transparent;
`

const Item1ThirtyBanner = styled.div`
  width: 420px;
  height: 260px;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 1rem;
  // box-shadow: rgba(222, 222, 222, 0.3) 0px 2px 5px 0px, rgba(222, 222, 222, 0.3) 0px 1px 1px 0px;
  box-shadow: rgba(222, 222, 222, 0.2) 0px 2px 15px 0px, rgba(222, 222, 222, 0.2) 0px 1px 5px 0px;
`

const Item2ThirtyBanner = styled.div`
  width: 420px;
  height: 260px;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 1rem;
  // box-shadow: rgba(222, 222, 222, 0.3) 0px 2px 5px 0px, rgba(222, 222, 222, 0.3) 0px 1px 1px 0px;
  box-shadow: rgba(222, 222, 222, 0.2) 0px 2px 15px 0px, rgba(222, 222, 222, 0.2) 0px 1px 5px 0px;
`

const Item3ThirtyBanner = styled.div`
 width: 420px;
  height: 260px;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 1rem;
  // box-shadow: rgba(222, 222, 222, 0.3) 0px 2px 5px 0px, rgba(222, 222, 222, 0.3) 0px 1px 1px 0px;
  box-shadow: rgba(222, 222, 222, 0.2) 0px 2px 15px 0px, rgba(222, 222, 222, 0.2) 0px 1px 5px 0px;
`

const Img1ThirtyBann = styled.img`
  width: 100%;
  height: 112px;
  border-radius: 10px;
  border: 1px solid grey;
`
const Img2ThirtyBann = styled.img`
width: 100%;
  height: 112px;
  border-radius: 10px;
  border: 1px solid grey;
`
const Img3ThirtyBann = styled.img`
width: 100%;
  height: 112px;
  border-radius: 10px;
  border: 1px solid grey;
`

const TitleNote1 = styled.p`
  font-size: 1.2rem;
  font-bold: 500;
  margin-top: 0.5rem;
`

const Category = styled.div`
  width: 70px;
  height: 1.3rem;
  margin-top: 1rem;
  font-size: 0.9rem;
  background-color: #E2D5FF;
  color: #8C57FF;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
`

const ProfilePage = () => {
  const { setName, name } = UseData()
  return (
    <Container>
      <ParentContent>
        <Onboard>
          <BoardList>
            <FirstElementList>
              <TextBoard>
                OVERVIEW
              </TextBoard>
            </FirstElementList>
            <ListElement>
              <IconDashboard
                xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </IconDashboard>
              <TextBoard>
                Dashboard
              </TextBoard>
            </ListElement>
            <ListElement>
              <IconInbox
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859M12 3v8.25m0 0-3-3m3 3 3-3" />
              </IconInbox>
              <TextBoard>
                Inbox
              </TextBoard>
            </ListElement>
            <ListElement>
              <IconLesson xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
              </IconLesson>

              <TextBoard>
                Lesson
              </TextBoard>
            </ListElement>
            <ListElement>
              <IconTask xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122" />
              </IconTask>
              <TextBoard>
                Task
              </TextBoard>
            </ListElement>
            <ListElement>
              <IconGroup xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
              </IconGroup>
              <TextBoard>
                Group
              </TextBoard>
            </ListElement>
          </BoardList>
        </Onboard>
        <MainCore>
          <SearchContainer>
            <SearchBox
              placeholder="Search your file here...."
            />
            <FilterSearchIcon icon={faFilter} />
          </SearchContainer>
          <FirstBanner />
          <SecondBanner>
            <Item1SecondBanner>
              Product Design
            </Item1SecondBanner>
            <Item2SecondBanner>
              Product Design
            </Item2SecondBanner>
            <Item3SecondBanner>
              Product Design
            </Item3SecondBanner>
          </SecondBanner>
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
          <ThirtyBanner>
            <Item1ThirtyBanner>
              <Img1ThirtyBann src={"#"} />
              <Category>
                Note
              </Category>
              <TitleNote1>
                Note Name
              </TitleNote1>
            </Item1ThirtyBanner>
            <Item2ThirtyBanner>
              <Img2ThirtyBann src={"#"} />
              <Category>
                Folder
              </Category>
              <TitleNote1>
                Folder Name
              </TitleNote1>
            </Item2ThirtyBanner>
            <Item3ThirtyBanner>
              <Img3ThirtyBann src={"#"} />
              <Category>
                Project
              </Category>
              <TitleNote1>
                Proyect Name
              </TitleNote1>
            </Item3ThirtyBanner>
          </ThirtyBanner>
          <AdminMenuComponent />
        </MainCore>
        <Profile>
          <LogoImg src={profileImg} />
          {name}
          <MessageText>
            Good Night {(name & name !== "") ? name : "Nicole"}

          </MessageText>
          <MessageSecond>
            Continue Your Journey And Archive
            <br />
            Your Target
          </MessageSecond>
          <ContainerIcons>
            <Icons1>
              <IconsFont icon={faBell}/>
            </Icons1>
            <Icons1>
              <IconsFont icon={faInbox}/>
            </Icons1>
            <Icons1>
              <IconsFont icon={faTrophy}/>
            </Icons1>
          </ContainerIcons>
        </Profile>
      </ParentContent>
    </Container>
  );
};
export default ProfilePage;