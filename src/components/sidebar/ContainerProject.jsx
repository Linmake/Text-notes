import { useEffect } from 'react';
import styled from "styled-components";
import axios from 'axios';
import { UseData } from '../../context/dataContext';
import { useParams } from 'react-router-dom';
import IconNewFile from '../../assets/addFileIconWhite.png'
import iconNewFolder from '../../assets/addFolderIconWhite.png'
import FolderList from './FolderList';

const ContainerProyect = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: content-box;
  width: 100%;
  `
  const ContainerButtons = styled.div`
  box-sizing: content-box;
  width: 40%;
  margin-left: 10%;
  margin-top: 4%;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  `

  const ContainerFolders = styled.div`
  box-sizing: content-box;
  margin-top: 20%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  `
  const IconButton = styled.button`
  align-items: center;
  background-position: bottom;
  cursor: pointer;
  justify-content: center;
  background-repeat: no-repeat;
  display: flex;
  background-color: transparent;
  width: 1.5rem;
  height: 30%;
  border: none;
  background-size: 100%;
`
const ContainerTitleProject = styled.div`
width: 100%;
text-align: center;
margin-top: 5%;
padding-left: 0;
h1{
    font-size: 1.2rem;
    }
`;

const Header = styled.header`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 14lvh;
  box-sizinxg: content-box;
  justify-content: space-between;
  margin-top: 5%;
  position: absolute;
  left: -3%;
  `


const ContainerProject = () => {
  const DbUrl = "http://localhost:4000";
  const { projectId } = useParams()
  
  const {
    project,
    setProject
  } = UseData();

  useEffect(() => {
    const getProject = async () => {
      try {
        const res = await axios({
          url: `${DbUrl}/project/${projectId}`,
          method: 'GET'
        });
        return res;
      } catch (error) {
        console.error(new Error(`Server status code: (${res.status}, ${res.statusText}), ${res.data}`))
        return
      }
    };

    const fetchData = async () => {
      const resFetch = await getProject()
      if (resFetch.status == '200'){
          setProject(resFetch.data)
      }
    }
    fetchData();
  }, []);
  return (
    <ContainerProyect>
      <Header>
        <ContainerTitleProject><h1>{project.Title}</h1></ContainerTitleProject>
        <ContainerButtons>
          <IconButton id='newFileBttn' style={{backgroundImage: `url(${IconNewFile})`}}><iconNewFile/></IconButton>
          <IconButton style={{backgroundImage: `url(${iconNewFolder})`}} id='newFolderBttn'><iconNewFolder/></IconButton>
        </ContainerButtons>
      </Header>
      <ContainerFolders>
        <FolderList/>
      </ContainerFolders>
    </ContainerProyect>
  );
};
export default ContainerProject;