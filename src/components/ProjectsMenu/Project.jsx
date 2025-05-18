import styled from "styled-components";

const Project = styled.li`
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
 * Gets projects from Db
 * @param {String} param0 Title
 * @returns Project
 */
const ProjectComponent = ({Title}) => {
    return(
        <Project>
            {Title}
        </Project>
    )
}

export default ProjectComponent