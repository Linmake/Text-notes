import { faFolderBlank } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useEffect, useRef } from 'react';
import { positionSideContext } from '@context/SideProv';
import styled from 'styled-components';
import { navItem, navLink } from './Hooks/themaStyled';
import folders from '../../data/folders';

export const Li = styled.li`
list-style: none;
  &.hiddens {
    display: none;
  }
  &>.nav-item {
    ${navItem}
  }
  & > .nav-link {
    ${navLink}
  }
`;

export const InputFolder = styled.input`
  width: 100%;
  background-color: #5e5e5f;
  outline: none;
  border: none;
  color: azure;
`

const NewFolderContent = () => {
  const inputRefNewFolder = useRef(null);

  const { addNewFolder, addNewFile, setAddNewFolder, setProyectoVacio } = useContext(positionSideContext);

  useEffect(() => {
    if (addNewFolder) {
      inputRefNewFolder.current.focus();
    }
  }, [addNewFolder]);

  const handlerNewFolders = (event) => {
    if (event.keyCode !== 13) {
      return;
    }
    if (inputRefNewFolder.current.value === "") {
      setAddNewFolder(false);
      return;
    }
    const newFolder = {
      id: 0,
      nombre: inputRefNewFolder.current.value,
      files: []
    }
    //const foldersOrdened = [...folders, newFolder].sort();
    folders.push(newFolder)
    inputRefNewFolder.current.value = "";
    setAddNewFolder(false);
    setProyectoVacio(false);
  };

  const inputFolderOnBlur = () => {
    const newFolder = inputRefNewFolder.current.value;
    if (addNewFile) {
      return
    }
    if (newFolder === "") {
      setAddNewFolder(false);
      if (folders.length === 0) {
        setProyectoVacio(true);
        return;
      }
      return;
    }
  };
  return (
    <Li className={`nav-item ${addNewFolder ? '' : 'hiddens'}`}>
      <div className="nav-link text-white">
        <FontAwesomeIcon id="iconFolder" icon={faFolderBlank} />
        <span className="fs-4 d-none d-sm-inline fa-table-list">
          <InputFolder
            ref={inputRefNewFolder}
            type="text"
            id="newFolderInp"
            onKeyDown={handlerNewFolders}
            onBlur={inputFolderOnBlur}
          />
        </span>
      </div>
    </Li>
  );
};

export default NewFolderContent;
