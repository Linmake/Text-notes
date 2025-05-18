import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NewProjectTab } from "../../components/ProjectSideBar/NewProjectTab.jsx";
import { ProjectCompTemplate } from "../../components/Templates/ProjectCompTemplate.jsx";
import styled from "styled-components";
import axios from "axios";
import { positionSideContext } from "../../context/SideProv.jsx";
import { UseData } from "../../context/dataContext.jsx";
import { NoProjectCompTemplate } from "../../components/Templates/NoProjectCompTemplate.jsx";
import LogoAccount from "../../components/Account/Accounts/LogoAccount.jsx";
import "../../styles/pages/projects/global.css";
import ProjectComponent from "../../components/ProjectsMenu/Project.jsx";
import NoProjects from "../../components/ProjectsMenu/NotProjects.jsx";
const ContainerProjects = styled.div`
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
const ProjectList = styled.ul`
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
 *@returns List Projects
 */
const ProjectsMenu = () => {
  const RutaPrincipal = "http://localhost:4001" 
  const [cookie, setCookie] = useState(null);
  const { projects, setProjects } = useContext(positionSideContext);
  const { setData, setProject, name, setName } = UseData();

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
  return (
    <>
      {projects.length == 0 
      ? <NoProjects/> 
       : (
        <ProjectCompTemplate>
          <div>
            <Link to={`${RutaPrincipal}/projects-menu`}>
              <LogoAccount/>
            </Link>
            <div>{name}</div>
          </div>
          <ContainerProjects>
            <NewProjectTab/>
            <ProjectList>
              {projects.map((project, index) => (
                <ProjectComponent 
                Title={project.Title}
                key={index}
                onClick={() => handleClick(project.Id)}
                />
              ))}
            </ProjectList>
          </ContainerProjects>
        </ProjectCompTemplate>
      )}
    </>
  );
};
export default ProjectsMenu;