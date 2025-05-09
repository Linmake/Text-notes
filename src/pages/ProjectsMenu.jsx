import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NewProjectTab } from "../components/Project/NewProjectTab.jsx";
import { ProjectCompTemplate } from "../components/Templates/ProjectCompTemplate.jsx";
import styled from "styled-components";
import "../styles/pages/projects/global.css";
import axios from "axios";
import { positionSideContext } from "../context/SideProv.jsx";
import { UseData } from "../context/dataContext.jsx";
import { NoProjectCompTemplate } from "../components/Templates/NoProjectCompTemplate.jsx";

const Container = styled.div`
  width: 52%;
  display: flex;
  box-shadow: 0px 0px 2px #c4c7cc;
  border-radius: 3px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: fit-content;
  background-color: #fff;
  padding: 3%;
  padding-top: 2%;
  margin-top: 7%;
`;
const NoProjectsContainer = styled.div`
  width: 52%;
  height: 45%;
  display: flex;
  border: 1px solid #dee0e3;
  box-shadow: 0px 0px 4px #cccc;
  border-radius: 3px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.4);
  padding-top: 2%;
  margin-top: 7%;
`;
const ProjectElement = styled.li`
  border-bottom: 1px solid #c4c7c5;
  font-size: 1.3rem;
  list-style: none;
  font-family: "Poppins", "Lucida Sans", "Lucida Sans Regular";
  width: 58vw;
  height: 80px;
  padding-top: 0.625rem;
  padding-left: 1.2rem;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: flex;
  align-items: center;
  color: #000;
  cursor: pointer;

  &:last-child {
    border: none;
  }
  &:hover {
    background-color: rgba(242, 244, 245, 0.45);
  }
`;
const Ul = styled.ul`
  margin: 0 !important;
  padding-inline-start: 0 !important;
`;
const Subtitle = styled.h2`
  font-size: 32px;
  color: #3b3a40;
  font-weight: bold;
  user-select: none;
`;
/*
 *Get Projects from de DB
 */
/*
 *@returns List Projects
 */
const ProjectsMenu = () => {
  const [cookie, setCookie] = useState(null);
  //const InitialData = useLoaderData()
  //const [ projects, setProjects ] = useState(InitialData);
  const { projects, setProjects } = useContext(positionSideContext);
  const { setData, setProject, name, setName } = UseData();
  const [nameAccount, setNameAccount] = useState(null);

  const navProject = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setCookie(document.cookie);
        const res = await axios.get(`http://localhost:4000/project/all`);
        setProjects(res.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchProjects();
  }, [setProjects, setProject, setData]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setCookie(document.cookie);
        const resLogin = await axios.get(
          `http://localhost:4000/account/login`,
          { withCredentials: true }
        );
        const account = resLogin.data;
        const { Name } = account;
        setName(Name);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchProjects();
  }, []);

  const handleClick = (id) => {
    navProject(`/Project/${id}`);
    setData({ key: id });
    const findProject = projects.find((project) => project.Id == id);
    setProject(findProject);
  };
  const noProjects = () => {
    return (
      <NoProjectCompTemplate>
        <div>
          <div>{name}</div>
        </div>
        <NoProjectsContainer>
          <div></div>
          <NewProjectTab />
          <Subtitle className="subtitle-noprojects">Without projects</Subtitle>
        </NoProjectsContainer>
      </NoProjectCompTemplate>
    );
  };

  return (
    <>
      {projects.length == 0 ? (
        noProjects((event) => event)
      ) : (
        <ProjectCompTemplate>
          <div>
            <div>{name}</div>
          </div>
          <Container>
            <NewProjectTab />
            <Ul>
              {projects.map((project, index) => (
                <ProjectElement
                  key={index}
                  onClick={() => handleClick(project.Id)}
                >
                  {project.Title}
                </ProjectElement>
              ))}
            </Ul>
          </Container>
        </ProjectCompTemplate>
      )}
    </>
  );
};
export default ProjectsMenu;
