import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useRef } from "react";
import { positionSideContext } from "../../context/SideProv";
import styled from "styled-components";
import { navItem, navLink } from "../Hooks/themaStyled";
import { getDate } from "../sidebar/Hooks/date";
import { UseData } from "../../context/dataContext";
import { v4 as uuidV4 } from "uuid";
import axios from "axios";
import GetUserId from "../Hooks/GetUserId/GetUserId";

export const Li = styled.li`
  list-style: none;
  margin-left: 9%;
  margin-bottom: 0 !important;
  &.hiddens {
    display: none;
  }
  & > .nav-item {
    ${navItem}
  }
  & > .nav-link {
    ${navLink}
  }
`;
export const InputFolder = styled.input`
  width: 100%;
  background-color: #212529 !important;
  outline: none;
  border: none;
  color: azure;
  font-size: 1.1rem;
  color: #c1cccc;
`;
/**
 *
 * @returns Dispara un input para guardar un folder
 */
const NewFolderContent = () => {
  const { folders, setFolders } = UseData();
  const inputRefNewFolder = useRef(null);
  const { addNewFolder, setAddNewFolder, setProjectVoid } =
    useContext(positionSideContext);

  const { project } = UseData();

  useEffect(() => {
    if (addNewFolder) {
      inputRefNewFolder.current.focus();
    }
  }, [addNewFolder]);

  /**
   * Guarda la creacion de un folder con la tecla Enter, una vez ingresado el nombre
   * @param {*} event
   * @returns folder nuevo
   */
  const handlerNewFolders = async (event) => {
    if (event.keyCode !== 13) {
      return;
    }
    if (inputRefNewFolder.current.value === "") {
      setAddNewFolder(false);
      return;
    }
    const UserId = await GetUserId();
    const newFolder = {
      Id: uuidV4(),
      Title: inputRefNewFolder.current.value,
      Date: getDate,
      Void: true,
      ProjectId: project.Id,
      Files: [],
      UserId: UserId,
    };
    try {
      const resFolders = await axios.post(
        `http://localhost:4000/folder/create`,
        newFolder,
        {withCredentials: true}
      );
      setFolders([...folders, newFolder]);
      setAddNewFolder(false);
      inputRefNewFolder.current.value = "";
      setProjectVoid(false);
      return resFolders;
    } catch (error) {
      console.error(error);
    }
  };
  const inputFolderOnBlur = async () => {
    const title = inputRefNewFolder.current.value;
    if (title === "") {
      setAddNewFolder(false);
      if (folders.length === 0) {
        setProjectVoid(true);
        return;
      }
      return;
    } else {
      try {
        const newFolder = {
          Id: uuidV4(),
          Title: inputRefNewFolder.current.value,
          Date: getDate,
          Void: true,
          ProjectId: project.Id,
          Files: [],
        };
        const resFolders = await axios.post(
          `http://localhost:4000/folder/create`,
          newFolder,
          {withCredentials: true}
        );
        setFolders([...folders, newFolder]);
        setAddNewFolder(false);
        inputRefNewFolder.current.value = "";
        setProjectVoid(false);
        return resFolders;
      } catch (error) {
        console.error(error);
      }
    }
  };
  return (
    <Li className={addNewFolder ? "" : "hiddens"}>
      <div className="nav-link text-white">
        <FontAwesomeIcon id="iconFolder" icon={faChevronRight} />
        <span className="fs-4 d-none d-sm-inline fa-table-list">
          <InputFolder
            ref={inputRefNewFolder}
            type="text"
            id="newFolderInp"
            onKeyDown={(e) => handlerNewFolders(e)}
            onBlur={inputFolderOnBlur}
          />
        </span>
      </div>
    </Li>
  );
};
export default NewFolderContent;
