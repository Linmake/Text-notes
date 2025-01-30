import { faFile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { navItem, navLink } from './Hooks/themaStyled';
import { useContext, useEffect, useRef } from 'react';
import { positionSideContext } from '@context/SideProv';
import folders from '../../data/folders';

export const Li = styled.li`
list-style: none;
margin-left: 8%;
&.hiddens {
  display: none;
}
& > .nav-link {
  ${navItem}
}
& > .nav-item {
  ${navLink}
}
&.hiddens {
  display: none;
}
`
export const InputFile = styled.input`
  width: 100%;
  background-color: #5e5e5f;
  outline: none;
  border: none;
  color: azure;
  font-size: 1.3rem;
`

const NewFileContent = () => {
  const inputRefNewFile = useRef(null);
  const { addNewFile, setAddNewFile, selectedFolderIndex, statusSelectFolder } = useContext(positionSideContext);

  const focus = () => {
    inputRefNewFile.current.focus();
  };

  useEffect(() => {
    if (addNewFile) {
      focus();
    }
  }, [addNewFile]);

  useEffect(() => {
    if (statusSelectFolder) {
      inputRefNewFile.current.focus();
    }
  }, [statusSelectFolder]);

  const handlerNewFiles = (event) => {
    if (event.keyCode !== 13) {
      return;
    }
    if (inputRefNewFile.current.value === "") {
      setAddNewFile(false);
      return;
    }
    const newFile = {
      id: folders[selectedFolderIndex].files.length,
      titulo: inputRefNewFile.current.value,
      texto: ""
    };
    const idFolderSelect = selectedFolderIndex;
    console.log('Selected Folder ID:', idFolderSelect);
    const folder = folders.find(folder => folder.id === idFolderSelect);
    if (!folder) {
      console.error(`Folder with id ${idFolderSelect} not found.`);
      return;
    }
    const filesData = folder.files;
    filesData.push(newFile);
    inputRefNewFile.current.value = "";
    setAddNewFile(false);
  };

  const handlerBlur = () => {
    setAddNewFile(false);
    if (inputRefNewFile.current.value === '') return;
    inputRefNewFile.current.value = "";
  };

  return (
    <Li className={`nav-item ${(addNewFile) ? '' : 'hiddens'}`}>
      <div className="nav-link text-white">
        <FontAwesomeIcon id="iconFolder" icon={faFile} />
        <span className="fs-4 d-none d-sm-inline fa-table-list newFileInp">
          <InputFile ref={inputRefNewFile} type="text" id={`new-file-input`} onKeyDown={handlerNewFiles} onBlur={handlerBlur} />
        </span>
      </div>
    </Li>
  );
}

export default NewFileContent;
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { navItem, navLink } from './Hooks/themaStyled';
import { useContext, useEffect, useRef } from 'react';
import { positionSideContext } from '@context/SideProv';
import folders from '../../data/folders';

export const Li = styled.li`
list-style: none;
margin-left: 8%;
&.hiddens {
  display: none;
}
& > .nav-link {
  ${navItem}
}
& > .nav-item {
  ${navLink}
}
&.hiddens {
  display: none;
}
`
export const InputFile = styled.input`
  width: 100%;
  background-color: #5e5e5f;
  outline: none;
  border: none;
  color: azure;
  font-size: 1.3rem;
`

const NewFileContent = () => {
  const inputRefNewFile = useRef(null);
  const { addNewFile, setAddNewFile, selectedFolderIndex, statusSelectFolder } = useContext(positionSideContext);

  const focus = () => {
    inputRefNewFile.current.focus();
  };

  useEffect(() => {
    if (addNewFile) {
      focus();
    }
  }, [addNewFile]);

  useEffect(() => {
    if (statusSelectFolder) {
      inputRefNewFile.current.focus();
    }
  }, [statusSelectFolder]);

  const handlerNewFiles = (event) => {
    if (event.keyCode !== 13) {
      return;
    }
    if (inputRefNewFile.current.value === "") {
      setAddNewFile(false);
      return;
    }
    const newFile = {
      id: folders[selectedFolderIndex].files.length,
      titulo: inputRefNewFile.current.value,
      texto: ""
    };
    const idFolderSelect = selectedFolderIndex;
    console.log('Selected Folder ID:', idFolderSelect);
    const folder = folders.find(folder => folder.id === idFolderSelect);
    if (!folder) {
      console.error(`Folder with id ${idFolderSelect} not found.`);
      return;
    }
    const filesData = folder.files;
    filesData.push(newFile);
    inputRefNewFile.current.value = "";
    setAddNewFile(false);
  };

  const handlerBlur = () => {
    setAddNewFile(false);
    if (inputRefNewFile.current.value === '') return;
    inputRefNewFile.current.value = "";
  };

  return (
    <Li className={`nav-item ${(addNewFile) ? '' : 'hiddens'}`}>
      <div className="nav-link text-white">
        <FontAwesomeIcon id="iconFolder" icon={faFile} />
        <span className="fs-4 d-none d-sm-inline fa-table-list newFileInp">
          <InputFile ref={inputRefNewFile} type="text" id={`new-file-input`} onKeyDown={handlerNewFiles} onBlur={handlerBlur} />
        </span>
      </div>
    </Li>
  );
}

export default NewFileContent;
