import { faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { EditorFunctionsContext } from "../../context/editorFunctions";
import axios, { Axios } from "axios";

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

const File = ({ file }) => {
    // const { fileCurrent, setFileCurrent } = useContext(EditorFunctionsContext);

    const [fileCurrent, setFile] = useState(null)

    const handlerFile = async(file) => {
      const { data } = await axios.get("http://localhost:4000/account/idAccount", {withCredentials: true})
      alert(data)
  }


  useEffect(() => {}, [setFile])

  return (
    <FileComponent
      className="nav-link text-white file"
      onClick={() => handlerFile(file)}
    >
      <Icon id={`iconFile-${file.Id}`} icon={faFile} />
      <InputFile readOnly value={file.Title} id={`file-${file.Id}`} />
    </FileComponent>
  );
}
export default File