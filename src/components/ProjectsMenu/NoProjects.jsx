import styled from "styled-components";
import { NewProjectTab } from "../Project/NewProjectTab";
import { NoProjectCompTemplate } from "../Templates/NoProjectCompTemplate";


const NoProjectsContainer = styled.div`
  width: 52%;
  height: 45%;
  display: flex; 
  border: 1px solid #dee0e3;
  box-shadow: 0px 0px 4px #cccc;
  border-radius: 3px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.4);
  padding-top: 2%;
  margin-top: 7%;
`;
const Subtitle = styled.h2`
  font-size: 32px;
  color: #3b3a40;
  font-weight: bold;
  user-select: none;
`;

const NoProjects = () => {
    return (
      <NoProjectCompTemplate>
        <NoProjectsContainer>
          <NewProjectTab />
          <Subtitle className="subtitle-noprojects">Without projects</Subtitle>
        </NoProjectsContainer>
      </NoProjectCompTemplate>
    );
};

export default NoProjects