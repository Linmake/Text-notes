import styled from "styled-components";
import { navItem, navLink } from "../Hooks/themaStyled";
import { UseData } from '../../context/dataContext';
import { useContext, useEffect, useRef, useState } from 'react'
import { positionSideContext } from '../../context/SideProv'
import File from "./File";

// Styled components
export const Container = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 100%;
  flex-grow: 1;
  height: 50%;
  &:last-child{
    margin-bottom: 3%;
  }  
`;

export const FileContainer = styled.li`
  display: flex;
  list-style: none;
  align-items: center;
  & > .nav-item {
    ${navItem}
    }
  & > .nav-link {
    ${navLink}
  &.selected {
    background-color: #5a5a5a67;
  }
  &.hidden {
    display: none;
  }
  &:hover{
    background-color: #2A2D2E;
  }
`;

export const InputFile = styled.input`
  outline: 1px solid #08538D;
  border: none;
  width: 70%;
  height: 2rem;
  background-color: transparent;
  color: #fff;
  cursor: pointer;
  font-size: 1.2rem;
  width: 100%;
`;

/**
 * ContextMenu for file options
 */

const ContainerMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.2rem;
  position: absolute;
  right: 10px;
  top: 5px;
  width: 8rem;
  z-index: 1000000;
  background-color: #1f1f1f;
  border: 1px solid #3e3e3e;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
`;

const ButtonEdit = styled.div`
  border-radius: 0.2rem;
  color: rgb(255, 255, 255);
  width: 100%;
  text-align: center;
  font-weight: 500;
  &:hover {
    cursor: pointer;
    background-color: #0078d4;
  }
  &:active {
    cursor: pointer;
    background-color: #0078d4;
  }
`;

const ButtonDelete = styled.div`
  border-radius: 0.2rem;
  color: rgba(255, 124, 124, 1);
  font-weight: 500;
  width: 100%;
  text-align: center;
  &:hover {
    background-color: #0078d4;
    cursor: pointer;
  }
  &:active {
    cursor: pointer;
    background-color: #0078d4;
  }
`;


const ContainerButtonEdit = styled.div`
  width: 100%;
  border-bottom: 1px solid #3e3e3e;
  padding: 0.2rem;
`;

const ContainerButtonDelete = styled.div`
  width: 100%;
  padding: 0.2rem;
`;

/**
 * 
 * @returns Component that renders a list of files.
 */
export const Files = () => {
  const { files, setFiles } = UseData();
  const { addNewFile } = useContext(positionSideContext)

  if ((!files || files.length === 0) && !addNewFile) {
    return <p>No files available</p>
  }

  const handlerSelectFile = (e) => {
    console.log('Selected file');
  }

  useEffect(() => { }, [files, setFiles]);

  const [optsMenu, setOptsMenu] = useState(false);
  const [idOptMenu, setIdOptMenu] = useState(null);
  const refMenuContainer = useRef(null);

  const handlerOptsMenu = (e, fileId) => {
    e.stopPropagation();
    e.preventDefault()
    const stringStyles = ContainerMenu.componentStyle.rules.join(";")
    const newStylesStr = stringStyles.concat(`left: ${e.pageX + 35}px; top: ${((e.pageY) - 60)}px;`)
    ContainerMenu.componentStyle.rules[0] = newStylesStr
    setOptsMenu(true);
    setIdOptMenu(fileId);
    console.log(idOptMenu)
  };

  const handlerEdit = (fileId) => {
    setEdit(true);
    setOptsMenu(false);
  };

  const handlerDelete = async (e, fileId) => {
    const { status } = await axios.delete(
      `http://localhost:4000/file/delete/${fileId}`
    );
    if (!status) return;
    const currentFiles = files.filter((folder) => file.Id !== fileId);
    setFolders(currentFiles);
    setOptsMenu(false);
  };

  const handlerOnBlur = (e) => {
    setEdit(false);
    setOptsMenu(false);
  };

  const handlerSaveEdit = async (event, FolderId) => {
    if (event.keyCode !== 13) return;
    const { status } = await axios.put(
      `http://localhost:4000/folder/edit/${projectId}/${FolderId}`,
      { Title: newTitle },
      { withCredentials: true }
    );
    if (status !== 200) console.info("Folder don't save");
    const folder = folders.find((folder) => folder.Id == FolderId);
    const newFolder = folders.find((folder) => folder.Id == FolderId);
    newFolder.Title = newTitle;
    const indexFolder = folders.findIndex((folder) => folder.Id == FolderId);
    const filterFolders = folders.filter((folder) => folder.Id !== FolderId);
    const newFolders = [...filterFolders];
    newFolders.splice(indexFolder, 0, newFolder);
    setFolders(newFolders);
    setEdit(false);
    setNewTitle(refEditInput.current.value);
    setOptsMenu(false);
  };

  useEffect(() => {
    const handlerOutMenu = (event) => {
      const menu = refMenuContainer.current;
      if (menu && !menu.contains(event.target)) {
        setOptsMenu(false);
      }
    };
    document.addEventListener("click", handlerOutMenu, true);
    document.addEventListener("contextmenu", handlerOutMenu, true);
    return () => {
      document.removeEventListener("click", handlerOutMenu, true);
      document.removeEventListener("contextmenu", handlerOutMenu, true);
    };
  }, [setOptsMenu]);

  return (
    <Container className="nav nav-pills flex-column ul-liFile">
      {
        files.map(file => (
          <FileContainer
            onClick={(e) => handlerSelectFile(e)}
            className="nav-item"
            key={file.Id}
          >
            <File
              file={file}
              onClick={() => handlerSelectFile()}
              onContextMenu={(e) => handlerOptsMenu(e, file.Id)}
            />
            {optsMenu && idOptMenu == file.Id ? (
              <ContainerMenu
                ref={refMenuContainer}
              >
                <ContainerButtonEdit>
                  <ButtonEdit
                    title="Edit"
                    onClick={() => handlerEdit(file.Id)}
                  >
                    Rename
                  </ButtonEdit>
                </ContainerButtonEdit>

                <ContainerButtonDelete>
                  <ButtonDelete
                    title="Delete"
                    onClick={(e) => handlerDelete(e, file.Id)}
                  >
                    Delete
                  </ButtonDelete>
                </ContainerButtonDelete>
              </ContainerMenu>
            ) : (
              <></>
            )}
          </FileContainer>
        ))
      }
    </Container >
  );
};