import { useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderBlank, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import styled from "styled-components";
import { positionSideContext } from '@context/SideProv';
import axios from 'axios';
import { UseData } from '@context/dataContext';
import { FileList } from './FileList';
import { useNavigate } from 'react-router-dom';

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
  width: 40%;
  background-color: transparent;
  color: #fff;
  cursor: pointer;
  height: 5%;
  font-size: 1.5rem;
`;

const FolderList = () => {
  const { selectedFolderIndex, setSelectedFolderIndex, setStatusSelectFolder, setAddNewFile, statusSelectFolder } = useContext(positionSideContext);
  const { data, setOpenFolder, setFiles, openFolder } = UseData();
  const urlBase = "http://localhost:4000";
  const { folders, setFolders } = UseData()

  useEffect(() => {
    const getFolder = async () => {
      if (!data || !data.key) {
        console.error('Data is not available');
        return;
      }

      try {
        const res = await axios({
          url: `${urlBase}/folder/${data.key}/all`,
          method: 'GET'
        });
        return res;
      } catch (error) {
        console.error(error);
      }
    };
    const fetchData = async () => {
      const res = await getFolder();
      if (res && res.status === 200) {
        setFolders(res.data)
      } else {
        console.error(new Error("Error del servidor"))
      }
    };

    fetchData();
  }, [data, setFolders]);

  const navigateFolder = useNavigate();


  const cleanPath = () => {
    let currentPath = window.location.pathname;
    let segments = currentPath.split('/').filter(Boolean)
    segments.pop()
    const newPath = `/${segments.join('/')}`;
    navigateFolder(newPath);
  }

  const handlerBlur = () => {
    cleanPath();
  }


  const handlerSelectFolder = (index, id) => {
    const folder = folders.find(folder => folder.Id == id)
    let currentPath = window.location.pathname;
    if (!folder) {
      return
    }
    setOpenFolder(true)
    setFiles(folder.Files)
    console.log(currentPath)
    let urlFolder = [currentPath, id]
    navigateFolder(`${urlFolder[0]}/${urlFolder[1]}`)
    if (statusSelectFolder && selectedFolderIndex === index) {
      setStatusSelectFolder(false);
    } else {
      setStatusSelectFolder(true);
      setAddNewFile(false);
      setSelectedFolderIndex(index);
    }

    return
  };

  return (
    <ul className="nav">
      {folders.map((folder, index) => (
        <LiFolder
          className="nav-item liFolder"
          key={index}
        >
          <DivSelect className="text-white">
            <Folder
              className={`${selectedFolderIndex === index ? 'selected' : 'noSelected'}`}
              onClick={() => handlerSelectFolder(index, folder.Files, folder.Id)} onBlur={handlerBlur}
            >
              <FontAwesomeIcon
                icon={(selectedFolderIndex === index && statusSelectFolder) ? faFolderOpen : faFolderBlank}
                className={` ${selectedFolderIndex === index ? 'selected' : ''}`}
              />
              <InputFolder
                className="input-folder"
                value={folder.Title}
                readOnly
                onClick={() => handlerSelectFolder(index, folder.Id)}
                id={folder.id}
              />
            </Folder>
            {openFolder && selectedFolderIndex === index && (
              <FileList />
            )}
          </DivSelect>
        </LiFolder>
      ))}
    </ul>
  );
};
export default FolderList;