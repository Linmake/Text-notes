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

 width: 420px;
 box-sizing: border-box;
  height: 260px;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 1rem;
  flex-wrap: wrap;
  box-shadow: rgba(222, 222, 222, 0.4) 0px 2px 15px 0px, rgba(222, 222, 222, 0.4) 0px 1px 5px 0px;

  font-size: 1.3rem;
  list-style: none;
  font-family: "Poppins", "Lucida Sans", "Lucida Sans Regular";
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  white-space: nowrap;
  align-items: center;
  color: #000;
  gap: 15%;
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


const ProjectContainer = styled.div`
    width: 420px;
    box-sizing: border-box;
    height: 260px;
    background-color: white;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    padding: 1rem;
    
    box-shadow: rgba(222, 222, 222, 0.4) 0px 2px 15px 0px, rgba(222, 222, 222, 0.4) 0px 1px 5px 0px;
    `
const Category = styled.div`
  width: 70px;
  height: 1.3rem;
  margin-top: 1rem;
  font-size: 0.9rem;
  background-color: #E2D5FF;
  color: #8C57FF;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  justify-content: center !important;
  `

const ProjectInput = styled.input`
  width: 65%;
  height: 25%;
  text-align: center;
  border: none;
  cursor: pointer;
  border-radius: 0.2rem;
  outline: none;
  font-size: 1.2rem;
  font-bold: 500;
  margin-top: 0.5rem;
`;

const ImgBann = styled.img`
width: 100%;
height: 112px;
border-radius: 10px;
border: 1px solid grey;
`

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
      { Title: newTitle }, { withCredentials: true }
    );
    if (status !== 200) console.info("project no guardado");
    const projectsList = projects.filter((project) => project.Id !== Id);
    const editProject = projects.find(project => project.Id == Id)
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

  useEffect(() => { }, [setEdit, setOptsMenu])
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
        <ProjectContainer>
          <ImgBann src={"#"} />
          <Category>
            Project
          </Category>
          <ProjectInput
            value={Title}
            type={"text"}
            readOnly={true}
            onClick={(e) => goToProject(Id)}
            ref={refInput}
          />
        </ProjectContainer>
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
        {(optsMenu) ?
          (
            <ContainerMenu ref={refMenuContainer}>
              <EditIcon title="Edit" icon={faPenToSquare} onClick={(e) => handlerEdit(e)} />
              <DeleteIcon title="Delete" icon={faTrashAlt} onClick={(e) => handlerDelete(e)} />
            </ContainerMenu>
          ) : (<></>)}
      </ContainerOptions>
    </Container>
  );
};
export default Project;
