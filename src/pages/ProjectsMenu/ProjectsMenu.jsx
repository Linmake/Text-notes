import { useContext, useEffect, useState } from "react";
import { NewProjectTab } from "../../components/Project/NewProjectTab.jsx";
import { ProjectCompTemplate } from "../../components/Templates/ProjectCompTemplate.jsx";
import styled from "styled-components";
import axios from "axios";
import { positionSideContext } from "../../context/SideProv.jsx";
import { UseData } from "../../context/dataContext.jsx";
import NoProjects from "../../components/ProjectsMenu/NoProjects.jsx";
import Project from "../../components/ProjectsMenu/Project.jsx";
import MainHeader from "../../components/Header/MainHeader.jsx";
import { ProjectsMenuProvider } from "../../context/projectsMenuContext.jsx";

const ContainerProjects = styled.div`
  width: 52%;
  min-height: 45%;
  display: flex;
  box-shadow: 0px 0px 2px rgb(102, 102, 104);
  border-radius: 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 3%;
  padding-top: 2%;
  margin-top: 7%;
`;
const ProjectList = styled.ul`
  margin: 0 !important;
  padding-inline-start: 0 !important;
`;
/*
 *@returns List Projects
 */
const ProjectsMenu = () => {
  const [cookie, setCookie] = useState(null);
  const { projects, setProjects } = useContext(positionSideContext);
  const { setData, setProject } = UseData();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setCookie(document.cookie);
        const { data } = await axios.get(`http://localhost:4000/project/all`, {withCredentials: true});
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchProjects();
  }, [setProjects, setProject, setData]);

  return (
    <>
      <ProjectsMenuProvider>
        {projects.length == 0 ? (
          <NoProjects />
        ) : (
          <ProjectCompTemplate> 
            <MainHeader mainRoute={"http://localhost:3000"} />
            <ContainerProjects>
              <NewProjectTab />
              <ProjectList>
                {projects.map((project, index) => (
                  <Project Title={project.Title} Id={project.Id} key={index} />
                ))}
              </ProjectList>
            </ContainerProjects>
          </ProjectCompTemplate>
        )}
      </ProjectsMenuProvider>
    </>
  );
};
export default ProjectsMenu;
