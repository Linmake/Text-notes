import { faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import GetUserId from "./Hook/GetUserId";
import { EditorFunctionsContext } from "../../context/editorFunctions";
import { UseData } from "../../context/dataContext";

export const FileComponent = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 8%;
  padding-left: 4% !important;
  height: 50%;
  &.selected {
    background-color: #5a5a5a67;
  }
  &.noSelected {
    background-color: transparent;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  width: 5%;
`
export const InputFile = styled.input`
  outline: none;
  border: none;
  width: 70%;
  height: 2rem;
  background-color: transparent;
  color: #fff;
  cursor: pointer;
  font-size: 1.2rem;
`;


/**
 * File component
 * @param {*} param0 
 * @returns
 */

const File = ({ file, onContextMenu }) => {
  const { fileCurrent, setFileCurrent } = useContext(EditorFunctionsContext);
  const { data, setOpenFolder, setFiles, files, openFolder, folders, setFolders } = UseData();

  const handlerFile = async (file) => {
    // const UserId = await GetUserId()
    if (fileCurrent?.Id !== file.Id) {
      setFileCurrent(file);
    }
    return
  }

  useEffect(() => {
    console.log(fileCurrent);
  }, [fileCurrent])

  return (
    <FileComponent
      className="nav-link text-white file"
      onClick={() => handlerFile(file)}
      onContextMenu={onContextMenu}
    >
      <Icon id={`iconFile-${file.Id}`} icon={faFile} />
      <InputFile readOnly value={file.Title} id={`file-${file.Id}`} />
    </FileComponent>
  );
}

export default React.memo(File);