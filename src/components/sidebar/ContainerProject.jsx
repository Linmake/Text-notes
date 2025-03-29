import { useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderBlank, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import styled from "styled-components";
import { positionSideContext } from '../../context/SideProv';
import axios from 'axios';
import { UseData } from '../../context/dataContext';
import { FileList } from './FileList';
import { useNavigate, useParams } from 'react-router-dom';
import NewFileContent from './ContainerNewFiles';
import styles from '../../styles/components//editor/FolderList.css'

export const LiFolder = styled.li`
  width: 100%;
  margin-top: 0;
  &.selected {
    background-color: #5a5a5a8a;
  }
  &.noSelected{
   background-color: transparent;
  }
`;

const DivSelect = styled.div`
  display: flex;
  flex-direction: column;
`;

const Folder = styled.div`
  gap: 0.7rem;
  display: flex;
  align-items: baseline;
  padding: 0;
  margin-top: 1rem;
  margin-bottom: 1rem;
  word-wrap: break-word;
  white-space: nowrap;
  border-radius: 0 !important;
  width: 100%;
  margin-left: 7px;
  cursor: pointer;
  &:hover {
    background-color: #5a5a5a2b;
  }
`;

const InputFolder = styled.input`
  outline: none;
  border: none;
  width: 55%;
  background-color: transparent;
  color: #fff;
  cursor: pointer;
  height: 5%;
  font-size: 1.5rem;
`;

/**
 * 
 * @returns 
 */
const ContainerProject = () => {

  const DbUrl = "http://localhost:4000";
  const { projectId } = useParams()

  const {
    selectedFolderIndex,
    setSelectedFolderIndex,
    setStatusSelectFolder,
    setAddNewFile,
    addNewFile,
    statusSelectFolder,
    setIdFolderSelect,
  } = useContext(positionSideContext);
  
  const {
    data,
    setOpenFolder,
    setFiles,
    openFolder,
    folders,
    setFolders,
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
        console.error(new Error(`Server status code: (${resFetch.status}, ${resFetch.statusText}), ${resFetch.data}`))
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
    <>
      <h1>
        {project.Title}
      </h1>
    </>
  );
};
export default ContainerProject;