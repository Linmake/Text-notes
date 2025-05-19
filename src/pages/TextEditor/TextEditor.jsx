import { positionSideContext, SideProv } from '../../context/SideProv'
import { EditorProvider } from '../../context/editorFunctions';
import EditorCompTemplate from "../../components/Templates/EditorCompTemplate";
import SideBar from "../../components/sidebar/SideBar";
import QuillEditor from "../../components/Editor/QuillEditor";
import styled from 'styled-components';
import { useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {useParams} from 'react-router-dom'
import { UseData } from '../../context/dataContext';
import EditorHeader from '../../components/Header/EditorHeader';

const FilterSelectProject = styled.div`
z-index: 100;
position: fixed;
top: 0;
background-color: RGBA(5,5,5, 0.5);
left: 0;
width: 100vw;
height: 100vh;
padding: 5rem;
`
const ContainerFilter = styled.div`
position: absolute;
box-shadow: 0px 0px 5px #c4c7cc;
border: 1px solid #dee0e3;
background-color: white;
width: 40%;
height: 65%;
top: 17%;
left: 30%;
padding-top: 50px;
padding-left: 110px;
padding-right: 110px;
padding-bottom: 0px;
`
const Contend = styled.div`
height: 90%;
display: flex;
flex-direction: column;
gap: 8%;

border-radius: 2px;
align-items: center;
padding: 40px;
`
const ContainerFolders = styled.div`
display: flex;
background-color: white;
border: 1px solid #dee0e3;
box-shadow: 0px 0px 2px #c4c7cc;
width: 500px;
max-height: 400px;
top: 30%;
left: 40px;
justify-content: center;
`

const ListProjects = styled.ul`
  margin: 0 !important;
  padding-inline-start: 0 !important;
  display: flex;
  flex-direction: column;
`

const ProjectElement = styled.li`
  border-bottom: 1px solid #C4C7C5;
  font-size: 1.3rem;
  list-style: none;
  font-family: "Poppins", 'Lucida Sans', 'Lucida Sans Regular';
  width: 50vw;
  height: 80px;
  padding: 16px;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: flex;
  align-items: center;
  color: #000;
  cursor: pointer;

  &:last-child {
  border: none;
  padding-bottom: 0;
  }
  &:hover {
    background-color: #F2F4F5;
  }
`;

const getProjects = async () => {
  try {
    const res = await axios.get(`http://localhost:4000/project/all`);
    return res;
  } catch (error) {
    console.error(error);
  }
};

const TextEditor = () => {
  const { projects, setProjects } = useContext(positionSideContext);
  const { setData, setProject } = UseData()
  const { projectId } = useParams()
  
  const navigate = useNavigate();
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await getProjects();
        setProjects(res.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };
    fetchProjects();
  }, [setProjects, setData]);

  
const noProjectsOpen = () => {  
  return (
    <>
      <FilterSelectProject>
        <ContainerFilter>
          <Contend>
            <h1>Abrir un project</h1>
            <ContainerFolders>
            <ListProjects>
              {projects.map((project, index) => (
                <ProjectElement key={index} onClick={() => handlerOpen(project.Id)} >
                  {project.Title}
                </ProjectElement>
              ))}
            </ListProjects>
            </ContainerFolders>
          </Contend>
        </ContainerFilter>
      </FilterSelectProject>
      <SideBar />
      <EditorHeader/>
      <QuillEditor />
    </>
  )
}

const handlerOpen = (id) => {
  navigate(id)
  setData({ key: id })
  const findProject = projects.find(project => project.Id == id)
  setProject(findProject)
}
  return (
    <EditorCompTemplate className="plantilla-body-editor">
      <SideProv>
        <EditorProvider>
          <SideBar />
          <EditorHeader/>
          <QuillEditor />
        </EditorProvider>
      </SideProv>
    </EditorCompTemplate>
  );
};

export default TextEditor