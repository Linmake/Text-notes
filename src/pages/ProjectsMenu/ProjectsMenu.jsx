import { useContext, useEffect, useState } from "react";
import { NewProjectTab } from "../../components/Project/NewProjectTab.jsx";
import { ProjectCompTemplate } from "../../components/Templates/ProjectCompTemplate.jsx";
import styled from "styled-components";
import axios from "axios";
import { positionSideContext } from "../../context/SideProv.jsx";
import { UseData } from "../../context/dataContext.jsx";
import "../../styles/pages/projects/global.css";
import NoProjects from "../../components/ProjectsMenu/NoProjects.jsx";
import Project from "../../components/ProjectsMenu/Project.jsx";
import MainHeader from '../../components/Header/MainHeader.jsx'

const ContainerProjects = styled.div`
  width: 52%;
  display: flex;
  box-shadow: 0px 0px 2px rgb(102, 102, 104);
  border-radius: 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: fit-content;
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
        const {data} = await axios.get(`http://localhost:4000/project/all`);
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchProjects();
  }, [setProjects, setProject, setData]);

return (
    <>
      {projects.length == 0 
      ? <NoProjects/> 
       : (
         <ProjectCompTemplate>
          <MainHeader mainRoute={"http://localhost:4001"}/>
          <ContainerProjects>
            <NewProjectTab/>
            <ProjectList>
              {projects.map((project, index) => (
                <Project 
                Title={project.Title}
                Id={project.Id}
                key={index}
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