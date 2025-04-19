import { useEffect, useRef, useContext } from 'react';
import styled from "styled-components";
import axios from 'axios';
import { UseData } from '../../context/dataContext';
import { useParams } from 'react-router-dom';
import IconNewFile from '../../assets/addFileIconWhite.png'
import iconNewFolder from '../../assets/addFolderIconWhite.png'
import FolderList from './FolderList';
import ContainerFolders from './ContainerFolders';
import { positionSideContext } from '../../context/SideProv';
import NewFolderContent from './NewFolderContent';

const ContainerProyect = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: content-box;
  width: 100%;
  box-sizing: border-box;
  `

  const ContainerButtons = styled.div`
  box-sizing: content-box;
  width: 40%;
  margin-left: 10%;
  margin-top: 3%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 1rem;
  height: 70%;
  padding: 2%;
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
  height: 100%;
  border: none;
  background-size: 100%;
`

const ContainerTitleProject = styled.div`
width: 100%;
text-align: center;
margin-top: 8%;
max-height: 35%;
box-sizing: border-box;
h1{
    font-size: 1.2rem;
    color: #C1CCCC;
    }
`;

const Header = styled.header`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 8%;
  box-sizinxg: content-box;
  justify-content: space-between;
  margin-top: 5%;
  position: absolute;
  left: -3%;
  `

const ContainerProject = () => {
  const {
    setAddNewFile,
    setAddNewFolder,
  } = useContext(positionSideContext); 
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

  const handlerNewFolder = () => {
    setAddNewFolder(true)
  }

  const handlerNewFile = () => {
    setAddNewFile(true)
  }

  return (
    <ContainerProyect>
      <Header>
        <ContainerTitleProject><h1>{project.Title}</h1></ContainerTitleProject>
        <ContainerButtons>
          <IconButton
          id='newFileBttn'
          style={
                  {
                    backgroundImage: `url(${IconNewFile})`
                  }
                }
          onClick={() => handlerNewFile()}
          >
            <iconNewFile/>
          </IconButton>
          <IconButton
          id='newFolderBttn'
          style={
                  {
                    backgroundImage: `url(${iconNewFolder})`
                  }
                }
          onClick={() => handlerNewFolder()}
          >
            <iconNewFolder/>
          </IconButton>
        </ContainerButtons>
      </Header>
      <ContainerFolders>
        <NewFolderContent />
        <FolderList/>
      </ContainerFolders>
    </ContainerProyect>
  );
};

export default ContainerProject;