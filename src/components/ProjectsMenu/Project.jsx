import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// import OptionsMenu from "./OptionsMenu";
import { useContext, useRef, useState } from "react";
import { ProjectsMenuContext } from "../../context/projectsMenuContext";
import { positionSideContext } from "../../context/SideProv";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const Container = styled.li`
  border-bottom: 1px solid #c4c7c5;
  font-size: 1.3rem;
  list-style: none;
  font-family: "Poppins", "Lucida Sans", "Lucida Sans Regular";
  width: 58vw;
  height: 80px;
  padding-top: 0.625rem;
  padding-left: 1.2rem;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: flex;
  align-items: center;
  color: #000;
  border: 1px solid grey;
  gap: 10%;
`;
const ProjectInput = styled.input`
  width: 10rem;
  border: 1px solid grey;
  cursor: pointer;
  &:hover {
    background-color: rgba(242, 244, 245, 0.45);
  }
  &:active {
    background-color: rgba(242, 244, 245, 0.45);
  }
`;
const ContainerOptions = styled.div`
  width: 5rem;
  border: 1px solid grey;
  display: flex;
  align-items: center;
`;
const DeleteIcon = styled(FontAwesomeIcon)`
  width: 1.5rem;
  color: black;
  &:hover {
    cursor: pointer;
  }
  &:active {
    cursor: pointer;
  }
`;
const EditIcon = styled(FontAwesomeIcon)`
  width: 1.5rem;
  color: black;
  &:hover {
    cursor: pointer;
  }
  &:active {
    cursor: pointer;
  }
`;
/**
 *
 * @param {*} param0
 * @returns Project Component
 */
const Project = ({ Title, Id }) => {
  const { projects, setProjects } = useContext(positionSideContext);
  const navigate = useNavigate();
  const [ edit, setEdit ] = useState(false);
  const [newTitle, setNewTitle] = useState(null)
  const refInput = useRef(null);
  const refEditInput = useRef(null);

  const goToProject = (Id) => {
    return navigate(`/Project/${Id}`);
  };

  const handlerDelete = async (e) => {
    const { status } = await axios.delete(
      `http://localhost:4000/project/delete/${Id}`
    );
    if (!status) return;
    const currentProjects = projects.filter((project) => project.Id !== Id);
    setProjects(currentProjects);
  };

  const handlerEdit = (e) => {
    setEdit(true);
  };

  const handlerSaveEdit = (e) => {
    if(e.keyCode !== 13) return
    alert(newTitle)
  };


  return (
    <Container>
      {!edit ? (
        <ProjectInput
          value={Title}
          type={"text"}
          readOnly={true}
          onClick={(e) => goToProject(Id)}
          ref={refInput}
        />
      ) : (
        <input 
          autoFocus
          ref={refEditInput}
          onChange={e=>setNewTitle(refEditInput.current.value)}
          onKeyDown={e=>handlerSaveEdit(e)}
        />
      )}
      <ContainerOptions>
        <DeleteIcon icon={faTrash} onClick={(e) => handlerDelete(e)} />
        <EditIcon icon={faPenToSquare} onClick={(e) => handlerEdit(e)} />
      </ContainerOptions>
    </Container>
  );
};
export default Project;
