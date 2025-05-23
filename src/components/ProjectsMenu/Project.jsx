import { Link, NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";

const ProjectLi = styled.li`
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
  cursor: pointer;

  &:last-child {
    border: none;
  }
  &:hover {
    background-color: rgba(242, 244, 245, 0.45);
  }
`;
/**
 * 
 * @param {*} param0 
 * @returns Project Component
 */
const Project = ({Title, Id}) => {

  const navigate = useNavigate()

  const goToProject = (Id) => {
    return navigate(`/Project/${Id}`)
  }

    return(
        <ProjectLi 
        onClick={e => goToProject(Id)}
        >
            {Title}
        </ProjectLi>
    )
}
export default Project