import { useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderBlank, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import styled from "styled-components";
import { positionSideContext } from '../../context/SideProv';
import axios from 'axios';
import { UseData } from '../../context/dataContext';
import { FileList } from './FileList';
import { useNavigate } from 'react-router-dom';
import NewFileContent from './newFileContent';

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

/**
 * Componente que despliega la lista de los Folders visuales desde la bd 
 * @returns Lista de Folders 
 */
const FolderList = () => {

  const {
    selectedFolderIndex, setSelectedFolderIndex, setStatusSelectFolder,
    setAddNewFile,
    addNewFile,
    statusSelectFolder
  } = useContext(positionSideContext);

  const {
    data,
    setOpenFolder,
    setFiles,
    openFolder
  } = UseData();

  const DbUrl = "http://localhost:4000";

  const { folders, setFolders } = UseData()

  useEffect(() => {

    /**
     * Trae la lista de Folders desde la DB
     */
    const getFolder = async () => {
      if (!data || !data.key) {
        console.error('Data is not available');
        return;
      }

      /**
       * Consulta para obtener res de todos los Folders 
       */
      try {
        /**
         * resultado de todos los folders en el proyecto seleccionado
         */
        const res = await axios({
          url: `${DbUrl}/folder/${data.key}/all`,
          method: 'GET'
        });
        return res;
      } catch (error) {
        console.error(error);
      }

    };

    /**
     * Coloca los Folders obtenidos desde la BD a el contexto
     */
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
    setOpenFolder(false)
    setStatusSelectFolder(true);
  }


  const handlerSelectFolder = (index, id) => {
    const folder = folders.find(folder => folder.Id == id)
    let currentPath = window.location.pathname;
    if (!folder) {
      return
      alert("folder no existe")
    }

    setOpenFolder(true)
    setFiles(folder.Files)
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
              <>
                <NewFileContent
                  className="nav-item"
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