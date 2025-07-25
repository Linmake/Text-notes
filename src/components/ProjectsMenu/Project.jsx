import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// import OptionsMenu from "./OptionsMenu";
import { useContext, useEffect, useRef, useState } from "react";
import { ProjectsMenuContext } from "../../context/projectsMenuContext";
import { positionSideContext } from "../../context/SideProv";
import { faEllipsis, faPenToSquare, faPortrait, faTrash, faTrashAlt, faTrashArrowUp, faTrashCanArrowUp } from "@fortawesome/free-solid-svg-icons";
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
  padding-left: 0.2rem;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: flex;
  align-items: center;
  color: #000;
  gap: 15%;
`;
const ProjectInput = styled.input`
  width: 65%;
  height: 98%;
  border: none;
  cursor: pointer;
  border-radius: 0.2rem;
  outline: none;
`;
const EditProjectInput = styled.input`
  width: 65%;
  height: 98%;
  border: none;
  border-radius: 0.2rem;
  outline: none;
`;
const ContainerOptions = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
`;
const ContainerMenu = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.2rem;
  position: relative;
  left: 2%;
  top: -2%;
  padding: 0.5rem;
  width: 5.5rem;
  height: 90%;
  z-index: 100;
  background-color: white;
  border: 1px solid grey;
`;
const DeleteIcon = styled(FontAwesomeIcon)`
  width: 1.5rem;
  color:rgb(247, 93, 76);
  &:hover {
    cursor: pointer;
  }
  &:active {
    cursor: pointer;
  }
`;
const EditIcon = styled(FontAwesomeIcon)`
  width: 1.5rem;
  color:rgb(102, 196, 240);
  &:hover {
    cursor: pointer;
  }
  &:active {
    cursor: pointer;
  }
`;
const MenuIcon = styled(FontAwesomeIcon)`
  width: 1.7rem;
  margin-right: 0.5rem;
  color:rgb(26, 79, 104);
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
  const [optsMenu, setOptsMenu] = useState(false);
  const [edit, setEdit] = useState(false);
  const [newTitle, setNewTitle] = useState(null);
  const refInput = useRef(null);
  const refEditInput = useRef(null);
  const refMenuContainer = useRef(null)

  const goToProject = (Id) => {
    return navigate(`/Project/${Id}`);
  };

  const handlerDelete = async (e) => {
    const { status } = await axios.delete(
      `http://localhost:4000/project/delete/${Id}, {withCredentials: true}`
    );
    if (!status) return;
    const currentProjects = projects.filter((project) => project.Id !== Id);
    setProjects(currentProjects);
    setOptsMenu(false)
  };

  const handlerEdit = (e) => {
    setEdit(true);
    setOptsMenu(false)
  };
  const handlerOptsMenu = (e) => {
    setOptsMenu(true);
  };

  const handlerSaveEdit = async (event) => {
    if (event.keyCode !== 13) return;
    const { status } = await axios.put(
      `http://localhost:4000/project/edit/${Id}`,
      { Title: newTitle }, {withCredentials: true}
    );
    if (status !== 200) console.info("project no guardado");
    const projectsList = projects.filter((project) => project.Id !== Id);
    const editProject = projects.find( project => project.Id == Id )
    const indexOrigProject = projects.indexOf(editProject)
    editProject.Title = newTitle
    projectsList.splice(indexOrigProject, 0, editProject)
    setProjects(projectsList)
    setEdit(false)
    setOptsMenu(false)
  };

  const handlerOnBlur = (e) => {
    setEdit(false)
    setOptsMenu(false)
  }

  useEffect( () => {}, [setEdit, setOptsMenu])
useEffect(() => {
  const handlerOutMenu = (event) => {
    const menu = refMenuContainer.current;
    if (menu && !menu.contains(event.target)) {
      setOptsMenu(false);
    }
  };

  document.addEventListener("click", handlerOutMenu, true);

  return () => {
    document.removeEventListener("click", handlerOutMenu, true);
  };
}, [setOptsMenu]);

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
        <EditProjectInput
          autoFocus
          ref={refEditInput}
          onChange={(e) => setNewTitle(refEditInput.current.value)}
          onKeyDown={(e) => handlerSaveEdit(e)}
          onBlur={e => handlerOnBlur(e)}
        />
      )}
      <ContainerOptions>
        <MenuIcon title="Options" icon={faEllipsis} onClick={(e) => handlerOptsMenu(e)} />
          {(optsMenu)?
          (
            <ContainerMenu ref={refMenuContainer}>
              <EditIcon  title="Edit" icon={faPenToSquare} onClick={(e) => handlerEdit(e)}/>
              <DeleteIcon  title="Delete" icon={faTrashAlt} onClick={(e) => handlerDelete(e)} />
            </ContainerMenu>
          ):(<></>)}
      </ContainerOptions>
    </Container>
  );
};
export default Project;
