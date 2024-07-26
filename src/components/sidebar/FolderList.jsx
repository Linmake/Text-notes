import { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderBlank, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import styled from "styled-components";
import { positionSideContext } from '@context/SideProv';
import { FileList } from './FileList';
import axios from 'axios';

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
  &:hover{
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
  font-size: 1.5rem
`;

export const urlBase = "http://localhost:4000/"
const getFolder = async () => {
  try {
    const res = await axios({
      url: `${urlBase}folder/all`,
      method: 'GET'
    })
    return res
  } catch (error) {
    console.error(error);
  }
}

export const newFolder = async () => {
  try {
    const res = await axios.post(`${urlBase}folder/create`, {

    })
    return res
  } catch (error) {
    console.error(`error del servidor: ${error}`)
  }
}

const FolderList = () => {
  const { addNewFolder, selectedFolderIndex, setSelectedFolderIndex, setStatusSelectFolder, setAddNewFile, statusSelectFolder } = useContext(positionSideContext);

  const [folders, setFolders] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await getFolder()
      if (res.status === 200) {
        setFolders(res.data)
      }
      console.log(res)
    }
    fetchData()
  }, [setFolders])

  useEffect(() => {

    newFolder()

  }, [addNewFolder])

  const handlerSelectFolder = (index) => {
    if (statusSelectFolder && selectedFolderIndex === index) {
      setStatusSelectFolder(false);
    } else {
      setStatusSelectFolder(true);
      setAddNewFile(false)
      setSelectedFolderIndex(index);
    }
  };

  return (
    <ul className="nav">
      {folders.map((folder, index) => (
        <LiFolder
          className="nav-item liFolder"
          key={folder.id}
        >
          <DivSelect
            className="text-white"
          >
            <Folder
              className={`${selectedFolderIndex === index ? 'selected' : 'noSelected'}`}
              onClick={() => handlerSelectFolder(index)}
            >
              <FontAwesomeIcon icon={(selectedFolderIndex === index && statusSelectFolder) ? faFolderOpen : faFolderBlank} className={` ${selectedFolderIndex === index ? 'selected' : ''}`} />
              <InputFolder
                className="input-folder"
                value={folder.Title}
                readOnly
                onClick={() => handlerSelectFolder(index)}
                id={folder.id}
              />
            </Folder>
            <FileList indexFolder={index} />
          </DivSelect>
        </LiFolder>
      ))}
    </ul>
  );
};

export default FolderList