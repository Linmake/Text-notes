import { useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderBlank, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import styled from "styled-components";
import { positionSideContext } from '../../context/SideProv';
import axios from 'axios';
import { UseData } from '../../context/dataContext';
import { FileList } from './FileList';
import { useNavigate } from 'react-router-dom';
import NewFileContent from './ContainerNewFiles';
import styles from '../../styles/components//editor/FolderList.css'
import { EditorFunctionsContext } from '../../context/editorFunctions';

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
 * Componente que despliega la lista de los Folders visuales desde la bd 
 * @returns Lista de Folders 
 */
const FolderList = () => {

  const DbUrl = "http://localhost:4000";

  const {
    selectedFolderIndex,
    setSelectedFolderIndex,
    setStatusSelectFolder,
    setAddNewFile,
    addNewFile,
    statusSelectFolder,
    idFolderSelect,
    setIdFolderSelect
  } = useContext(positionSideContext);

  const { 
    setFileCurrent,
    fileCurrent
   } = useContext(EditorFunctionsContext);

  const {
    data,
    setOpenFolder,
    setFiles,
    openFolder,
    folders,
    setFolders,
  } = UseData();

  useEffect(() => {
    const getFolders = async () => {
      try {
        const res = await axios({
          url: `${DbUrl}/folder/${data.key}/all`,
          method: 'GET'
        });
        return res;
      } catch (error) {
        console.error(error);
        return
      }
    };

    /**
     * Coloca los Folders obtenidos desde la BD a el contexto
     */
    const fetchData = async () => {

      const resFetch = await getFolders()

      if (resFetch && resFetch.status === 200) {
        setFolders(resFetch.data)

      } else {
        console.error(new Error("Error del servidor"))
      }
    };

    fetchData();

  }, [data, setFolders, fileCurrent]);

  /*useEffect(() => {
    const getFiles = async () => {
      try {
        const res = await axios({
          url: `${DbUrl}/files/${data.key}/all`,
          method: 'GET'
        });
        return res;
      } catch (error) {
        console.error(error);
        return
      }
    };
    /**
     * Coloca los Files obtenidos desde la BD a el contexto
     
    const fetchData = async () => {

      const resFetch = await getFiles()

      if (resFetch && resFetch.status === 200) {
        setFiles(resFetch.data)

      } else {
        console.error(new Error("Error del servidor"))
      }
    };

    fetchData();

  }, [data, setFiles]);*/

  const navigateFolder = useNavigate();

  
  const cleanSamePath = () => {
    let currentPath = window.location.pathname;
    let segments = currentPath.split('/').filter(Boolean); // Divide en segmentos
    if (segments.length > 2) {
      segments.pop(); // Elimina el penúltimo segmento
      segments.pop(); // Elimina el último segmento
      let newPath = `/${segments.join('/')}`; // Une de nuevo en formato de URL
      navigateFolder(newPath, { replace: true }); // Reemplaza en la historia del navegador
    } else {
      navigateFolder(`/${segments.join('/')}`, { replace: true }); // Mantiene la URL base
    }
  };
  
  const changePath = (currentPath) => {
    let segments = currentPath.split('/').filter(Boolean); // Divide en segmentos
    if(segments.length <= 2 ){ 
      return currentPath
    }
      segments.pop(); // Elimina el último segmento
      let newPath = `/${segments.join('/')}`; // Une de nuevo en formato de URL
      return newPath
  };
  
  const handlerSelectFolder = (index, id) => {
    const folder = folders.find(folder => folder.Id == id)
    let currentPath = changePath(window.location.pathname);
    if (!folder) {
      return
    }
    setIdFolderSelect(folder.Id)
    setOpenFolder(true)
    setFiles(folder.Files) //!!todo

    let urlFolder = [currentPath, id]
    
    navigateFolder(`${urlFolder[0]}/${urlFolder[1]}`)
    
    if (statusSelectFolder && selectedFolderIndex === index) {
      setStatusSelectFolder(false);
      setSelectedFolderIndex(""); //al volver a hacer click en el mismo folder se cierra y elimina el index del contexto
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
              className={`${selectedFolderIndex == index ? 'selected' : 'noSelected'}`}
              onClick={() => handlerSelectFolder(index, folder.Files, folder.Id)}>
              <FontAwesomeIcon
                icon={(selectedFolderIndex === index && statusSelectFolder) ? faFolderOpen : faFolderBlank}
                className={` ${selectedFolderIndex === index ? 'selected' : ''}`}
              />
              <InputFolder
                className="input-folder"
                value={folder.Title}
                title={folder.Title}
                readOnly
                onClick={() => handlerSelectFolder(index, folder.Id)}
                id={folder.id}
              />
            </Folder>
            {openFolder && selectedFolderIndex === index && (
              <>
                <NewFileContent
                  className={`nav-item ${(addNewFile) ? '' : 'hidde'}`}
                  key={"InputNewFile"} />
                <FileList />
              </>
            )}
          </DivSelect>
        </LiFolder>
      ))}
    </ul>
  );
};
export default FolderList;