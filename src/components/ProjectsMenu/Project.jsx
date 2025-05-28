import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  justify-content: space-between;
  &:last-child {
    border: none;
  }
  &:hover {
    background-color: rgba(242, 244, 245, 0.45);
  }
  &:active {
    background-color: rgba(242, 244, 245, 0.45);
  }
`;
/**
 * 
 * @param {*} param0 
 * @returns Project Component
 */
const Project = ({ Title, Id }) => {

  const navigate = useNavigate()

  const goToProject = (Id) => {
    return navigate(`/Project/${Id}`)
  }

  return (
    <ProjectLi
      onClick={e => goToProject(Id)}
    >
      {Title}
      <svg
        width={"1rem"}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"

      >
        <path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z" />
      </svg>
    </ProjectLi>
  )
}
export default Project