import { useContext } from "react";
import styled from "styled-components";
import { positionSideContext } from "../../context/SideProv";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const Container = styled.div`
    width: 5rem;
    border: 1px solid grey;
    display: flex;
    align-items: center;
`
const DeleteIcon = styled(FontAwesomeIcon)`
  width: 1.5rem;
  color: black;
  &:hover {
    cursor: pointer;
  }
  &:active {
    cursor: pointer;
  } 
`
const EditIcon = styled(FontAwesomeIcon)`
  width: 1.5rem;
  color: black; 
  &:hover {
    cursor: pointer;
  }
  &:active {
    cursor: pointer;
  }
`

const OptionsMenu = ({ Title, Id }) => {
    const { projects, setProjects } = useContext(positionSideContext);
    const handlerDelete = async (e) => {
        const { status } = await axios.delete(`http://localhost:4000/project/delete/${Id}`)
        if (!status) return
        projects.find(project => project.Id == Id)
        alert(`Project: ${Title} delete`)

    }

    const handlerEdit = () => {

    }
    return (
        <Container>
            <DeleteIcon
                icon={faTrash}
                onClick={(e) => handlerDelete(e)}
            />

            <EditIcon
                icon={faPenToSquare}
                onClick={(e) => handlerEdit(e)}
            />
        </Container>
    )
}
export default OptionsMenu